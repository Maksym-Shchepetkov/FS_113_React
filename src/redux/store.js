import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counterReducer';
console.log(import.meta.env);

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  devTools: import.meta.env.MODE === 'development' ? true : false,
});
