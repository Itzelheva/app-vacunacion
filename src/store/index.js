import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../features/profile/profileSlice"
import { authApi } from "../services/authApi";
import authSlice from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    profiles: profileReducer,
    auth: authSlice,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(authApi.middleware),  
})

