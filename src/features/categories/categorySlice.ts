import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type {
  CategoryItem,
  CategoryState,
  newCategory,
} from "../../interfaces/Category";

// const API_URL = import.meta.env.VITE_API_URL;
// const API_KEY = import.meta.env.VITE_API_KEY;

const API_URL = "http://localhost:5001";
const API_KEY_SECRET = "YXBpS2V5U2VjcmV0";

const HEADERS = {
  "Content-Type": "application/json",
  "x-bypass-token": API_KEY_SECRET,
};

const initialState: CategoryState = {
  categories: [],
  loading: false,
  error: null,
};

// 🔁 Fetch all categories
export const fetchCategories = createAsyncThunk<CategoryItem[]>(
  "categories/fetchCategories",

  async () => {
    const response = await fetch(`${API_URL}/categories`, {
      method: "GET",
      headers: HEADERS,
    });

    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }

    return await response.json();
  }
);

// ➕ Add new category
export const addCategory = createAsyncThunk<CategoryItem, newCategory>(
  "category/addCategory",
  async (category) => {
    console.log("Sending CATEGORY:", category);

    const response = await fetch(`${API_URL}/categories`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({ data: [category] }),
    });

    const result = await response.json();
    console.log("RESPONSE:", result); // სერვერის პასუხი

    if (!response.ok) {
      throw new Error(result.message || "Failed to add category");
    }

    return result.data[0]; // შეცდომის გამოსწორება!
  }
);

// ✏️ Update category
export const updateCategory = createAsyncThunk<
  CategoryItem,
  { id: number; updatedData: newCategory }
>("category/updateCategory", async ({ id, updatedData }) => {
  const response = await fetch(`${API_URL}/categories/${id}`, {
    method: "PUT",
    headers: HEADERS,
    body: JSON.stringify({ data: [updatedData] }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to update category");
  }

  return result.data[0]; // განახლებული კატეგორია
});

export const deleteCategory = createAsyncThunk<number, number>(
  "categories/deleteCategory",
  async (id) => {
    const response = await fetch(`${API_URL}/categories/${id}`, {
      method: "DELETE",
      headers: HEADERS,
    });
    if (!response.ok) throw new Error("Failed to delete category");
    return id;
  }
);

// 🧠 Slice
export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch categories
    builder.addCase(fetchCategories.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });

    // Add category
    builder.addCase(addCategory.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.categories.push(action.payload);
    });
    builder.addCase(addCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
    builder.addCase(deleteCategory.fulfilled, (state, action) => {
      state.categories = state.categories.filter(
        (c) => c.id !== action.payload
      );
    });
    // Update category
    builder.addCase(updateCategory.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateCategory.fulfilled, (state, action) => {
      state.loading = false;
      const index = state.categories.findIndex(
        (c) => c.id === action.payload.id
      );
      if (index !== -1) {
        state.categories[index] = action.payload;
      }
    });
    builder.addCase(updateCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  },
});

export default categorySlice.reducer;
