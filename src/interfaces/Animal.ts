//
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
