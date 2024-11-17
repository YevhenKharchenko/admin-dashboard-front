import { createSlice } from '@reduxjs/toolkit';
import { getProducts, addProduct, editProduct, deleteProduct } from './operations.js';
import { handleError, handleRefreshing } from '../../utils/index.js';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    totalPages: null,
    isRefreshing: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, handleRefreshing)
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.error = null;
        state.products = action.payload.products;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getProducts.rejected, handleError)
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
      .addCase(editProduct.rejected, handleError)
      .addCase(deleteProduct.pending, handleError)
      .addCase(deleteProduct.fulfilled, state => {
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(deleteProduct.rejected, handleError);
  },
});

export const productsReducer = productsSlice.reducer;
