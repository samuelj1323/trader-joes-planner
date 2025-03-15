// CartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { SimpleProduct } from "../types"; // Import your SimpleProduct type

export interface CartItem extends SimpleProduct {
  quantity: number;
  id: string; // Add id for cart item identification
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<SimpleProduct>) => {
      const newItem: CartItem = {
        ...action.payload,
        quantity: 1,
        id: uuidv4(), // Generate a unique ID for the cart item
      };

      const existingItem = state.items.find(
        (item) => item.sku === newItem.sku // Check for existing item by SKU
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push(newItem);
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    setItems: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
    },
  },
});

export const { addItem, removeItem, updateQuantity, setItems } =
  CartSlice.actions;

export default CartSlice.reducer;
