import { configureStore } from '@reduxjs/toolkit';
import linksReducer from "../redux/linksSlice";
import imageReducer from './imageSlice'; 

export default configureStore({
  reducer: {
    links: linksReducer,
    image: imageReducer, 
  },
});
