import { createSlice } from '@reduxjs/toolkit';

type Language = 'uz' | 'ru' | 'en' | 'tr';

interface LanguageState {
  currentLanguage: Language;
}

const initialState: LanguageState = {
  currentLanguage: 'uz',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;