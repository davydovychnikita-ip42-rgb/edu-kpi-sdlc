import { createSlice } from "@reduxjs/toolkit"

interface AuthState {
  isLoggedIn: boolean,
  token: string | null,
}

const initialState: AuthState = {
  isLoggedIn: false,
  token: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
    },
    login: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const { logout, login } = authSlice.actions;
export default authSlice.reducer;