import { createSlice } from "@reduxjs/toolkit";

const squadSlice = createSlice({
  name: 'squad',
  initialState: {
    items: ''
  },
  reducers: {
    addImage: (state, action) => {
      state.items = action.payload;
    },
    removeImage: (state, action) => {
      state.items.pop();
    },
    clearImage: (state) => {
      state.items = '';
    }
  }
});

export const { addImage, clearImage } = squadSlice.actions;

export default squadSlice.reducer;