import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const { addItem, removeItem, setCartItems } = cartSlice.actions;

export default cartSlice.reducer;
