export const selectIsLoggedIn = state => state.auth?.isLoggedIn;

export const selectUsername = state => state.auth?.user?.name;

export const selectEmail = state => state.auth?.user?.email;

export const selectToken = state => state.auth?.user?.token;

export const selectIsAuthRefreshing = state => state.auth?.isRefreshing;
