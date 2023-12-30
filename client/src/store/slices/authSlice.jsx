import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthentic: false,
  user: null,
  token: ''
};

const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthentic = true;
      state.user = action.payload;
      state.token = action.payload;
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
