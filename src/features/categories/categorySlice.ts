import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Category, CategoryState } from "../../interfaces/Category";

const API_URL = "http://localhost:5001";
const HEADERS = {
  "Content-Type": "application/json",
};

const initialState: CategoryState = {
  categories: [],
  loading: false,
  error: null,
};

// Fetch all categories
export const fetchCategories = createAsyncThunk<Category[]>(
  "categories/fetchCategories",
  async () => {
    const response = await fetch(`${API_URL}/categories`, {
      headers: HEADERS,
    });

    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }

    return await response.json();
  }
);

// Add new category
export const addCategory = createAsyncThunk<Category, Omit<Category, "id">>(
  "category/addCategory",
  async (categoryData) => {
    const response = await fetch(`${API_URL}/categories`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(categoryData), //
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Failed to add category");
    }

    return await response.json(); // დააბრუნებს შექმნილი category
  }
);

// Update category
export const updateCategory = createAsyncThunk<
  Category,
  { id: string; updatedData: Omit<Category, "id"> }
>("category/updateCategory", async ({ id, updatedData }) => {
  const response = await fetch(`${API_URL}/categories/${id}`, {
    method: "PUT",
    headers: HEADERS,
    body: JSON.stringify(updatedData),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Failed to update category");
  }

  return await response.json();
});

// Delete category
export const deleteCategory = createAsyncThunk<string, string>(
  "categories/deleteCategory",
  async (id) => {
    const response = await fetch(`${API_URL}/categories/${id}`, {
      method: "DELETE",
      headers: HEADERS,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Failed to delete category");
    }

    return id;
  }
);

// Slice
export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      })

      // Add
      .addCase(addCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories.push(action.payload);
      })
      .addCase(addCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      })

      // Update
      .addCase(updateCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.categories.findIndex(
          (c) => c.id === action.payload.id
        );
        if (index !== -1) {
          state.categories[index] = action.payload;
        }
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      })

      // Delete
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter(
          (c) => c.id !== action.payload
        );
      });
  },
});

export default categorySlice.reducer;
