import { createSlice } from '@reduxjs/toolkit';
import { getSuppliers } from './operations.js';
import { handleError, handleRefreshing } from '../../utils/index.js';
import { addProduct, editProduct } from '../products/operations.js';

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
      .addCase(getSuppliers.rejected, handleError)
      .addCase(addProduct.pending, handleError)
      .addCase(addProduct.fulfilled, state => {
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(addProduct.rejected, handleError)
      .addCase(editProduct.pending, handleError)
      .addCase(editProduct.fulfilled, state => {
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(editProduct.rejected, handleError);
  },
});

export const suppliersReducer = suppliersSlice.reducer;
