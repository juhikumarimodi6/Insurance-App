import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    usersData: [],
    count: 0,
    email: "",
    mobile: "",
    memberTitles: [],
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
    deleteUserAtIndex: (state, action) => {
      state.usersData.splice(action.payload,1);
    },
    setEmail: (state, action) => {
      state.email = action.payload;
      console.log(state.email);
    },
    setMobile: (state, action) => {
      state.mobile = action.payload;
      console.log(state.mobile);
    },
    addDataToMemberTitles: (state,action) => {
      state.memberTitles.push(action.payload)
    },
    removeDataFromMemberTitles: (state,action) => {
      var index = state.memberTitles.indexOf(action.payload);
      state.memberTitles.splice(index, 1);
    },
    filterDataFromMemberTitles: (state,action) => {
      state.memberTitles = state.memberTitles.filter(item => item !== action.payload);
    },
    clearMemberTitles: (state) => {
      state.memberTitles = []
    },

  },
});

export const { setUsersData, clearUsersData, addUser, deleteUserAtIndex, setEmail, setMobile, addDataToMemberTitles, removeDataFromMemberTitles, filterDataFromMemberTitles, clearMemberTitles } = userSlice.actions;
export const selectUsersData = (state) => state.user.usersData;
export const selectMemberTitles= (state) => state.user.memberTitles;
export default userSlice.reducer;
