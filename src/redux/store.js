import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice.js';
import { dashboardReducer } from './dashboard/slice.js';
import { ordersReducer } from './orders/slice.js';
import { productsReducer } from './products/slice.js';
import { customersReducer } from './customers/slice.js';
import { suppliersReducer } from './suppliers/slice.js';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['isLoggedIn', 'user'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    dashboard: dashboardReducer,
    orders: ordersReducer,
    products: productsReducer,
    suppliers: suppliersReducer,
    customers: customersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
