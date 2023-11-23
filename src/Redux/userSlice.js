// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: {
        name: "",
        gender: "",
    },
  },
  reducers: {
    setUserData: (state, action) => { 
      state.userData = action.payload;
    },
    clearUserData: (state) => {
      state.userData = null;
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;
export const selectUserData = (state) => state.user.userData; // Selector function to access user data
export default userSlice.reducer;
