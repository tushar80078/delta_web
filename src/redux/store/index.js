import { configureStore } from '@reduxjs/toolkit';
import storage from "redux-persist/lib/storage";
import {
  persistReducer, persistStore, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import rootReducer from "./rootReducer"
import apiSlice from "./apiSlice/index";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "layout"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware);
  }
});

export const persistor = persistStore(store);

export function purge() {
  return persistor.purge();
}
