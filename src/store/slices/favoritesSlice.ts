import { createSlice } from '@reduxjs/toolkit';

interface FavoritesState {
  favoriteIds: number[];
}

const initialState: FavoritesState = {
  favoriteIds: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const id = action.payload;
      if (!state.favoriteIds.includes(id)) {
        state.favoriteIds.push(id);
      }
    },
    removeFromFavorites: (state, action) => {
      state.favoriteIds = state.favoriteIds.filter(id => id !== action.payload);
    },
    toggleFavorite: (state, action) => {
      const id = action.payload;
      const index = state.favoriteIds.indexOf(id);
      if (index > -1) {
        state.favoriteIds.splice(index, 1);
      } else {
        state.favoriteIds.push(id);
      }
    },
  },
});

export const { addToFavorites, removeFromFavorites, toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;