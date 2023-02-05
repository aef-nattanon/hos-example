import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import counterReducer from './features/counter/counterSlice'


const persistConfig = {
  key: "hos-enterprise",
  storage,
  version: 1,
  // whitelist: [],
}
const rootReducer = combineReducers({
  counter: counterReducer,
});


export function makeStore() {
  return configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });
}

export default  makeStore();
