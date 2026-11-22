import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/Auth/authSlice';
import catalogReducer from '../features/Catalog/catalogSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    catalog: catalogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;