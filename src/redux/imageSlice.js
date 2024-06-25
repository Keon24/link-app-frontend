
import { createSlice } from '@reduxjs/toolkit';

export const imageSlice = createSlice({
  name: 'image',
  initialState: {
    imageUrl: null,
  },
  reducers: {
    setImage: (state, action) => {
      state.imageUrl = action.payload;
    },
    clearImage: (state) => {
      state.imageUrl = null;
    }
  },
});

export const { setImage, clearImage } = imageSlice.actions;
export const selectImage = (state) => state.image.imageUrl;

export default imageSlice.reducer;
