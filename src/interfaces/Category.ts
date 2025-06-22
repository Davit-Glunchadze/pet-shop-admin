
// კატეგორიის ტიპი
export interface Category {
  id: string;
  title: string;
  description: string;
}

// სტეიტის ტიპი
export interface CategoryState {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

// კატეგორიის შესაქმნელი ფორმის ტიპი
export interface newCategory {
  title: string;
  description: string;
}
