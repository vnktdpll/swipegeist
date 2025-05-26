// data/mockData.ts
import { Card, List } from '../types';

export const mockCards: Card[] = [
  {
    id: 1,
    imageUrl: 'https://api.a0.dev/assets/image?text=interesting_tech_news&aspect=16:9',
    description: 'AI breakthrough enables machines to understand and generate human-like emotions in real-time.',
    tags: ['Technology', 'News', 'Trending'],
    views: '2.4k',
    likes: 856,
    comments: [
      {
        id: 1,
        user: {
          username: 'techie123',
          avatar: 'https://api.a0.dev/assets/image?text=user_avatar_1&aspect=1:1',
        },
        text: 'This is absolutely mind-blowing! The future is here.',
        likes: 45,
        timestamp: '2h ago',
        replies: []
      },
    ],
    fullContent: 'Researchers at a leading AI lab have developed a new neural network architecture that can detect and respond to human emotions with unprecedented accuracy. The system, which combines computer vision, natural language processing, and advanced sentiment analysis, can identify subtle facial expressions and voice modulations to gauge emotional states in real-time. This breakthrough could revolutionize fields from customer service to mental health treatment, enabling more natural human-computer interactions.'
  },
  {
    id: 2,
    imageUrl: 'https://api.a0.dev/assets/image?text=cute_animal&aspect=16:9',
    description: 'New marsupial species discovered in Australian rainforest shows remarkable climate adaptation.',
    tags: ['Animals', 'Science', 'News'],
    views: '1.8k',
    likes: 654,
    comments: [],
    fullContent: 'Biologists working in the remote regions of Queensland, Australia have identified a previously unknown marsupial species that demonstrates extraordinary adaptation to changing climate conditions. The small, nocturnal creature, provisionally named "Antechinus climaticus," possesses unique physiological traits that allow it to regulate body temperature efficiently in both extreme heat and cool conditions. Scientists believe studying this animal could provide valuable insights into evolutionary adaptation mechanisms that might help other species survive in increasingly volatile climate conditions.'
  },
  {
    id: 3,
    imageUrl: 'https://api.a0.dev/assets/image?text=quantum_computing&aspect=16:9',
    description: 'Quantum computing milestone: First practical error correction achieved in silicon-based qubits.',
    tags: ['Technology', 'Science', 'Trending'],
    views: '3.2k',
    likes: 1243,
    comments: [
      {
        id: 1,
        user: {
          username: 'quantumleap',
          avatar: 'https://api.a0.dev/assets/image?text=user_avatar_2&aspect=1:1',
        },
        text: 'This is the breakthrough we\'ve been waiting for!',
        likes: 78,
        timestamp: '4h ago',
        replies: []
      }
    ],
    fullContent: 'Scientists at a major research university have demonstrated the first practical quantum error correction in silicon-based quantum bits, addressing one of the biggest obstacles to building functional quantum computers. The team successfully maintained quantum information integrity for over 5 minutes, a dramatic improvement over previous records measured in milliseconds. This development could accelerate the timeline for practical quantum computing applications in fields ranging from drug discovery to materials science.'
  },
  {
    id: 4,
    imageUrl: 'https://api.a0.dev/assets/image?text=sustainable_fashion&aspect=16:9',
    description: 'Sustainable fashion brand creates biodegradable clothing line from food waste.',
    tags: ['Fashion', 'Trending', 'Health'],
    views: '1.5k',
    likes: 732,
    comments: [],
    fullContent: 'An innovative sustainable fashion startup has launched a clothing line made entirely from food industry byproducts. The collection features fabrics derived from orange peels, coffee grounds, and pineapple leaves that would otherwise end up in landfills. Not only are the garments stylish and comfortable, but they\'re also completely biodegradable, breaking down within six months in composting conditions. The company has partnered with major food producers to scale up production and plans to expand their offerings to include accessories and home goods.'
  },
  {
    id: 5,
    imageUrl: 'https://api.a0.dev/assets/image?text=space_exploration&aspect=16:9',
    description: 'Private space company announces plans for first commercial lunar research station by 2028.',
    tags: ['Science', 'News', 'Technology'],
    views: '4.7k',
    likes: 2156,
    comments: [
      {
        id: 1,
        user: {
          username: 'stargazer42',
          avatar: 'https://api.a0.dev/assets/image?text=user_avatar_3&aspect=1:1',
        },
        text: 'Finally! The commercialization of space is accelerating faster than expected.',
        likes: 124,
        timestamp: '1d ago',
        replies: []
      }
    ],
    fullContent: 'A leading private space exploration company has unveiled ambitious plans to establish the first commercial research station on the lunar surface by 2028. The facility, named "Artemis Base Alpha," will accommodate up to 8 researchers for 30-day missions and feature laboratories for materials science, biology, and astronomy. The company has secured $3.2 billion in funding from venture capital firms and corporate partners interested in lunar resource utilization and manufacturing in low-gravity environments. Construction components will be launched in multiple missions beginning in 2026.'
  },
  {
    id: 6,
    imageUrl: 'https://api.a0.dev/assets/image?text=culinary_innovation&aspect=16:9',
    description: 'Chef pioneers new culinary technique combining traditional fermentation with molecular gastronomy.',
    tags: ['Food', 'Trending', 'Art'],
    views: '1.2k',
    likes: 543,
    comments: [],
    fullContent: 'Renowned chef Maria Sanchez has developed a groundbreaking culinary technique that marries ancient fermentation practices with cutting-edge molecular gastronomy. The process, which she calls "molecular fermentation," creates entirely new flavor profiles and textures by precisely controlling bacterial cultures at the molecular level. Her signature dish—a fermented mushroom carpaccio with enzyme-activated fruit foam—has earned her restaurant a third Michelin star and sparked a waiting list extending six months. Sanchez plans to publish her research and techniques in an open-source cookbook to inspire culinary innovation worldwide.'
  },
  {
    id: 7,
    imageUrl: 'https://api.a0.dev/assets/image?text=renewable_energy&aspect=16:9',
    description: 'Breakthrough in perovskite solar cells achieves record-breaking 31% efficiency.',
    tags: ['Technology', 'Science', 'News'],
    views: '2.8k',
    likes: 1087,
    comments: [
      {
        id: 1,
        user: {
          username: 'solarpower',
          avatar: 'https://api.a0.dev/assets/image?text=user_avatar_4&aspect=1:1',
        },
        text: 'This could be the tipping point for widespread solar adoption!',
        likes: 92,
        timestamp: '6h ago',
        replies: []
      }
    ],
    fullContent: 'Scientists at the National Renewable Energy Laboratory have achieved a record-breaking 31% efficiency with their latest perovskite-silicon tandem solar cell design. This efficiency surpasses the theoretical limit of traditional silicon cells and approaches the performance of much more expensive multi-junction cells used in space applications. The team solved previous durability issues by developing a new encapsulation technique that protects the perovskite layer from moisture and UV degradation, potentially extending the operational lifetime to over 25 years. Several major solar manufacturers have already licensed the technology for commercial production.'
  },
  {
    id: 8,
    imageUrl: 'https://api.a0.dev/assets/image?text=esports_championship&aspect=16:9',
    description: 'Global esports championship breaks viewership records with 24 million concurrent viewers.',
    tags: ['Gaming', 'Sports', 'Trending'],
    views: '5.3k',
    likes: 2431,
    comments: [],
    fullContent: 'The World Gaming League Championship finals shattered all previous esports viewership records with an unprecedented 24 million concurrent viewers across streaming platforms. The tournament, featuring teams from 16 countries competing in the popular tactical shooter "Valorant Nexus," awarded a record-breaking $10 million prize pool. The winning team, South Korea\'s Dragon Phoenix, defeated Brazil\'s Verde Vipers in a nail-biting five-game series that lasted nearly six hours. Industry analysts note that the viewership numbers now rival traditional sports championships, signaling esports\' continued mainstream growth.'
  },
  {
    id: 9,
    imageUrl: 'https://api.a0.dev/assets/image?text=medical_breakthrough&aspect=16:9',
    description: 'CRISPR gene therapy successfully treats sickle cell disease in landmark clinical trial.',
    tags: ['Health', 'Science', 'News'],
    views: '3.6k',
    likes: 1876,
    comments: [
      {
        id: 1,
        user: {
          username: 'medresearcher',
          avatar: 'https://api.a0.dev/assets/image?text=user_avatar_5&aspect=1:1',
        },
        text: 'As someone who\'s worked in hematology for decades, I can\'t overstate how significant this is.',
        likes: 156,
        timestamp: '2d ago',
        replies: []
      }
    ],
    fullContent: 'A groundbreaking clinical trial has demonstrated the first successful treatment of sickle cell disease using CRISPR gene editing technology. All 22 patients in the trial have remained symptom-free for over 18 months after receiving the one-time treatment, which edits the patient\'s own stem cells to produce healthy hemoglobin. The therapy, developed through a collaboration between university researchers and a biotech startup, has received fast-track approval from regulatory agencies and could be widely available within two years. Researchers are now adapting the approach to target other genetic blood disorders like beta-thalassemia.'
  },
  {
    id: 10,
    imageUrl: 'https://api.a0.dev/assets/image?text=virtual_reality&aspect=16:9',
    description: 'Next-generation VR headset eliminates motion sickness through neural feedback system.',
    tags: ['Technology', 'Gaming', 'Health'],
    views: '2.1k',
    likes: 945,
    comments: [],
    fullContent: 'A tech startup has unveiled a revolutionary virtual reality headset that claims to completely eliminate VR-induced motion sickness through a proprietary neural feedback system. The device, called NeuroVR, uses non-invasive electrodes to monitor and subtly stimulate the user\'s vestibular system, keeping it in sync with visual input. Early testers report being able to engage in high-motion VR experiences for hours without any discomfort. The technology could dramatically expand the potential applications for virtual reality beyond gaming into fields like architectural visualization, therapeutic applications, and professional training simulations where motion sickness has been a significant barrier.'
  },
  {
    id: 11,
    imageUrl: 'https://api.a0.dev/assets/image?text=ocean_cleanup&aspect=16:9',
    description: 'Autonomous ocean cleanup fleet removes 50,000 tons of plastic from Pacific garbage patch.',
    tags: ['Science', 'News', 'Technology'],
    views: '3.9k',
    likes: 2105,
    comments: [
      {
        id: 1,
        user: {
          username: 'oceanadvocate',
          avatar: 'https://api.a0.dev/assets/image?text=user_avatar_6&aspect=1:1',
        },
        text: 'This gives me hope for the future of our oceans!',
        likes: 187,
        timestamp: '3d ago',
        replies: []
      }
    ],
    fullContent: 'The Ocean Restoration Project has announced that its fleet of autonomous solar-powered vessels has successfully removed over 50,000 tons of plastic waste from the Great Pacific Garbage Patch. The fleet of 15 vessels, each equipped with AI-guided collection systems and onboard recycling facilities, has been operating continuously for the past year. The collected plastic is sorted, processed, and compressed onboard before being transferred to partner ships that return the material to land for recycling into construction materials and consumer products. The project aims to remove 90% of floating plastic from the patch by 2030.'
  },
  {
    id: 12,
    imageUrl: 'https://api.a0.dev/assets/image?text=urban_architecture&aspect=16:9',
    description: 'Vertical forest skyscraper in Singapore becomes world\'s first carbon-negative building.',
    tags: ['Design', 'News', 'Science'],
    views: '1.7k',
    likes: 823,
    comments: [],
    fullContent: 'The newly completed "Emerald Tower" in Singapore has become the world\'s first certified carbon-negative building, absorbing more carbon dioxide than it produces through its operations and construction. The 70-story skyscraper features over 200,000 plants and trees integrated into its facade and terraces, which collectively absorb an estimated 400 tons of CO2 annually. The building generates 140% of its energy needs through a combination of high-efficiency solar panels, wind turbines integrated into its design, and a pioneering algae bioreactor system. The project has won multiple international architecture awards and is being studied as a model for future urban development.'
  },
  {
    id: 13,
    imageUrl: 'https://api.a0.dev/assets/image?text=music_ai&aspect=16:9',
    description: 'AI composer collaborates with symphony orchestra on groundbreaking classical-electronic fusion.',
    tags: ['Music', 'Technology', 'Art'],
    views: '2.3k',
    likes: 1132,
    comments: [
      {
        id: 1,
        user: {
          username: 'classicalfan',
          avatar: 'https://api.a0.dev/assets/image?text=user_avatar_7&aspect=1:1',
        },
        text: 'I was skeptical but attended the premiere - it was genuinely moving and innovative.',
        likes: 64,
        timestamp: '5d ago',
        replies: []
      }
    ],
    fullContent: 'The London Philharmonic Orchestra has premiered a groundbreaking composition created through collaboration between an AI composer system and human musicians. The piece, titled "Synthetic Harmony," combines classical orchestration with electronic elements generated in real-time by the AI during performance. The AI, developed by music technology researchers, was trained on thousands of classical compositions and contemporary electronic music, learning to create a unique fusion style. During the performance, the AI responded to the emotional intensity of the orchestra\'s playing, creating a dynamic dialogue between human and machine creativity that critics have described as "opening an entirely new chapter in musical expression."'
  },
  {
    id: 14,
    imageUrl: 'https://api.a0.dev/assets/image?text=cryptocurrency&aspect=16:9',
    description: 'Central banks of 12 countries announce joint digital currency initiative for cross-border transactions.',
    tags: ['Finance', 'Crypto', 'News'],
    views: '4.5k',
    likes: 1876,
    comments: [],
    fullContent: 'A consortium of 12 central banks, including those of Japan, Canada, Switzerland, and Singapore, have announced a coordinated initiative to develop interoperable central bank digital currencies (CBDCs) for international transactions. The project, named "Nexus," aims to create a seamless cross-border payment system that reduces costs and settlement times from days to seconds. The technical framework will use a permissioned blockchain architecture with built-in compliance and identity verification features. The banks expect to launch a pilot program within 18 months, potentially revolutionizing global finance by providing an alternative to the current SWIFT system and reducing dependence on the US dollar for international trade.'
  },
  {
    id: 15,
    imageUrl: 'https://api.a0.dev/assets/image?text=sports_innovation&aspect=16:9',
    description: 'Revolutionary smart basketball training system adopted by NBA teams shows dramatic improvement in shooting accuracy.',
    tags: ['Sports', 'Technology', 'Fitness'],
    views: '2.9k',
    likes: 1345,
    comments: [
      {
        id: 1,
        user: {
          username: 'bballcoach',
          avatar: 'https://api.a0.dev/assets/image?text=user_avatar_8&aspect=1:1',
        },
        text: 'We implemented this with our high school team and saw 15% improvement in just one month.',
        likes: 112,
        timestamp: '1w ago',
        replies: []
      }
    ],
    fullContent: 'A cutting-edge basketball training system combining computer vision, AI analysis, and haptic feedback has been adopted by seven NBA teams after showing remarkable results in player development. The system, called "PerfectShot," uses high-speed cameras to capture and analyze a player\'s shooting form in real-time, providing immediate feedback through a wearable device that uses subtle vibrations to guide proper muscle memory. Teams using the technology have reported an average 18% improvement in three-point shooting percentage after eight weeks of training. The system\'s AI component creates personalized training regimens based on each player\'s unique biomechanics and identifies specific areas for improvement invisible to the human eye.'
  },
  {
    id: 16,
    imageUrl: 'https://api.a0.dev/assets/image?text=archaeology_discovery&aspect=16:9',
    description: 'Archaeologists uncover 5,000-year-old advanced underwater structure off Japanese coast.',
    tags: ['Science', 'News', 'Education'],
    views: '3.7k',
    likes: 1987,
    comments: [],
    fullContent: 'Marine archaeologists have discovered a massive stone structure lying 40 meters beneath the sea off the coast of Yonaguni, Japan. The complex, which appears to be human-made rather than a natural formation, features precise right angles, straight walls, and what seem to be ceremonial spaces. Carbon dating of organic material found embedded in the structure suggests it is approximately 5,000 years old, predating the Egyptian pyramids. If confirmed as artificial, the discovery would dramatically alter our understanding of prehistoric Japanese civilization and ancient engineering capabilities. Researchers are using advanced underwater mapping technology to create a comprehensive 3D model of the site for further study.'
  },
  {
    id: 17,
    imageUrl: 'https://api.a0.dev/assets/image?text=plant_based_meat&aspect=16:9',
    description: 'New plant-based meat alternative indistinguishable from animal products in blind taste tests.',
    tags: ['Food', 'Health', 'Science'],
    views: '2.2k',
    likes: 1056,
    comments: [
      {
        id: 1,
        user: {
          username: 'veggielover',
          avatar: 'https://api.a0.dev/assets/image?text=user_avatar_9&aspect=1:1',
        },
        text: 'I\'ve tried every meat alternative on the market and this one is truly revolutionary.',
        likes: 87,
        timestamp: '4d ago',
        replies: []
      }
    ],
    fullContent: 'Food technology startup GreenMeat has developed a plant-based protein that has become the first to consistently fool expert taste testers in blind comparisons with animal products. The company\'s proprietary process uses a combination of pea protein, mushroom mycelium, and fermented yeast to create a product that replicates not just the flavor but also the complex fibrous structure and cooking behavior of animal muscle tissue. Unlike previous alternatives, GreenMeat products caramelize, render fat, and develop a crust when cooked. The company has secured partnerships with several major restaurant chains and plans to launch consumer products in grocery stores next quarter at price parity with premium animal products.'
  },
  {
    id: 18,
    imageUrl: 'https://api.a0.dev/assets/image?text=drone_delivery&aspect=16:9',
    description: 'Nationwide drone delivery network launches in Rwanda, delivering medical supplies to remote areas.',
    tags: ['Technology', 'Health', 'News'],
    views: '1.9k',
    likes: 876,
    comments: [],
    fullContent: 'Rwanda has launched the world\'s first nationwide medical drone delivery network, capable of delivering blood, vaccines, and essential medicines to any location in the country within 30 minutes. The system, developed through a public-private partnership, consists of 40 distribution centers equipped with autonomous drones that can fly in most weather conditions and deliver payloads with precision parachute drops. The network has already completed over 100,000 deliveries and saved an estimated 1,100 lives by providing rapid access to blood transfusions and emergency medications in remote areas. Several neighboring countries have signed agreements to implement similar systems, potentially transforming healthcare delivery across the region.'
  },
  {
    id: 19,
    imageUrl: 'https://api.a0.dev/assets/image?text=brain_computer_interface&aspect=16:9',
    description: 'Non-invasive brain-computer interface allows paralyzed patients to type at 90 words per minute.',
    tags: ['Technology', 'Health', 'Science'],
    views: '4.1k',
    likes: 2234,
    comments: [
      {
        id: 1,
        user: {
          username: 'neuroscientist',
          avatar: 'https://api.a0.dev/assets/image?text=user_avatar_10&aspect=1:1',
        },
        text: 'This represents a quantum leap in BCI technology - the non-invasive aspect is key.',
        likes: 203,
        timestamp: '2w ago',
        replies: []
      }
    ],
    fullContent: 'Researchers have developed a breakthrough non-invasive brain-computer interface that allows people with paralysis to type at speeds approaching 90 words per minute - comparable to average smartphone typing speeds. The system uses a combination of functional near-infrared spectroscopy (fNIRS) and electroencephalography (EEG) to detect neural signals through the skull with unprecedented precision. Unlike previous high-performance BCIs that required surgical implantation of electrodes, this external headset can be used immediately without medical procedures. Five patients with spinal cord injuries have been using the system in a clinical trial, reporting that it has transformed their ability to communicate and work independently. The research team is now adapting the technology for broader motor control applications.'
  },
  {
    id: 20,
    imageUrl: 'https://api.a0.dev/assets/image?text=wildlife_conservation&aspect=16:9',
    description: 'Innovative conservation project successfully reintroduces extinct-in-the-wild rhino species.',
    tags: ['Animals', 'Science', 'News'],
    views: '2.6k',
    likes: 1432,
    comments: [],
    fullContent: 'The International Rhino Conservation Consortium has announced the successful reintroduction of the Northern White Rhino to protected wilderness in Uganda, marking the first time an extinct-in-the-wild mammal species has been fully restored through advanced reproductive technologies. The project combined in vitro fertilization, surrogate pregnancy in Southern White Rhinos, and pioneering genetic diversity management to create a founding population of 14 Northern White Rhinos from preserved genetic material. After three years in a protected sanctuary, the rhinos have now been released into a larger reserve where they are thriving and have produced the first wild-born calf in over two decades. The techniques developed for this project are now being adapted for other critically endangered species.'
  },
  {
    id: 21,
    imageUrl: 'https://api.a0.dev/assets/image?text=augmented_reality&aspect=16:9',
    description: 'Lightweight AR glasses with all-day battery life poised to replace smartphones.',
    tags: ['Technology', 'Trending', 'Business'],
    views: '5.8k',
    likes: 2765,
    comments: [
      {
        id: 1,
        user: {
          username: 'futurist',
          avatar: 'https://api.a0.dev/assets/image?text=user_avatar_11&aspect=1:1',
        },
        text: 'I\'ve been testing these for two weeks and haven\'t touched my phone since.',
        likes: 231,
        timestamp: '3d ago',
        replies: []
      }
    ],
    fullContent: 'Tech company Optica has unveiled AR glasses that could finally deliver on the promise of augmented reality as a smartphone replacement. The glasses weigh just 45 grams - similar to regular eyewear - and feature a groundbreaking micro-LED display technology that\'s visible in bright sunlight while maintaining 18 hours of battery life. The device includes spatial computing capabilities, allowing virtual screens and objects to be placed in the user\'s environment and manipulated with hand gestures and voice commands. Major app developers have already created optimized versions of their applications for the platform. Analysts predict the $899 device could trigger a major shift in computing paradigms when it launches next quarter, with several competing products expected to follow.'
  },
  {
    id: 22,
    imageUrl: 'https://api.a0.dev/assets/image?text=robotics_agriculture&aspect=16:9',
    description: 'Autonomous robot farmers increase crop yields by 40% while reducing pesticide use by 95%.',
    tags: ['Technology', 'Science', 'Food'],
    views: '2.4k',
    likes: 1187,
    comments: [],
    fullContent: 'A fleet of autonomous agricultural robots developed by AgriTech Robotics has demonstrated remarkable results after a full growing season on test farms across the Midwest. The solar-powered robots, which are about the size of a coffee table, continuously monitor crops at the individual plant level, identifying pests, diseases, and nutrient deficiencies with computer vision. Rather than broadcast spraying entire fields, the robots precisely deliver treatments only to affected plants, resulting in a 95% reduction in chemical use. The continuous monitoring also enables optimal irrigation and harvesting timing, increasing yields by an average of 40% compared to conventional farming methods. Several major agricultural cooperatives have placed orders for the robots, which can be deployed in fleets to manage farms of any size.'
  },
  {
    id: 23,
    imageUrl: 'https://api.a0.dev/assets/image?text=digital_art&aspect=16:9',
    description: 'AI-generated artwork sells for record $12 million at prestigious auction house.',
    tags: ['Art', 'Technology', 'Trending'],
    views: '3.5k',
    likes: 1654,
    comments: [
      {
        id: 1,
        user: {
          username: 'artcritic',
          avatar: 'https://api.a0.dev/assets/image?text=user_avatar_12&aspect=1:1',
        },
        text: 'This marks a pivotal moment in art history, whether traditionalists like it or not.',
        likes: 142,
        timestamp: '1w ago',
        replies: []
      }
    ],
    fullContent: 'A piece of artwork created by an artificial intelligence system has sold for a record-breaking $12.4 million at Christie\'s auction house, exceeding pre-sale estimates by more than 400%. The piece, titled "Emergent Consciousness #37," was created by artist Sofia Chen using a proprietary AI system she developed over three years. Unlike typical AI art that generates images from text prompts, Chen\'s system incorporates real-time data from brain-computer interfaces as she meditates, creating a collaborative process between human consciousness and machine learning. The resulting abstract work features complex, shifting patterns that art critics have described as "hypnotic" and "revealing depths that seem impossible for a machine to conceive." The sale has ignited fierce debate in the art world about authorship, creativity, and the future of human-AI collaboration.'
  },
  {
    id: 24,
    imageUrl: 'https://api.a0.dev/assets/image?text=space_tourism&aspect=16:9',
    description: 'First luxury space hotel announces 2026 opening with 16 suites and artificial gravity.',
    tags: ['Travel', 'Technology', 'Business'],
    views: '6.2k',
    likes: 3012,
    comments: [],
    fullContent: 'Orbital Hospitality Inc. has announced plans to open the first luxury space hotel in 2026, featuring 16 private suites with panoramic Earth views and the first commercial implementation of artificial gravity. The station, named "Celestia," will orbit at 450 kilometers above Earth and rotate to create gravity equivalent to 40% of Earth\'s, enough to prevent the negative health effects of weightlessness while still allowing guests to experience "moon-like" movement. The hotel will offer gourmet dining, a spa, and various recreational activities adapted for the space environment. A two-week stay will initially cost $28 million per person, with prices expected to decrease as the company expands its orbital facilities. Over 130 reservations have already been secured with deposits despite the steep price tag.'
  },
  {
    id: 25,
    imageUrl: 'https://api.a0.dev/assets/image?text=language_learning&aspect=16:9',
    description: 'New language learning method enables conversational fluency in just 100 hours of practice.',
    tags: ['Education', 'Technology', 'Trending'],
    views: '2.7k',
    likes: 1345,
    comments: [
      {
        id: 1,
        user: {
          username: 'polyglot',
          avatar: 'https://api.a0.dev/assets/image?text=user_avatar_13&aspect=1:1',
        },
        text: 'I\'ve learned 7 languages with traditional methods and this new approach is genuinely revolutionary.',
        likes: 98,
        timestamp: '5d ago',
        replies: []
      }
    ],
    fullContent: 'Linguists and cognitive scientists have developed a revolutionary language learning methodology that enables students to achieve conversational fluency in just 100 hours of practice - a fraction of the time required by traditional approaches. The method, called "Neural Pattern Acquisition," combines spaced repetition algorithms, context-based learning, and neurofeedback to align with how the brain naturally processes language. In controlled studies across five different target languages, participants using the method achieved B2-level conversational fluency in an average of 97 hours, compared to the 600+ hours typically required. The researchers have released their findings in an open-access journal and launched an application implementing the methodology, which has quickly gained over 2 million users. Early adopters report unprecedented rates of progress compared to previous language learning attempts.'
  },
  {
    id: 26,
    imageUrl: 'https://api.a0.dev/assets/image?text=renewable_energy&aspect=16:9',
    description: 'Fusion energy startup achieves net positive energy production in compact reactor design.',
    tags: ['Science', 'Technology', 'News'],
    views: '4.3k',
    likes: 2187,
    comments: [],
    fullContent: 'Fusion energy startup Helion Energy has announced a major breakthrough in their compact reactor design, achieving net positive energy production sustained for over 30 minutes. The company\'s seventh-generation reactor, "Polaris," produced 150% more energy than was required to initiate and maintain the fusion reaction. Unlike other fusion approaches that use massive tokamak designs, Helion\'s field-reversed configuration is relatively compact, about the size of a tennis court, making it practical for commercial deployment. The company has secured an additional $2 billion in funding following the demonstration and plans to connect a commercial-scale reactor to the power grid by 2027. If successful, the technology could provide abundant clean energy with no long-lived radioactive waste and zero carbon emissions.'
  },
  {
    id: 27,
    imageUrl: 'https://api.a0.dev/assets/image?text=marine_biology&aspect=16:9',
    description: 'Scientists discover vast underwater ecosystem living within deep ocean trenches.',
    tags: ['Science', 'Animals', 'News'],
    views: '3.1k',
    likes: 1654,
    comments: [
      {
        id: 1,
        user: {
          username: 'oceanographer',
          avatar: 'https://api.a0.dev/assets/image?text=user_avatar_14&aspect=1:1',
        },
        text: 'This completely changes our understanding of deep ocean biodiversity and carbon sequestration.',
        likes: 176,
        timestamp: '2w ago',
        replies: []
      }
    ],
    fullContent: 'An international team of marine biologists has discovered a previously unknown ecosystem thriving within the sediment layers of deep ocean trenches. Using advanced submersibles and sampling techniques, researchers found complex communities of microorganisms, invertebrates, and even specialized fish species living up to 50 meters deep within the seafloor sediment of the Mariana Trench. These organisms have evolved unique adaptations to extreme pressure, low oxygen, and scarce nutrients. Particularly surprising was the discovery of a new carbon sequestration mechanism by certain bacteria that could be significant for understanding global carbon cycles. The findings suggest that deep ocean trenches may harbor far more biodiversity than previously thought and could be important reservoirs of undiscovered species and biochemical processes.'
  },
  {
    id: 28,
    imageUrl: 'https://api.a0.dev/assets/image?text=wearable_technology&aspect=16:9',
    description: 'Smart fabric generates electricity from body heat and movement, powering wearable devices.',
    tags: ['Technology', 'Fashion', 'Science'],
    views: '2.5k',
    likes: 1232,
    comments: [],
    fullContent: 'Materials scientists have developed a revolutionary smart fabric that can generate usable electricity from both body heat and movement. The textile combines thermoelectric fibers that convert temperature differences into electricity with triboelectric nanogenerators that harvest energy from friction and movement. A jacket made from the material can generate enough power to keep a smartphone charged throughout the day from normal body heat and movement. The fabric is washable, flexible, and can be manufactured using modified existing textile equipment. Several major sportswear and outdoor clothing companies have licensed the technology, with the first commercial products expected to reach the market within 18 months. Researchers suggest the innovation could eliminate the need for separate charging of wearable devices and enable new classes of integrated health monitors and smart clothing.'
  },
  {
    id: 29,
    imageUrl: 'https://api.a0.dev/assets/image?text=urban_transportation&aspect=16:9',
    description: 'Underground vacuum tube transportation network begins construction in major European city.',
    tags: ['Technology', 'Travel', 'News'],
    views: '3.8k',
    likes: 1876,
    comments: [
      {
        id: 1,
        user: {
          username: 'transitexpert',
          avatar: 'https://api.a0.dev/assets/image?text=user_avatar_15&aspect=1:1',
        },
        text: 'If successful, this could revolutionize urban transportation worldwide.',
        likes: 154,
        timestamp: '3d ago',
        replies: []
      }
    ],
    fullContent: 'Construction has begun on the world\'s first urban vacuum tube transportation network in Zurich, Switzerland. The system, known as "SwissLoop," will initially connect the city center with the airport and major suburbs through a network of underground tubes in which autonomous pods travel at speeds up to 400 km/h. By maintaining a partial vacuum in the tubes, the system eliminates air resistance, allowing for high speeds with minimal energy consumption. Each pod can carry 20 passengers, with departures every 30 seconds during peak hours, providing a capacity similar to a subway line but with on-demand service and direct journeys without intermediate stops. The first line is scheduled to open in 2027, with the complete network of five lines operational by 2030. The project is being closely watched by urban planners worldwide as a potential solution to traffic congestion and transportation emissions.'
  },
  {
    id: 30,
    imageUrl: 'https://api.a0.dev/assets/image?text=microbiome_research&aspect=16:9',
    description: 'Gut microbiome transplant therapy shows remarkable results for treatment-resistant depression.',
    tags: ['Health', 'Science', 'News'],
    views: '2.9k',
    likes: 1543,
    comments: [],
    fullContent: 'A groundbreaking clinical trial has demonstrated that fecal microbiota transplantation (FMT) can significantly reduce symptoms in patients with treatment-resistant depression. The study, conducted across three major medical centers, found that 67% of participants who received carefully screened gut bacteria transplants showed substantial improvement in depression symptoms, compared to just 14% in the placebo group. The effects were sustained for the 12-month follow-up period. Researchers identified specific bacterial strains associated with positive outcomes and are now developing a more targeted probiotic therapy based on these findings. The research adds to growing evidence of the gut-brain connection and suggests that microbiome-based treatments could offer new hope for mental health conditions that don\'t respond to conventional therapies. Regulatory agencies are reviewing the therapy for potential approval as a novel treatment option.'
  },
  {
    id: 31,
    imageUrl: 'https://api.a0.dev/assets/image?text=3d_printing&aspect=16:9',
    description: '3D-printed neighborhood of affordable homes completed in just 60 days.',
    tags: ['Technology', 'Design', 'News'],
    views: '3.4k',
    likes: 1765,
    comments: [
      {
        id: 1,
        user: {
          username: 'architectfuturist',
          avatar: 'https://api.a0.dev/assets/image?text=user_avatar_16&aspect=1:1',
        },
        text: 'The efficiency and quality achieved here is remarkable - this could help address housing crises globally.',
        likes: 132,
        timestamp: '1w ago',
        replies: []
      }
    ],
    fullContent: 'A neighborhood of 38 affordable homes has been completed in Austin, Texas using large-scale 3D printing technology in just 60 days - a fraction of the time required for traditional construction. The homes, ranging from 1,000 to 1,700 square feet, were printed using a specialized concrete mixture reinforced with recycled carbon fiber, creating structures that exceed standard building codes for durability and energy efficiency. Interior finishing, plumbing, and electrical work was completed by conventional construction teams working in parallel with the printing process. The homes cost approximately 30% less than comparable conventional construction while using 60% less material and producing 70% less waste. The project was a collaboration between a technology startup, affordable housing nonprofits, and the local government, with plans to scale the approach to other cities facing housing shortages.'
  },
  {
    id: 32,
    imageUrl: 'https://api.a0.dev/assets/image?text=cryptocurrency&aspect=16:9',
    description: 'Decentralized finance protocol enables zero-interest loans through innovative collateral system.',
    tags: ['Finance', 'Crypto', 'Technology'],
    views: '2.6k',
    likes: 1321,
    comments: [],
    fullContent: 'A new decentralized finance (DeFi) protocol called ZeroLend has introduced a groundbreaking system that enables users to take out loans with zero interest rates through an innovative collateral mechanism. Rather than charging interest, the protocol generates revenue through a dynamic collateral system where borrowers provide liquidity to other protocol services while their collateral is locked. This approach allows borrowers to access funds without ongoing interest costs while still providing sustainable revenue for the protocol and its stakeholders. The system has quickly attracted over $1.2 billion in total value locked since its launch three months ago. Financial analysts note that the model could potentially disrupt traditional lending markets by eliminating the time-value pricing of money that has been fundamental to banking for centuries. Regulatory bodies are currently evaluating the system, which operates entirely on public blockchains without central control.'
  },
  {
    id: 33,
    imageUrl: 'https://api.a0.dev/assets/image?text=wildlife_conservation&aspect=16:9',
    description: 'AI-powered anti-poaching system reduces rhino poaching by 90% in South African reserve.',
    tags: ['Animals', 'Technology', 'News'],
    views: '2.2k',
    likes: 1187,
    comments: [
      {
        id: 1,
        user: {
          username: 'conservationist',
          avatar: 'https://api.a0.dev/assets/image?text=user_avatar_17&aspect=1:1',
        },
        text: 'This gives me hope that technology can turn the tide against poaching.',
        likes: 98,
        timestamp: '4d ago',
        replies: []
      }
    ],
    fullContent: 'A sophisticated AI-powered anti-poaching system deployed in South Africa\'s Kruger National Park has reduced rhino poaching incidents by over 90% in its first year of operation. The system combines multiple technologies including acoustic sensors that can identify gunshots and vehicle sounds, thermal cameras with AI vision systems that can distinguish between animals and humans, and predictive analytics that forecast likely poaching attempts based on historical data and current conditions. When potential poaching activity is detected, the system automatically dispatches ranger teams via the most efficient route. Since implementation, 142 poaching attempts have been prevented and 53 arrests made. The technology, developed through a partnership between conservation organizations and tech companies, is now being adapted for use in other protected areas facing similar challenges across Africa and Asia.'
  },
  {
    id: 34,
    imageUrl: 'https://api.a0.dev/assets/image?text=robotics&aspect=16:9',
    description: 'Soft robotics breakthrough enables robots to handle delicate objects with human-like dexterity.',
    tags: ['Technology', 'Science', 'Business'],
    views: '2.8k',
    likes: 1432,
    comments: [],
    fullContent: 'Engineers at the Soft Robotics Research Institute have developed a revolutionary tactile system that gives robots unprecedented dexterity for handling delicate objects. The technology combines highly sensitive pressure sensors with a novel hydraulic actuation system embedded in soft, compliant grippers. The system can detect and respond to subtle changes in pressure and texture, allowing robots to handle objects as delicate as raw eggs or ripe berries without damage. In benchmark tests, robots equipped with the new grippers successfully manipulated 98% of common household objects, compared to 20-30% for conventional robotic hands. The technology has immediate applications in agriculture, food processing, and elder care, where gentle manipulation of objects has been a major challenge for automation. Several major manufacturing companies have licensed the technology for integration into their production lines.'
  },
  {
    id: 35,
    imageUrl: 'https://api.a0.dev/assets/image?text=neuroscience&aspect=16:9',
    description: 'Scientists map complete neural pathway of complex emotion for the first time.',
    tags: ['Science', 'Health', 'News'],
    views: '3.2k',
    likes: 1654,
    comments: [
      {
        id: 1,
        user: {
          username: 'brainresearcher',
          avatar: 'https://api.a0.dev/assets/image?text=user_avatar_18&aspect=1:1',
        },
        text: 'This level of detail in emotional neural mapping was unimaginable just five years ago.',
        likes: 143,
        timestamp: '2w ago',
        replies: []
      }
    ],
    fullContent: 'Neuroscientists have successfully mapped the complete neural pathway of a complex emotion - gratitude - for the first time, revealing how emotional experiences are processed across multiple brain regions. Using a combination of functional MRI, electroencephalography, and a new technique called optogenetic tracing, researchers tracked the precise sequence of neural activation from initial stimulus to conscious emotional experience. The study revealed that gratitude involves at least 18 distinct brain regions working in a coordinated sequence, with different aspects of the emotion processed in parallel before being integrated into conscious experience. The research provides unprecedented insight into how the brain creates emotional experiences and could lead to more effective treatments for mood disorders by enabling more precise therapeutic interventions. The mapping techniques developed for the study are now being applied to other complex emotional states.'
  },
  {
    id: 36,
    imageUrl: 'https://api.a0.dev/assets/image?text=sustainable_fashion&aspect=16:9',
    description: 'Enzyme treatment transforms agricultural waste into luxury textile indistinguishable from silk.',
    tags: ['Fashion', 'Science', 'Business'],
    views: '1.9k',
    likes: 987,
    comments: [],
    fullContent: 'Biotechnology startup EcoFiber has developed an enzymatic process that transforms agricultural waste like corn husks and wheat straw into a luxury textile material with properties identical to natural silk. The process uses engineered enzymes to break down cellulose from the agricultural waste and reassemble it into fibers with the same protein structure as silk produced by silkworms. The resulting material has the same strength, luster, and drape as natural silk but can be produced at a fraction of the cost and environmental impact. Several luxury fashion houses have already incorporated the material into their upcoming collections, with one designer commenting that it\'s impossible to distinguish from the finest natural silk. The company is scaling up production and expects to replace 30% of the global silk market within five years while providing additional income to farmers who can now sell their agricultural waste.'
  },
  {
    id: 37,
    imageUrl: 'https://api.a0.dev/assets/image?text=quantum_computing&aspect=16:9',
    description: 'Quantum computer solves previously impossible materials science problem, leading to breakthrough in superconductivity.',
    tags: ['Technology', 'Science', 'News'],
    views: '4.7k',
    likes: 2345,
    comments: [
      {
        id: 1,
        user: {
          username: 'quantumphysicist',
          avatar: 'https://api.a0.dev/assets/image?text=user_avatar_19&aspect=1:1',
        },
        text: 'This is exactly the kind of practical quantum advantage we\'ve been waiting for.',
        likes: 187,
        timestamp: '3d ago',
        replies: []
      }
    ],
    fullContent: 'Scientists at the Quantum Materials Research Institute have used a quantum computer to solve a complex materials science problem that would be practically impossible for classical supercomputers. The team used a 512-qubit quantum processor to simulate the quantum behavior of electrons in various material structures, identifying a novel configuration that could support superconductivity at temperatures approaching room temperature. Based on the quantum simulation results, the team synthesized the predicted material and confirmed superconducting properties at -23°C - far warmer than previous superconductors that typically require temperatures closer to absolute zero. While still requiring cooling, this temperature is achievable with simple refrigeration rather than expensive liquid helium systems. The discovery could lead to practical applications including lossless power transmission, more efficient electric motors, and powerful electromagnets for medical imaging and transportation systems.'
  },
  {
    id: 38,
    imageUrl: 'https://api.a0.dev/assets/image?text=space_exploration&aspect=16:9',
    description: 'Private mission discovers evidence of microbial life in subsurface ocean of Saturn\'s moon Enceladus.',
    tags: ['Science', 'News', 'Technology'],
    views: '5.9k',
    likes: 3012,
    comments: [],
    fullContent: 'The privately-funded Enceladus Life Finder mission has announced compelling evidence for microbial life in the subsurface ocean of Saturn\'s moon Enceladus. The spacecraft, which arrived at Enceladus last year, has been analyzing material ejected from the moon\'s subsurface ocean through cracks in its icy crust. The latest data reveals complex organic compounds, including lipid-like molecules similar to cell membranes, along with chemical disequilibrium that strongly suggests biological processes. While not definitive proof of extraterrestrial life, scientists describe it as the strongest evidence yet found. The mission represents a new model of space exploration, having been funded by a consortium of technology billionaires and research institutions rather than a government space agency. The spacecraft will continue collecting data for another 14 months before its planned end-of-mission impact with the moon\'s surface.'
  },
  {
    id: 39,
    imageUrl: 'https://api.a0.dev/assets/image?text=artificial_intelligence&aspect=16:9',
    description: 'AI system autonomously discovers new mathematical theorem that eluded human mathematicians.',
    tags: ['Technology', 'Science', 'Education'],
    views: '3.6k',
    likes: 1876,
    comments: [
      {
        id: 1,
        user: {
          username: 'mathematician',
          avatar: 'https://api.a0.dev/assets/image?text=user_avatar_20&aspect=1:1',
        },
        text: 'I\'ve verified the proof - it\'s elegant and uses an approach no human would likely have tried.',
        likes: 165,
        timestamp: '1w ago',
        replies: []
      }
    ],
    fullContent: 'An artificial intelligence system designed to explore mathematical concepts has autonomously discovered and proved a significant new theorem in graph theory that had eluded human mathematicians for decades. The AI system, developed by a collaboration between computer scientists and mathematicians, uses a combination of symbolic reasoning and neural networks to explore mathematical spaces and identify patterns. After discovering the theorem, the system generated a formal proof that has been verified by leading mathematicians. The theorem provides a more efficient method for solving certain classes of optimization problems with applications in network design, logistics, and computer chip layout. This marks one of the first instances of an AI system making a novel mathematical discovery of significant importance rather than simply verifying existing conjectures or solving predefined problems. The research team has published both the theorem and the methodology used by the AI system.'
  },
  {
    id: 40,
    imageUrl: 'https://api.a0.dev/assets/image?text=renewable_energy&aspect=16:9',
    description: 'New solar panel design generates electricity at night from radiative cooling.',
    tags: ['Technology', 'Science', 'Business'],
    views: '2.7k',
    likes: 1432,
    comments: [],
    fullContent: 'Engineers have developed an innovative solar panel design that can generate electricity during nighttime hours by harnessing radiative cooling. The panels use a thermoelectric generator that captures energy from the temperature difference created when the panel radiates heat into the cold night sky. While the nighttime power generation is only about 15-20% of what the same panel produces during daylight hours from solar energy, the continuous 24-hour production significantly improves the economics and practicality of off-grid solar installations by reducing or eliminating the need for battery storage. Field tests in various climates have demonstrated average nighttime power generation of 50-80 watts per square meter, depending on atmospheric conditions. The technology can be integrated into conventional solar panel manufacturing with only a 15% increase in production costs. Several major solar manufacturers have licensed the technology for commercial production.'
  },
  {
    id: 41,
    imageUrl: 'https://api.a0.dev/assets/image?text=virtual_reality&aspect=16:9',
    description: 'Virtual reality therapy shows 80% success rate in treating chronic pain, outperforming medication.',
    tags: ['Health', 'Technology', 'Science'],
    views: '2.5k',
    likes: 1321,
    comments: [
      {
        id: 1,
        user: {
          username: 'painspecialist',
          avatar: 'https://api.a0.dev/assets/image?text=user_avatar_21&aspect=1:1',
        },
        text: 'I\'ve been recommending this to my patients with remarkable results, especially for those who haven\'t responded to conventional treatments.',
        likes: 112,
        timestamp: '5d ago',
        replies: []
      }
    ],
    fullContent: 'A large-scale clinical trial has demonstrated that virtual reality therapy is significantly more effective than medication for treating chronic pain conditions. The study, involving over 2,000 patients across 15 medical centers, found that a 12-week VR therapy program resulted in an 80% success rate in substantially reducing pain and improving function, compared to a 30% success rate for standard medication protocols. The VR therapy combines several approaches including immersive distraction, cognitive behavioral techniques, and visual feedback to help patients reconceptualize their pain and develop new neural pathways. Particularly notable was the therapy\'s effectiveness for patients who had not responded to conventional treatments, including opioid medications. Several insurance companies have announced they will cover the treatment following the compelling results, and the system has received regulatory approval for clinical use.'
  },
  {
    id: 42,
    imageUrl: 'https://api.a0.dev/assets/image?text=archaeology&aspect=16:9',
    description: 'Advanced imaging technology reveals vast ancient city beneath Guatemalan jungle.',
    tags: ['Science', 'News', 'Education'],
    views: '3.1k',
    likes: 1654,
    comments: [],
    fullContent: 'Archaeologists using a combination of LiDAR, ground-penetrating radar, and AI-enhanced imaging have discovered an enormous ancient Maya city hidden beneath the dense jungle canopy in northern Guatemala. The city, estimated to have been home to over 100,000 people at its peak around 800 CE, covers more than 35 square kilometers and includes hundreds of previously unknown structures including pyramids, palaces, reservoirs, and raised agricultural fields. The discovery challenges previous understanding of Maya population density and urban planning. Particularly significant is evidence of advanced water management systems that allowed the city to thrive through periods of drought. The imaging technology revealed details with such precision that archaeologists have been able to map the city comprehensively without extensive clearing of jungle vegetation, representing a new paradigm in non-invasive archaeology. Limited excavation at key sites has confirmed the accuracy of the imaging data and uncovered artifacts suggesting extensive trade networks.'
  },
  {
    id: 43,
    imageUrl: 'https://api.a0.dev/assets/image?text=biotechnology&aspect=16:9',
    description: 'Lab-grown wood could eliminate deforestation while capturing carbon more efficiently than trees.',
    tags: ['Science', 'Technology', 'Business'],
    views: '2.3k',
    likes: 1187,
    comments: [
      {
        id: 1,
        user: {
          username: 'environmentalist',
          avatar: 'https://api.a0.dev/assets/image?text=user_avatar_22&aspect=1:1',
        },
        text: 'This could be the game-changer we need to address both deforestation and climate change.',
        likes: 98,
        timestamp: '2w ago',
        replies: []
      }
    ],
    fullContent: 'Biotechnology researchers have developed a method to grow wood in laboratory conditions without needing to grow entire trees, potentially revolutionizing the timber industry and helping combat deforestation. The process uses plant cells cultured in specialized bioreactors where growth conditions can be precisely controlled to produce wood with specific characteristics optimized for different applications - from construction lumber to fine furniture. The lab-grown wood matures in months rather than decades and captures carbon more efficiently than traditional forestry. Additionally, the wood can be grown in customized shapes, potentially eliminating up to 30% of waste in traditional wood processing. Several major timber companies have invested in the technology, with the first commercial-scale production facility under construction. If widely adopted, the technology could significantly reduce pressure on natural forests while maintaining the supply of wood products for human use.'
  },
  {
    id: 44,
    imageUrl: 'https://api.a0.dev/assets/image?text=transportation&aspect=16:9',
    description: 'Hydrogen-powered passenger aircraft completes successful transatlantic flight.',
    tags: ['Technology', 'Travel', 'News'],
    views: '4.2k',
    likes: 2187,
    comments: [],
    fullContent: 'Aviation history was made yesterday as the first hydrogen-powered commercial-scale aircraft successfully completed a transatlantic flight from London to New York. The aircraft, developed by Aerospace Innovations, uses liquid hydrogen to power fuel cells that generate electricity for its advanced propulsion system. The 49-passenger plane produced zero carbon emissions during the 7-hour flight, with water vapor being the only exhaust. While the prototype aircraft has a more limited range and capacity than conventional jets, it represents a significant step toward decarbonizing air travel, which has been one of the most challenging sectors for emissions reduction. The company has already received orders from several airlines for its production model, expected to enter service in 2027. Aviation analysts note that hydrogen power is particularly promising for short and medium-range flights, which constitute approximately 70% of global air travel.'
  },
  {
    id: 45,
    imageUrl: 'https://api.a0.dev/assets/image?text=education_technology&aspect=16:9',
    description: 'AI tutor system achieves better results than human teachers in standardized test preparation.',
    tags: ['Education', 'Technology', 'News'],
    views: '2.6k',
    likes: 1345,
    comments: [
      {
        id: 1,
        user: {
          username: 'educator',
          avatar: 'https://api.a0.dev/assets/image?text=user_avatar_23&aspect=1:1',
        },
        text: 'As a teacher for 20 years, I was skeptical but the results are undeniable. This should complement, not replace human teachers.',
        likes: 132,
        timestamp: '3d ago',
        replies: []
      }
    ],
    fullContent: 'An artificial intelligence tutoring system has demonstrated superior results to human tutors in preparing students for standardized tests, according to a comprehensive study involving over 10,000 students across diverse demographics. Students using the AI tutor for SAT preparation improved their scores by an average of 170 points, compared to 90 points for students working with traditional human tutors for the same number of hours. The AI system continuously adapts to each student\'s learning patterns, identifying specific knowledge gaps and customizing explanations based on the individual\'s learning style and pace. It also provides emotional support through sophisticated natural language understanding that can detect frustration or confusion. The system is being made freely available to public schools in low-income districts, with the developers emphasizing that it\'s designed to supplement rather than replace human teachers, freeing them to focus on aspects of education where human interaction is most valuable.'
  },
  {
    id: 46,
    imageUrl: 'https://api.a0.dev/assets/image?text=food_technology&aspect=16:9',
    description: 'Precision fermentation startup creates dairy proteins identical to cow\'s milk without animals.',
    tags: ['Food', 'Technology', 'Business'],
    views: '2.1k',
    likes: 1098,
    comments: [],
    fullContent: 'Food technology company Molecular Dairy has successfully scaled up production of dairy proteins created through precision fermentation, producing milk, cheese, and yogurt that are molecularly identical to conventional dairy but require no animals. The company uses genetically modified microorganisms in fermentation tanks to produce casein and whey proteins that are purified and combined with plant-based fats and sugars to create dairy products indistinguishable from traditional counterparts in taste, texture, and nutritional profile. Blind taste tests with professional food critics confirmed that the products are virtually identical to premium conventional dairy. The production process uses 99% less land, 97% less water, and produces 91% fewer greenhouse gas emissions compared to conventional dairy farming. The company has secured partnerships with major food manufacturers and will launch its first consumer products in select markets next quarter at price parity with organic dairy products.'
  },
  {
    id: 47,
    imageUrl: 'https://api.a0.dev/assets/image?text=cybersecurity&aspect=16:9',
    description: 'Quantum-resistant encryption standard finalized as quantum computing threat looms.',
    tags: ['Technology', 'News', 'Business'],
    views: '3.4k',
    likes: 1765,
    comments: [
      {
        id: 1,
        user: {
          username: 'securityexpert',
          avatar: 'https://api.a0.dev/assets/image?text=user_avatar_24&aspect=1:1',
        },
        text: 'This standardization is crucial - organizations need to start implementing these algorithms immediately.',
        likes: 143,
        timestamp: '1w ago',
        replies: []
      }
    ],
    fullContent: 'The National Institute of Standards and Technology (NIST) has finalized its post-quantum cryptography standard, providing organizations worldwide with vetted encryption algorithms resistant to attacks from quantum computers. The standard includes four primary algorithms based on mathematical problems that quantum computers cannot efficiently solve, unlike current widely-used encryption methods that would be vulnerable to quantum attacks. The finalization comes as several research groups report significant advances in quantum computing capabilities, increasing the urgency for organizations to transition their security infrastructure. Major technology companies, financial institutions, and government agencies have already begun implementing the new standards, with full transition expected to take 3-5 years. Cybersecurity experts emphasize that organizations handling sensitive data or long-term secrets should prioritize the transition, as adversaries may be harvesting encrypted data now with plans to decrypt it once quantum computing capabilities mature.'
  },
  {
    id: 48,
    imageUrl: 'https://api.a0.dev/assets/image?text=sports_science&aspect=16:9',
    description: 'Biomechanical AI coaching system helps amateur athletes perform like professionals.',
    tags: ['Sports', 'Technology', 'Fitness'],
    views: '2.4k',
    likes: 1232,
    comments: [],
    fullContent: 'A new AI-powered coaching system that analyzes biomechanics through smartphone video is helping amateur athletes achieve professional-level technique across various sports. The system, called PerfectForm, uses computer vision and machine learning to provide real-time feedback on body positioning, movement efficiency, and technique flaws that would be invisible to the untrained eye. In a controlled study with recreational tennis players, those using the system for 8 weeks showed technique improvements comparable to what would typically require a year of professional coaching. The technology works across multiple sports including golf, baseball, swimming, and weightlifting, with sport-specific models trained on thousands of hours of footage from elite athletes. The subscription-based service has quickly gained over 500,000 users, with particularly strong adoption among serious amateurs and youth athletes whose families cannot afford regular professional coaching.'
  },
  {
    id: 49,
    imageUrl: 'https://api.a0.dev/assets/image?text=space_debris&aspect=16:9',
    description: 'Satellite successfully demonstrates plasma beam technology for clearing orbital debris.',
    tags: ['Technology', 'Science', 'News'],
    views: '3.2k',
    likes: 1654,
    comments: [
      {
        id: 1,
        user: {
          username: 'astroengineer',
          avatar: 'https://api.a0.dev/assets/image?text=user_avatar_25&aspect=1:1',
        },
        text: 'This is the most promising solution I\'ve seen to the orbital debris problem that\'s been building for decades.',
        likes: 121,
        timestamp: '4d ago',
        replies: []
      }
    ],
    fullContent: 'A demonstration satellite launched by the International Space Consortium has successfully tested a new technology for removing dangerous orbital debris using directed plasma beams. The satellite, named CleanSpace-1, used its plasma beam to alter the orbit of a decommissioned rocket body, causing it to reenter Earth\'s atmosphere and safely burn up. The plasma beam technology can operate at distances up to 2 kilometers, allowing it to safely modify the orbits of debris objects without physical contact. This approach overcomes many limitations of previous debris removal concepts that required direct docking with uncontrolled objects. Following the successful demonstration, the consortium has secured funding for a fleet of ten operational debris removal satellites to begin addressing the most dangerous large debris objects in low Earth orbit. Space agencies and satellite operators worldwide have praised the development as a crucial step in ensuring the long-term sustainability of orbital operations.'
  },
  {
    id: 50,
    imageUrl: 'https://api.a0.dev/assets/image?text=longevity_research&aspect=16:9',
    description: 'Clinical trial shows combination therapy reverses biological age markers by average of 3.5 years.',
    tags: ['Health', 'Science', 'News'],
    views: '5.1k',
    likes: 2654,
    comments: [],
    fullContent: 'A groundbreaking clinical trial has demonstrated that a combination therapy including a senolytic drug, metabolic precursors, and a modified intermittent fasting protocol can reverse multiple biological markers of aging by an average of 3.5 years. The two-year trial involved 248 healthy adults aged 65-80 who showed significant improvements across various aging biomarkers including DNA methylation patterns, telomere attrition, inflammatory markers, and mitochondrial function. Participants also demonstrated measurable improvements in cognitive performance, cardiovascular health, and immune system function. The therapy targets multiple hallmarks of aging simultaneously rather than focusing on a single pathway, which researchers believe is key to its effectiveness. While the study does not demonstrate increased lifespan, the improvements in health markers suggest potential for extending healthy lifespan or "healthspan." The research team is now planning a larger trial while working with regulatory agencies to define approval pathways for anti-aging therapies, which represent a new paradigm for medicine traditionally focused on specific diseases rather than aging processes.'
  }
];

export const mockLists: List[] = [
  { id: '1', name: 'Favorites', count: 12 },
  { id: '2', name: 'Watch Later', count: 8 },
  { id: '3', name: 'Tech News', count: 15 },
];

export const tags = [
  'Trending',
  'News',
  'Music',
  'Animals',
  'Technology',
  'Science',
  'Art',
  'Food',
  'Sports',
  'Gaming',
  'Fashion',
  'Travel',
  'Education',
  'Finance',
  'Health',
  'Fitness',
  'Comedy',
  'Movies',
  'TV Shows',
  'Books',
  'Photography',
  'Design',
  'Business',
  'Crypto',
];
