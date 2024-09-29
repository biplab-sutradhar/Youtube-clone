import { createSlice } from '@reduxjs/toolkit';
 
const initialState = {
  videos: [],
  cart: [],
};
 
const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
  
    addToCart(state, action) {
      const { id } = action.payload;
    if (state.cart.includes(id)) {
        
        state.cart = state.cart.filter((item) => item !== id);
      } else {
        state.cart = [...state.cart, id];
      }
    },
  },
});

 
export const { addToCart } = videoSlice.actions;

 
export default videoSlice.reducer;
