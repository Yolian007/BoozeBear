import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { persistReducer, persistStore } from 'redux-persist';
import game from './game';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};
const reducer = combineReducers({
  game,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

