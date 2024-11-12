import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser, getCurrentUser } from './operations.js';
import { handleError, handleRefreshing } from '../../utils/index.js';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
      token: null,
    },
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },
  reducers: {
    logoutOnClient(state) {
      state.isRefreshing = false;
      state.isLoggedIn = false;
      state.error = null;
      state.user = { name: null, email: null, token: null };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, handleRefreshing)
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.error = null;
        state.user = {
          name: action.payload.name,
          email: action.payload.email,
          token: action.payload.token,
        };
        console.log(action.payload);
      })
      .addCase(loginUser.rejected, handleError)
      .addCase(logoutUser.pending, handleRefreshing)
      .addCase(logoutUser.fulfilled, state => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.error = null;
        state.user = { name: null, email: null, token: null };
      })
      .addCase(logoutUser.rejected, handleError)
      .addCase(getCurrentUser.pending, handleRefreshing)
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.error = null;
        state.user = {
          name: action.payload.name,
          email: action.payload.email,
          token: action.payload.token,
        };
      })
      .addCase(getCurrentUser.rejected, handleError);
  },
});

export const { logoutOnClient } = authSlice.actions;

export const authReducer = authSlice.reducer;
