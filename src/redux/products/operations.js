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
