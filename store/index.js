import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice";
import messageReducer from "../slices/messageSlice";

const store = configureStore({
  reducer: {
    authState: authReducer,
    messageState: messageReducer,
  },
});

export default store;
