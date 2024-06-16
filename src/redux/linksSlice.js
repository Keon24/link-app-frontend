import { createSlice } from '@reduxjs/toolkit';

export const linksSlice = createSlice({
  name: 'links',
  initialState: [],
  reducers: {
    addLink: (state, action) => {
      state.push(action.payload);
    },
    removeLink: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
  },
});


export const { addLink, removeLink } = linksSlice.actions;


export const selectLinks = state => state.links;

export default linksSlice.reducer;
