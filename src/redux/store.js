import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import tea from './slices/teaSlice';

export const store = configureStore({
	reducer: {
		filter,
		cart,
		tea,
	},
});
