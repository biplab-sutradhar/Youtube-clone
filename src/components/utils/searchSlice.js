import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "Search",
  initialState: {
  },
  reducers:{
    CacheResults:(state, action) => {
      // state = {...action.payload, ...state}
     state = Object.assign(state, action.payload)
    }
  }
})

export const {CacheResults} = searchSlice.actions; 
export default searchSlice.reducer;