//სტეიტის ტიპი რომელიც აღწერს ცხოველების სიის მდგომარეობას
export interface animalState {
  animals: AnimalItem[];
  loading: boolean;
  error: string | null;
}

// ეს ტიპი შეიცავს ცხოველების სიის იდენტიფიკატორს და ცხოველების მონაცემებს
export interface AnimalItem {
  id: string;
  name: string;
  priceUSD: number;
  priceGEL: number;
  description: string;
  isPopular: boolean;
  stock: number;
  imageUrl: string;
  // category: string;
  categoryId: string;
}

// Props ტიპი, რომელიც აღწერს ცხოველის კომპონენტის პროპსებს
export interface CompProps {
  animal: AnimalItem;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onView: (id: string) => void;
}

// ფორმაში გამოსაყენებელი ტიპი, რომელიც აღწერს ცხოველის მონაცემების სტრუქტურას
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

// ტიპი, რომელიც აღწერს API-ის პასუხის სტრუქტურას
export interface ApiResponseItem {
  id: string;
  data: AnimalItem[];
}

//  ტიპი, რომელიც აღწერს ცხოველის და კატეგორიის იდენტიფიკატორების დაკავშირების პასუხის სტრუქტურას
export interface LinkResponseType {
  animalId: string;
  categoryId: string;
}

// ტიპი, რომელიც აღწერს ცხოველის და კატეგორიის იდენტიფიკატორების არგუმენტებს
export interface ArgumentType {
  animalId: string;
  categoryId: string;
}

// ტიპი, რომელიც აღწერს ვალუტის კურსის მონაცემებს
export interface Currency {
  code: string;
  rate: number;
}

// ტიპი, რომელიც აღწერს ვალუტის კურსების API-ის პასუხის სტრუქტურას
export interface ValuteResponseItem {
  currencies: Currency[];
}