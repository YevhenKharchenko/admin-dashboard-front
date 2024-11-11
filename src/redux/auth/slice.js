import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser, getCurrentUser } from './operations.js';
import { handleError, handleRefreshing } from '../../utils/index.js';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
      avatar: '',
      phone: '',
    },
    pets: [],
    favorites: [],
    views: [],
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },
  reducers: {
    logoutOnClient(state) {
      state.isRefreshing = false;
      state.isLoggedIn = false;
      state.error = null;
      state.user = { name: null, email: null };
      state.token = null;
      state.pets = null;
      state.favorites = null;
      state.views = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, handleRefreshing)
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.error = null;
        state.user = { name: action.payload.name, email: action.payload.email };
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, handleError)
      .addCase(logoutUser.pending, handleRefreshing)
      .addCase(logoutUser.fulfilled, state => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.error = null;
        state.user = { name: null, email: null };
        state.token = null;
        state.pets = null;
        state.favorites = null;
        state.views = null;
      })
      .addCase(logoutUser.rejected, handleError)
      .addCase(getCurrentUser.pending, handleRefreshing)
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.error = null;
        state.favorites = action.payload.noticesFavorites;
      })
      .addCase(getCurrentUser.rejected, handleError);
  },
});

export const { logoutOnClient } = authSlice.actions;

export const authReducer = authSlice.reducer;
