import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from './operations.js';
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
      .addCase(getProducts.rejected, handleError);
  },
});

export const productsReducer = productsSlice.reducer;
