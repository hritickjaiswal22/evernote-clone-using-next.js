import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
};

const authSlice = createSlice({
  name: "userAuth",
  initialState: initialAuthState,
  reducers: {
    login(currentState, action) {
      const { uid, email, displayName, photoURL } = action.payload;
      currentState.uid = uid;
      (currentState.email = email),
        (currentState.displayName = displayName),
        (currentState.photoURL = photoURL);
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
