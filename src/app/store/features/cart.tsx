import { Cart } from "@/app/utils/types";
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState: Cart[] = [];

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Add to Cart Functionality
    addToCart(state, action) {
      const uuid = Math.floor(1000 + Math.random() * 9000);
      const newObject = { ...action.payload, uuid };
      state.push(newObject);
    },
    // Delete From Cart
    deleteItem(state, { payload }) {
      return state.filter((value) => value.uuid !== payload);
    },

    // Addition Of  Cart
    addCart(state, action) {
      const object = state.find(
        (value) =>
          value.id == action.payload.id &&
          value.color == action.payload.color &&
          value.size == action.payload.size
      );
      if (object) {
        ++object.quantity;
        const newState = state.filter((value) => value.id !== object?.id);
        state = [...newState, object];
        return;
      }
    },

    // Subtraction Of Item
    SubtractCart(state,action) {
      const object = state.find(
        (value) =>
          value.id == action.payload.id &&
          value.color == action.payload.color &&
          value.size == action.payload.size
      );
      if(object !== undefined) {
        if(object.quantity <= 1) {
          return state.filter((value) => value.uuid !== object?.uuid)
        }
        --object.quantity;
        const newState = state.filter((value) => value.uuid == object?.uuid)
        state = [...newState, object];
        return;
      }
    }
  },
});

export const { addToCart, deleteItem, addCart, SubtractCart } = cartSlice.actions;

export default cartSlice.reducer;
