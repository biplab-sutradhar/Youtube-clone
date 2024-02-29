import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
  name : 'Chat',
  initialState : {
    messages: [],
  },
  reducers: {
    addMessages: (state, action)=>{

      state.messages.unshift(action.payload);
      state.messages.splice(30, 1)
    }
  }
})

export const { addMessages } = ChatSlice.actions;

export default ChatSlice.reducer;