import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    usersData: [],
    count: 0,
    email: "",
    mobile: "",
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
    },
    incrementCounter: (state, action) => {
        state.count += action.payload;
        console.log(state.count)
    },
    decrementCounter: (state, action) => {
        state.count -= action.payload;
        console.log(state.count)
    },
    clearCounter: (state, action) => {
      state.count = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
      console.log(state.email);
    },
    setMobile: (state, action) => {
      state.mobile = action.payload;
      console.log(state.mobile);
    }
  },
});

export const { setUsersData, clearUsersData, addUser, incrementCounter, decrementCounter, clearCounter, setEmail, setMobile } = userSlice.actions;
export const selectUsersData = (state) => state.user.usersData; // Selector function to access user data
export const selectCount = (state) => state.user.count;
export default userSlice.reducer;
