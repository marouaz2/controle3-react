import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDetails = createAsyncThunk(
  "detail/getDetail",
  async () => {
    const response = await axios.get("https://dummyjson.com/todos");
    return response.data;
  }
);

const DetailSlice = createSlice ({
    name: "user",
    initialState:{
        user:{}
    },
    reducers: {
        getDetail : (state, action) => {
            state.user = action.payload;
        }
    }
});

export default DetailSlice.reducer;
export const {getDetail} = DetailSlice.actions
