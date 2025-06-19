//

export interface ApiResponseItem {
  id: string;
  data: AnimalItem[];
}

export interface AnimalItem {
  id: string;
  name: string;
  priceUSD: number;
  priceGEL: number;
  description: string;
  isPopular: boolean;
  stock: number;
  imageUrl: string;
  category: string;
  categoryId: string;
}

//სტეიტის ტიპი
export interface animalState {
  animals: AnimalItem[];
  loading: boolean;
  error: string | null;
}

export interface LinkResponseType {
  animalId: string;
  categoryId: string;
}

export interface ArgumentType {
  animalId: string;
  categoryId: string;
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
