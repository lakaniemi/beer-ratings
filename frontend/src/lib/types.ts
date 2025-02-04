export type BeerCategory = 'IPA' | 'Lager' | 'Stout' | 'Porter' | 'Sour';

export type User = {
  name: string;
};

export type Rating = {
  reviewer: User;
  createdAt: Date;
  rating: number;
};

export type Beer = {
  name: string;
  manufacturer?: string;
  category: BeerCategory;
  imageUrl?: string;
  ratings: Rating[];
  averageRating?: number;
};
