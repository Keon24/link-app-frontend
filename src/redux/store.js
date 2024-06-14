// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import linksReducer from "../redux/linksSlice";
import imageReducer from './imageSlice'; // Make sure the path is correct

export default configureStore({
  reducer: {
    links: linksReducer,
    image: imageReducer, // Now it's properly defined
  },
});
