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

// Actions
export const { addLink, removeLink } = linksSlice.actions;

// Selector
export const selectLinks = state => state.links;

// Reducer
export default linksSlice.reducer;
