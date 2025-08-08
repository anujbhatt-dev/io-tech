// store/themeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ThemeType = 'light' | 'dark' | 'brown';

interface ThemeState {
  mode: ThemeType;
}

// Default fallback (SSR-safe)
const defaultTheme: ThemeType = 'light';

const initialState: ThemeState = {
  mode: defaultTheme,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeType>) {
      state.mode = action.payload;

      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', action.payload);
        document.documentElement.classList.remove('light', 'dark', 'brown');
        document.documentElement.classList.add(action.payload);
      }
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
