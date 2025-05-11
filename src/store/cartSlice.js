import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addToCart(state, { payload }) {
      const existing = state.items.find(i => i.id === payload.id);
      if (!existing) state.items.push({ ...payload, quantity: 1 });
    },
    increment(state, { payload: id }) {
      const item = state.items.find(i => i.id === id);
      if (item) item.quantity += 1;
    },
    decrement(state, { payload: id }) {
      const item = state.items.find(i => i.id === id);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    removeFromCart(state, { payload: id }) {
      state.items = state.items.filter(i => i.id !== id);
    }
  }
});

export const { addToCart, increment, decrement, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
