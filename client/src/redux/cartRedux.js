import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addBook: (state, action) => {
      state.quantity += 1;
      state.books.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addBook } = cartSlice.actions;
export default cartSlice.reducer;