import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../api/axiosInstance.js';

export const getOrders = createAsyncThunk(
  'orders/getOrders',
  async ({ page = 1, perPage = 5, name = '' }, thunkAPI) => {
    try {
      const { data } = await instance.get(`/orders?page=${page}&perPage=${perPage}&name=${name}`);
      console.log(data);

      return data.data;
    } catch (e) {
      toast.error(
        `Oops! Something went wrong. Please try again later or contact support. Error details: ${e.message}`
      );
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
