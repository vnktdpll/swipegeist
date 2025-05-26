import { Card } from '../types';

const WIKIPEDIA_API_URL = 'https://en.wikipedia.org/w/api.php';

interface WikipediaCategory {
  ns: number;
  title: string;
}

interface WikipediaPage {
  pageid: number;
  ns: number;
  title: string;
  extract?: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
  categories?: WikipediaCategory[];
  missing?: string;
  invalid?: string;
  images?: {
    title: string;
  }[];
}

interface WikipediaResponse {
  batchcomplete: string;
  query: {
    pages: {
      [key: string]: WikipediaPage;
    };
  };
}

interface WikipediaCategoryMembersResponse {
  batchcomplete?: string;
  continue?: {
    cmcontinue: string;
    continue: string;
  };
  query?: {
    categorymembers: {
      pageid: number;
      ns: number;
      title: string;
    }[];
  };
}

interface WikipediaLinksResponse {
    batchcomplete?: string;
    query?: {
        pages?: {
            [pageId: string]: {
                pageid: number;
                ns: number;
                title: string;
                links?: {
                    ns: number;
                    title: string;
                }[];
            };
        };
    };
}

const processCategories = (categories: WikipediaCategory[] | undefined): string[] => {
  const processed: string[] = [];
  if (!categories || !Array.isArray(categories)) {
    return processed;
  }

  for (const cat of categories) {
    if (cat && typeof cat.title === 'string' && cat.title.length > 0) {
      let title = cat.title;
      if (title.startsWith('Category:')) {
        title = title.substring(9);
      }
      if (title.length > 0) {
        processed.push(title);
      }
    }
  }
  return processed;
};

