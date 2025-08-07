import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SubscribeState {
  email: string;
}

const initialState: SubscribeState = {
  email: '',
};

const subscribeSlice = createSlice({
  name: 'subscribe',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    clearEmail: (state) => {
      state.email = '';
    },
  },
});

export const { setEmail, clearEmail } = subscribeSlice.actions;
export default subscribeSlice.reducer;
