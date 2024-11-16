import { createSlice } from '@reduxjs/toolkit';
import { getSuppliers } from './operations.js';
import { handleError, handleRefreshing } from '../../utils/index.js';

const suppliersSlice = createSlice({
  name: 'suppliers',
  initialState: {
    suppliers: [],
    totalPages: null,
    isRefreshing: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getSuppliers.pending, handleRefreshing)
      .addCase(getSuppliers.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.error = null;
        state.suppliers = action.payload.suppliers;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getSuppliers.rejected, handleError);
  },
});

export const suppliersReducer = suppliersSlice.reducer;
