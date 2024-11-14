import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../api/axiosInstance.js';

export const getDashboard = createAsyncThunk('dashboard/getDashboard', async (_, thunkAPI) => {
  try {
    const { data } = await instance.get('/dashboard?page=1&perPage=6');
    console.log(data);

    return data.data;
  } catch (e) {
    toast.error(
      `Oops! Something went wrong. Please try again later or contact support. Error details: ${e.message}`
    );
    return thunkAPI.rejectWithValue(e.message);
  }
});
