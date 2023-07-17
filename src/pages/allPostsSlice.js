import { createSlice } from "@reduxjs/toolkit";

// Data
import { linkedinData } from "../data";

const initialState = {
  error: "",
  isLoading: true,
  data: []
};

export const allPostsSlice = createSlice({
  name: "Posts",
  initialState, 
  extraReducers: (builder) => {
    builder.addDefaultCase((state, action) => {
      state.isLoading = false;
      state.error = "";
      state.data = linkedinData;
      console.log("addDefaultCase");
    })
  },
});

export const selectisLoadingPosts = (state) => state.Posts.isLoading;
export const selectError = (state) => state.Posts.error;
export const selectData = (state) => linkedinData;

export default allPostsSlice.reducer;