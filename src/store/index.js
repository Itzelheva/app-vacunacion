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


{/*

index de store

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { profilesApi } from "../services/profilesApi";
import profileReducer from "../features/profile/profileSlice";

const store = configureStore({
  reducer: {
    profiles: profileReducer,
    [profilesApi.reducerPath]: profilesApi.reducer
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(profilesApi.middleware)
})

setupListeners(store.dispatch)

export default store

-------------
otro componente

profilesApi.js de la carpeta services:

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../firebase"

export const profilesApi = createApi({
  reducerPath: "profilesApi",
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: builder => ({
    getCategories: builder.query({
      query: () => "categories.json",
    }),
    getProducts: builder.query({
      query: () => "products.json",
    }),
    getProductsByCategory: builder.query ({
      query: category => `products.json?orderBy="category"&equalTo="${category}"`
    })
  }),
})

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
} = profilesApi


*/}
