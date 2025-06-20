import { configureStore } from "@reduxjs/toolkit";
import { categorySlice } from "../features/categories/categorySlice";
import { animalSlice } from "../features/animals/animalsSlice";

export const store = configureStore({
  reducer: {
    category: categorySlice.reducer,
    animal: animalSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
