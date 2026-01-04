
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  discountPrice?: string;
  features: string[];
  isPopular?: boolean;
}

export interface Teacher {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

export type Level = 'Beginner' | 'Intermediate' | 'Advanced';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
