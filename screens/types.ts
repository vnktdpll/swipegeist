// types.ts
export interface User {
  username: string;
  avatar: string;
}

export interface Comment {
  id: number;
  user: User;
  text: string;
  likes: number;
  timestamp: string;
  replies?: Comment[];
}

export interface Card {
  id: number;
  imageUrl: string;
  imageUrls?: string[];
  description: string;
  tags: string[];
  views: string;
  likes: number;
  comments: Comment[];
  fullContent: string;
  sourceUrl?: string;
}

export interface List {
  id: string;
  name: string;
  count: number;
}
