import { createSlice } from "@reduxjs/toolkit";

const savedUser = localStorage.getItem("user");
const initialState = {
  user: savedUser ? JSON.parse(savedUser) : null,
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      if (action.payload) {
        localStorage.setItem("user", JSON.stringify(action.payload));
      } else {
        localStorage.removeItem("user");
      }
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUser, setLoading } = userSlice.actions;
export default userSlice.reducer;
