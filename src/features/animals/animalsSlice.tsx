import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type {
  AnimalItem,
  animalState,
  ApiResponseItem,
  ArgumentType,
  LinkResponseType,
} from "../../interfaces/Animal";

const API_URL = "http://localhost:5001";

const HEADERS = {
  "Content-Type": "application/json",
};

const initialState: animalState = {
  animals: [],
  loading: false,
  error: null,
};

// Fetch all animals
export const fetchAnimals = createAsyncThunk<AnimalItem[]>(
  "animals/fetchAnimals",
  async () => {
    const response = await fetch(`${API_URL}/animals`, {
      headers: HEADERS,
    });
    if (!response.ok) throw new Error("Failed to fetch animals");

    const hardObject = (await response.json()) as ApiResponseItem[];

    const normal = hardObject.map((item) => ({
      ...item.data?.[0], // animal data
      id: item.id, // აიდის მინიჭება
    }));

    return normal;
  }
);

// Delete animal
export const deleteAnimal = createAsyncThunk<string, string>(
  "animals/deleteAnimal",
  async (id) => {
    const response = await fetch(`${API_URL}/animals/${id}`, {
      method: "DELETE",
      headers: HEADERS,
    });
    if (!response.ok) throw new Error("Failed to delete animal");
    return id;
  }
);

// Update animal
export const updateAnimal = createAsyncThunk<AnimalItem, AnimalItem>(
  "animals/updateAnimal",
  async (animal) => {
    const response = await fetch(`${API_URL}/animals/${animal.id}`, {
      method: "PUT",
      headers: HEADERS,
      body: JSON.stringify({ data: [animal] }),
    });
    if (!response.ok) throw new Error("Failed to update animal");
    return await response.json();
  }
);

// Add animal
export const addAnimal = createAsyncThunk<AnimalItem, Omit<AnimalItem, "id">>(
  "animals/addAnimal",
  async (animalData) => {
    const response = await fetch(`${API_URL}/animals`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({ data: [animalData] }),
    });

    if (!response.ok) throw new Error("Failed to add animal");

    const result = (await response.json()) as ApiResponseItem;

    return {
      ...result.data?.[0],
      id: result.id, // ანიჭებს ID
    };
  }
);

// Link animal to category
export const linkAnimalToCategory = createAsyncThunk<
  LinkResponseType,
  ArgumentType
>("animals/linkToCategory", async ({ animalId, categoryId }) => {
  const response = await fetch(`${API_URL}/animals_with_categories`, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({
      animal_id: animalId,
      category_id: categoryId,
    }),
  });

  if (!response.ok) throw new Error("Failed to link animal to category");

  return await response.json();
});

// Slice
export const animalSlice = createSlice({
  name: "animal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnimals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnimals.fulfilled, (state, action) => {
        state.loading = false;
        state.animals = action.payload;
      })
      .addCase(fetchAnimals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });

    builder.addCase(deleteAnimal.fulfilled, (state, action) => {
      state.animals = state.animals.filter((a) => a.id !== action.payload);
    });

    builder.addCase(updateAnimal.fulfilled, (state, action) => {
      const index = state.animals.findIndex((a) => a.id === action.payload.id);
      // თუ ცხოველი არსებობს, განახლდება
      if (index !== -1) {
        state.animals[index] = action.payload;
      }
    });
  },
});
