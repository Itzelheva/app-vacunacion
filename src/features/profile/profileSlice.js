import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  list: [],
}

export const profileSlice = createSlice({
  name:'profiles',
  initialState,
  reducers: {
    AddProfile: (state, action) => {
      state.list.push(action.payload)
    },
  },
})

export const { AddProfile } = profileSlice.actions;

export default profileSlice.reducer;