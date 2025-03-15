// store.ts
import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from "./CartSlice"; // Import the reducer

export const store = configureStore({
  reducer: {
    cart: CartSliceReducer, // Assign the CartSliceReducer to the "cart" slice of the state
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
