export interface AnimalItem {
  id: number;
  name: string;
  priceUSD: number;
  priceGEL: number;
  description: string;
  isPopular: boolean;
  stock: number;
  imageUrl?: string;
  category: string;
  categoryId?: number;
  imageUrls?: string[];
}

export interface animalState {
  animals: AnimalItem[];
  loading: boolean;
  error: string | null;
}



export interface Pet {
  name: string;
  imageUrl: string;
  category: string;
  priceUSD: number;
  priceGEL: number;
  description: string;
  isPopular: boolean;
  stock: number;
}
