import { createSlice } from "@reduxjs/toolkit";
export interface LoginState {
  value: boolean;
}

const initialState: LoginState = {
  value:!!localStorage.getItem("userToken"),
};

export const loginSlice = createSlice({
  name: "isLogin",
  initialState,
  reducers: {
    logIn: (login) => {
      login.value = true;
    },
    logOut: (login) => {
      login.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logIn, logOut } = loginSlice.actions;

export default loginSlice.reducer;
