import { configureStore } from "@reduxjs/toolkit";
import squadReducer from './squadSlice';

const appStore = configureStore({
  reducer: {
    squad: squadReducer
  }
});

export default appStore;