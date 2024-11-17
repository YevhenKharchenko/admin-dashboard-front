import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../api/axiosInstance.js';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async ({ page = 1, perPage = 5, name = '' }, thunkAPI) => {
    try {
      const { data } = await instance.get(`/products?page=${page}&perPage=${perPage}&name=${name}`);

      return data.data;
    } catch (e) {
      toast.error(
        `Oops! Something went wrong. Please try again later or contact support. Error details: ${e.message}`
      );
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addProduct = createAsyncThunk('products/addProduct', async (formData, thunkAPI) => {
  try {
    const { data } = await instance.post(`/products`, formData);
    toast.success('Product has been added successfully!');

    return data.data;
  } catch (e) {
    toast.error(
      `Oops! Something went wrong. Please try again later or contact support. Error details: ${e.message}`
    );
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const editProduct = createAsyncThunk(
  'products/editProduct',
  async ({ id, formData }, thunkAPI) => {
    console.log(id, formData);
    try {
      const { data } = await instance.put(`/products/${id}`, formData);
      toast.success('Product has been edited successfully!');

      return data.data;
    } catch (e) {
      toast.error(
        `Oops! Something went wrong. Please try again later or contact support. Error details: ${e.message}`
      );
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (id, thunkAPI) => {
  try {
    const { data } = await instance.delete(`/products/${id}`);
    toast.success('Product has been deleted successfully!');

    return data.data;
  } catch (e) {
    toast.error(
      `Oops! Something went wrong. Please try again later or contact support. Error details: ${e.message}`
    );
    return thunkAPI.rejectWithValue(e.message);
  }
});
