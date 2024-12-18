import { createSlice } from '@reduxjs/toolkit';
import { getOrders } from './operations.js';
import { handleError, handleRefreshing } from '../../utils/index.js';

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
    totalPages: null,
    isRefreshing: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getOrders.pending, handleRefreshing)
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.error = null;
        state.orders = action.payload.orders;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getOrders.rejected, handleError);
  },
});

export const ordersReducer = ordersSlice.reducer;
