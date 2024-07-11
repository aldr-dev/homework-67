import {configureStore} from '@reduxjs/toolkit';
import {pinReducer} from '../containers/Pin/pinSlice';

export const store = configureStore({
  reducer: {
    pin: pinReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;