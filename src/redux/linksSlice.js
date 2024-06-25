import { createSlice } from '@reduxjs/toolkit';

export const linksSlice = createSlice({
  name: 'links',
  initialState: [],
  reducers: {
    addLink: (state, action) => {
      console.log('Adding link:', action.payload);  // Log the action payload
      state.push(action.payload);
    },
    removeLink: (state, action) => {
      console.log('Removing link at index:', action.payload);  // Log the index being removed
      return state.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addLink, removeLink } = linksSlice.actions;

export const selectLinks = state => {
  console.log('Current links state:', state.links);  // Log the current state of links
  return state.links;
};

export default linksSlice.reducer;
