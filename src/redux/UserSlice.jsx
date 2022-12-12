import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
  "users/getUser",
  async () => {
    const response = await axios.get("https://dummyjson.com/users");
    return response.data;
  }
);

const UserSlice = createSlice ({
    name: "user",
    initialState:{
        user:{}
    },
    reducers: {
        getUser : (state, action) => {
            state.user = action.payload;
        }
    }
});

export default UserSlice.reducer;
export const {getUser} = UserSlice.actions
