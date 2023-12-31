import { createSlice } from "@reduxjs/toolkit";

const squadSlice = createSlice({
  name: 'squad',
  initialState: {
    items: []
  },
  reducers: {
    addImage: (state, action) => {
      state.items.push(action.payload);
    },
    removeImage: (state, action) => {
      state.items.pop();
    },
    clearImage: (state) => {
      state.items.length = 0;
    }
  }
});

export const { addImage, clearImage } = squadSlice.actions;

export default squadSlice.reducer;