import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  uid: null,
  displayName: null,
  photoURL: null,
  email: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.uid = payload.uid;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.email = payload.email;
      state.isLoggedIn = true;
    },
    logOut: (state, _) => {
      state.isLoggedIn = false;
      state.uid = null;
      state.displayName = null;
      state.email = null;
      state.photoURL = null;
    },
    updateAvatar: (state, action) => {
      state.photoURL = action.payload.photoURL;
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
