import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  localId: null,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log('Datos del usuario:', action.payload);
      return {
        user: action.payload.email,
        token: action.payload.idToken,
        localId: action.payload.localId,
      }
    },
    clearUser: () => {
      return { user: null, token: null, localId: null }
    },
  },
})

export const { setUser, clearUser } = authSlice.actions

export default authSlice.reducer