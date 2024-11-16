import { createSlice } from '@reduxjs/toolkit';
import { getCustomers } from './operations.js';
import { handleError, handleRefreshing } from '../../utils/index.js';

const customersSlice = createSlice({
  name: 'customers',
  initialState: {
    customers: [],
    totalPages: null,
    isRefreshing: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getCustomers.pending, handleRefreshing)
      .addCase(getCustomers.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.error = null;
        state.customers = action.payload.customers;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getCustomers.rejected, handleError);
  },
});

export const customersReducer = customersSlice.reducer;