export const getRandomArticle = async (category: string, retries = 3): Promise<Card | null> => {
  console.log(`Fetching random article for category: ${category}, Retries left: ${retries}`);
  if (retries <= 0) {
    console.warn(`No suitable article found for category ${category} after multiple attempts.`);
    return getRandomArticleFallback(); // Fallback if retries exhausted
  }

  try {
    // 1. Get random pages within the category
    const categoryMembersUrl = `${WIKIPEDIA_API_URL}?action=query&format=json&list=categorymembers&cmtitle=Category:${encodeURIComponent(category)}&cmlimit=500&origin=*`;
    console.log('Category members URL:', categoryMembersUrl);
    const categoryMembersResponse = await fetch(categoryMembersUrl);
    console.log('Category members response status:', categoryMembersResponse.status);
    if (!categoryMembersResponse.ok) {
      throw new Error(`HTTP error! status: ${categoryMembersResponse.status}`);
    }
    const categoryMembersData: WikipediaCategoryMembersResponse = await categoryMembersResponse.json();
    console.log('Category members data:', JSON.stringify(categoryMembersData, null, 2));

    const members = categoryMembersData.query?.categorymembers;
    if (!members || members.length === 0) {
      console.warn(`No items found in category: ${category}`);
      return getRandomArticleFallback();
    }

    // Filter members to only include main articles (ns: 0)
    const articleMembers = members.filter(member => member.ns === 0);

    if (articleMembers.length === 0) {
        console.warn(`No *articles* (ns:0) found in category: ${category}, only subcategories or other types.`);
        return getRandomArticleFallback();
    }

    // Pick a random member from the filtered list
    const randomMember = articleMembers[Math.floor(Math.random() * articleMembers.length)];
    const pageId = randomMember.pageid;
    console.log('Got random article page ID from category:', pageId);

    // 2. Fetch details for the selected page ID - ADD images prop
    const articleDetailsUrl = `${WIKIPEDIA_API_URL}?action=query&format=json&pageids=${pageId}&prop=extracts|pageimages|categories|images&exintro=1&explaintext=1&piprop=thumbnail&pithumbsize=300&origin=*`;
    console.log('Article details URL:', articleDetailsUrl);
    const articleDetailsResponse = await fetch(articleDetailsUrl);
    console.log('Article details response status:', articleDetailsResponse.status);
    if (!articleDetailsResponse.ok) {
      throw new Error(`HTTP error! status: ${articleDetailsResponse.status}`);
    }
    const articleDetailsData: WikipediaResponse = await articleDetailsResponse.json();
    console.log('Article details data:', JSON.stringify(articleDetailsData, null, 2));

    const page = articleDetailsData.query?.pages?.[pageId];
    if (!page || page.missing !== undefined || page.invalid !== undefined) {
      console.error('Failed to get page details for page ID:', pageId);
      return getRandomArticle(category, retries - 1); 
    }

    console.log('Extracted page data:', JSON.stringify(page, null, 2));

    const imageUrl = page.thumbnail?.source;
    if (!imageUrl || imageUrl.includes('placeholder.com')) {
        console.warn(`Article ${pageId} ('${page.title}') missing image or has placeholder. Retrying...`);
        return getRandomArticle(category, retries - 1);
    }

    // 3. Process image list if available
    let additionalImageUrls: string[] = [];
    if (page.images && page.images.length > 0) {
        // Filter out non-image files (like SVGs, logos often have 'File:')
        const imageFiles = page.images
            .map(img => img.title)
            .filter(title => title.match(/\.(jpe?g|png|gif)$/i)); // Basic image extension check
            // .filter(title => !title.startsWith('File:')); // Alternative filter

        if (imageFiles.length > 0) {
            // Fetch URLs for these image titles (requires another API call)
            const imageInfoUrl = `${WIKIPEDIA_API_URL}?action=query&format=json&titles=${imageFiles.map(encodeURIComponent).join('|')}&prop=imageinfo&iiprop=url&origin=*`;
            console.log('Fetching image URLs:', imageInfoUrl);
            try {
                const imageInfoResponse = await fetch(imageInfoUrl);
                if (imageInfoResponse.ok) {
                    const imageInfoData = await imageInfoResponse.json();
                    console.log('Image Info Data:', JSON.stringify(imageInfoData, null, 2));
                    const pages = imageInfoData.query?.pages;
                    if (pages) {
                        additionalImageUrls = Object.values(pages)
                            .map((imgPage: any) => imgPage.imageinfo?.[0]?.url)
                            .filter((url): url is string => !!url);
                        console.log('Fetched additional image URLs:', additionalImageUrls);
                    }
                }
            } catch (imgError) {
                console.error('Error fetching additional image URLs:', imgError);
                // Proceed without additional images if fetching fails
            }
        }
    }

    const card: Card = {
      id: page.pageid,
      imageUrl: imageUrl,
      imageUrls: additionalImageUrls, // Add the fetched URLs
      description: page.title,
      tags: processCategories(page.categories),
      views: '0', 
      likes: 0, 
      comments: [], 
      fullContent: page.extract || 'No content available',
      sourceUrl: `https://en.wikipedia.org/?curid=${page.pageid}` 
    };

    console.log('Created card:', JSON.stringify(card, null, 2));
    return card;
  } catch (error) {
    console.error('Detailed error in getRandomArticle:', error);
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack available');
    return getRandomArticle(category, retries - 1);
  }
};

