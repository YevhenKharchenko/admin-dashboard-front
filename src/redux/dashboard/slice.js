import { createSlice } from '@reduxjs/toolkit';
import { getDashboard } from './operations.js';
import { handleError, handleRefreshing } from '../../utils/index.js';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    customers: [],
    transactions: [],
    customersCount: null,
    productsCount: null,
    suppliersCount: null,
    isRefreshing: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getDashboard.pending, handleRefreshing)
      .addCase(getDashboard.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.error = null;
        state.customers = action.payload.customers;
        state.transactions = action.payload.transactions;
        state.customersCount = action.payload.customersCount;
        state.productsCount = action.payload.productsCount;
        state.suppliersCount = action.payload.suppliersCount;
      })
      .addCase(getDashboard.rejected, handleError);
  },
});

export const dashboardReducer = dashboardSlice.reducer;
