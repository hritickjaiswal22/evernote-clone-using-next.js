import { createSlice } from "@reduxjs/toolkit";

const initialMessage = { key: null, title: null };

const messageSlice = createSlice({
  name: "selectedMessage",
  initialState: initialMessage,
  reducers: {
    selectMessage(currentState, action) {
      currentState.key = action.payload.key;
      currentState.title = action.payload.title;
    },
  },
});

export const { selectMessage } = messageSlice.actions;

export default messageSlice.reducer;
