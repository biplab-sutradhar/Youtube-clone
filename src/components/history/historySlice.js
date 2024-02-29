import { createSlice } from '@reduxjs/toolkit';

const historySlice = createSlice({
  name: 'history',
  initialState: { cart: [] },
  reducers: {
    addToHistory: (state, action) => {
      const id = action.payload;
      if (!state.cart.includes(id)) {
        state.cart.push(id);
      }
    },
  },
});

export const { addToHistory } = historySlice.actions;
export default historySlice.reducer;
