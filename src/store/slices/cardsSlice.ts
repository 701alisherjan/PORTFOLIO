import { createSlice } from '@reduxjs/toolkit';
import cardsData from '../../data/cards.json';

interface Card {
  id: number;
  title: Record<string, string>;
  description: Record<string, string>;
  fullDescription: Record<string, string>;
  image: string;
  quality: string;
  material: Record<string, string>;
  price: string;
  category: string;
}

interface CardsState {
  cards: Card[];
  selectedCard: Card | null;
  loading: boolean;
}

const initialState: CardsState = {
  cards: cardsData,
  selectedCard: null,
  loading: false,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setSelectedCard: (state, action) => {
      state.selectedCard = action.payload;
    },
    clearSelectedCard: (state) => {
      state.selectedCard = null;
    },
  },
});

export const { setSelectedCard, clearSelectedCard } = cardsSlice.actions;
export default cardsSlice.reducer;