import { createSlice } from "@reduxjs/toolkit";
// Data
import { MyInfos } from "../data";

const initialState = {
  isLoading: false,
  error: "",
  data: [],
};

export const homeSlice = createSlice({
  name: "home",
  initialState, 
  extraReducers: (builder) => {
    builder.addDefaultCase((state, action) => {
      state.isLoading = false;
      state.error = "";
      state.data = MyInfos;
    })
  },
});

export const selectIsLoading = (state) => state.home.isLoading;
export const selectError = (state) => state.home.error;
export const selectData = (state) => state.home.data;

export default homeSlice.reducer;
