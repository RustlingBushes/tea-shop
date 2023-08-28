import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import tea from './slices/teaSlice';

// const rootReducer = combineReducers({
// 	filter,
// 	cart,
// 	tea,
// });

// const persistConfig = {
// 	key: 'teaCart',
// 	storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
// 	reducer: persistReducer,
// });

const store = configureStore({
	reducer: {
		filter,
		cart,
		tea,
	},
});

export default store;
