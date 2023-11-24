// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    usersData: [],
  },
  reducers: {
    setUsersData: (state, action) => { 
      state.usersData = action.payload;
    },
    clearUsersData: (state) => {
      state.usersData = null;
    },
    addUser: (state, action) => {
        state.usersData.push(action.payload);
    }
  },
});

export const { setUsersData, clearUsersData, addUser } = userSlice.actions;
export const selectUsersData = (state) => state.user.usersData; // Selector function to access user data
export default userSlice.reducer;
