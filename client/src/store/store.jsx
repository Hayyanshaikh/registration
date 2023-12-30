import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice.jsx';

export default configureStore({
  reducer: {
    authentication: authSlice
  }
})