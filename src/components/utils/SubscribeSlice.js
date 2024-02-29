import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const videoSlice = createSlice({
  name: 'subscribe',
  initialState,
  reducers: {
    subscribeCar(state, action) {
      const { id } = action.payload;
    if (state.cart.includes(id)) {
        state.cart = state.cart.filter((item) => item !== id);
      } else {
        state.cart = [...state.cart, id];
      }
    },
  },
});

export const { subscribeCar } = videoSlice.actions;
export default videoSlice.reducer;
