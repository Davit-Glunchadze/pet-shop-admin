
// ცალკე ერთი ტიპი კატეგორიისთვის
export interface CategoryItem {
  id: number;
  data: {
    title: string;
    description: string;
  }[];
}

// კატეგორიის მდგომარეობის ტიპი
export interface CategoryState {
  categories: CategoryItem[];
  loading: boolean;
  error: string | null;
}



//ახალი კატეგორიის ტიპი
export interface newCategory {
  id?: number;
  title: string;
  description: string;
}
