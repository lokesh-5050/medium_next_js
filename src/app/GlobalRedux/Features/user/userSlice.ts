"use client";

import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

export interface UserState {
  user: null;
  // blogs:null,
  // singleBlogs:null,
  isLoggedIn: boolean;
  error: null;
  loading: boolean;
  singleUser: null;
  users: null;
}

const initialState: UserState = {
  user: null,
  // blogs:null,
  // singleBlogs:null,
  isLoggedIn: false,
  error: null,
  loading: true,
  singleUser: null,
  users: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.loading = false;
      state.error = null;
    },
    setLoadingFalse: (state, action) => {
      state.loading = false;
    },
    errors: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

  },
});

export const { loadUser, setLoadingFalse , errors} = userSlice.actions;

export default userSlice.reducer;
