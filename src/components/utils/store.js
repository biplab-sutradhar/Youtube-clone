import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import ChatSlice from "./ChatSlice";
import VideoSlice from "./VideoSlice";
import SubscribeSlice from "./SubscribeSlice";
import historySlice from "../history/historySlice";

const store = configureStore({
reducer: {
  app: appSlice,
  search: searchSlice,
  chat: ChatSlice,
  video:VideoSlice,
  subscribe : SubscribeSlice,
  history: historySlice,

}
})

export default store;