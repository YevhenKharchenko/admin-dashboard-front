import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../api/axiosInstance.js';

export const getSuppliers = createAsyncThunk(
  'suppliers/getSuppliers',
  async ({ page = 1, perPage = 5, name = '' }, thunkAPI) => {
    try {
      const { data } = await instance.get(
        `/suppliers?page=${page}&perPage=${perPage}&name=${name}`
      );

      return data.data;
    } catch (e) {
      toast.error(
        `Oops! Something went wrong. Please try again later or contact support. Error details: ${e.message}`
      );
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addSupplier = createAsyncThunk('suppliers/addSupplier', async (formData, thunkAPI) => {
  try {
    const { data } = await instance.post(`/suppliers`, formData);
    toast.success('Supplier has been added successfully!');

    return data.data;
  } catch (e) {
    toast.error(
      `Oops! Something went wrong. Please try again later or contact support. Error details: ${e.message}`
    );
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const editSupplier = createAsyncThunk(
  'suppliers/editSupplier',
  async ({ id, formData }, thunkAPI) => {
    try {
      const { data } = await instance.put(`/suppliers/${id}`, formData);
      toast.success('Supplier has been edited successfully!');

      return data.data;
    } catch (e) {
      toast.error(
        `Oops! Something went wrong. Please try again later or contact support. Error details: ${e.message}`
      );
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