// Need to update Fallback function similarly to include 'images' prop and fetch URLs
const getRandomArticleFallback = async (retries = 3): Promise<Card | null> => {
    console.log(`Falling back to fetching completely random article... Retries left: ${retries}`);
    if (retries <= 0) {
      console.error('Fallback failed after multiple retries.');
      return null; // Return null if fallback fails completely
    }

    try {
        // Fetch completely random page ID
        const randomUrl = `${WIKIPEDIA_API_URL}?action=query&format=json&list=random&rnnamespace=0&rnlimit=1&origin=*`;
        const randomResponse = await fetch(randomUrl);
        if (!randomResponse.ok) throw new Error(`Fallback HTTP error! status: ${randomResponse.status}`);
        const randomData = await randomResponse.json();
        const pageId = randomData.query?.random?.[0]?.id;
        if (!pageId) throw new Error("Fallback failed to get random page ID");

        // Fetch details for that random page ID - ADD images prop
        const detailsUrl = `${WIKIPEDIA_API_URL}?action=query&format=json&pageids=${pageId}&prop=extracts|pageimages|categories|images&exintro=1&explaintext=1&piprop=thumbnail&pithumbsize=300&origin=*`;
        const detailsResponse = await fetch(detailsUrl);
        if (!detailsResponse.ok) throw new Error(`Fallback details HTTP error! status: ${detailsResponse.status}`);
        const detailsData: WikipediaResponse = await detailsResponse.json();
        const page = detailsData.query?.pages?.[pageId];
        if (!page || page.missing !== undefined || page.invalid !== undefined) throw new Error("Fallback failed to get page details");

        const imageUrl = page.thumbnail?.source;
        if (!imageUrl || imageUrl.includes('placeholder.com')) {
            console.warn(`Fallback article ${pageId} ('${page.title}') missing image or has placeholder. Retrying fallback...`);
            return getRandomArticleFallback(retries - 1);
        }

        // Process additional images (similar logic as in getRandomArticle)
        let additionalImageUrls: string[] = [];
        if (page.images && page.images.length > 0) {
            const imageFiles = page.images
                .map(img => img.title)
                .filter(title => title.match(/\.(jpe?g|png|gif)$/i));

            if (imageFiles.length > 0) {
                const imageInfoUrl = `${WIKIPEDIA_API_URL}?action=query&format=json&titles=${imageFiles.map(encodeURIComponent).join('|')}&prop=imageinfo&iiprop=url&origin=*`;
                try {
                    const imageInfoResponse = await fetch(imageInfoUrl);
                    if (imageInfoResponse.ok) {
                        const imageInfoData = await imageInfoResponse.json();
                        const pages = imageInfoData.query?.pages;
                        if (pages) {
                            additionalImageUrls = Object.values(pages)
                                .map((imgPage: any) => imgPage.imageinfo?.[0]?.url)
                                .filter((url): url is string => !!url);
                        }
                    }
                } catch (imgError) {
                    console.error('Error fetching additional image URLs in fallback:', imgError);
                }
            }
        }

        const card: Card = {
          id: page.pageid,
          imageUrl: imageUrl,
          imageUrls: additionalImageUrls, // Add the fetched URLs
          description: page.title,
          tags: processCategories(page.categories),
          views: '0',
          likes: 0,
          comments: [],
          fullContent: page.extract || 'No content available',
          sourceUrl: `https://en.wikipedia.org/?curid=${page.pageid}`
        };
        console.log('Created fallback card:', JSON.stringify(card, null, 2));
        return card;

    } catch (fallbackError) {
        console.error('Error during fallback getRandomArticle:', fallbackError);
        return getRandomArticleFallback(retries - 1);
    }
};

export const getRelatedArticle = async (currentArticleId: number, direction: 'left' | 'right', category: string): Promise<Card | null> => {
  console.log('Fetching related article...');
  console.log('Current article ID:', currentArticleId);
  console.log('Direction:', direction);
  console.log('Category:', category);

  try {
    if (direction === 'left') {
      console.log('Left swipe - getting random article (fallback)');
      // Left swipe still uses the completely random fallback for now.
      // If you want left swipe to also use the current category, 
      // change this to: return getRandomArticle(category);
      return getRandomArticleFallback();
    } else {
      // Right swipe - get another random article from the *same category*
      console.log('Right swipe - getting random article from category:', category);
      return getRandomArticle(category); 
      /* 
      // --- Removed old link-based logic for right swipe --- 
      const linksUrl = `${WIKIPEDIA_API_URL}?action=query&format=json&pageids=${currentArticleId}&prop=links&pllimit=max&origin=*`;
      // ... rest of the link fetching logic ...
      */
    }
  } catch (error) {
    console.error('Detailed error in getRelatedArticle:', error);
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack available');
    return getRandomArticleFallback(); // Fallback on any error
  }
}; 