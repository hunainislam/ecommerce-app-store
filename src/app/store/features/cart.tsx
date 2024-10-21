import { Cart } from "@/app/utils/types";
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState: Cart[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add a new product to the cart
    addToCart(state, action) {
      const uuid = Math.floor(1000 + Math.random() * 9000);
      const newObject = { ...action.payload, uuid };
      state.push(newObject);
    },

    // Increase quantity of the existing product in the cart
    addCart(state, action) {
      const object = state.find(
        (value) =>
          value.id === action.payload.id &&
          value.color === action.payload.color &&
          value.size === action.payload.size
      );
      if (object) {
        object.quantity += 1;
      }
    },

    // Delete item from cart
    deleteItem(state, { payload }) {
      return state.filter((value) => value.uuid !== payload);
    },

    // Subtract quantity of a product or remove it if quantity is 0
    SubtractCart(state, action) {
      const object = state.find(
        (value) =>
          value.id === action.payload.id &&
          value.color === action.payload.color &&
          value.size === action.payload.size
      );
      if (object) {
        if (object.quantity <= 1) {
          return state.filter((value) => value.uuid !== object.uuid);
        }
        object.quantity -= 1;
      }
    },
  },
});

export const { addToCart, deleteItem, addCart, SubtractCart } = cartSlice.actions;
export default cartSlice.reducer;

