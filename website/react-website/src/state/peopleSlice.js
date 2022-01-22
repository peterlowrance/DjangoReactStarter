import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPeople = createAsyncThunk(
  "people/fetchPeople",
  async (undefined, thunkAPI) => {
    const url = window.origin + '/api/list-people';
    const res = await axios.get(url);
    return res.data;
  }
);

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    loading: false
  },
  reducers: {
    setPeople: (state, action) => {
      state.people = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchPeople.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchPeople.rejected, (state, action) => {
        state.loading = false;
        alert("Failed to get data " + JSON.stringify(action.payload));
      })
      .addCase(fetchPeople.fulfilled, (state, action) => {
        state.loading = false;
        state.people = action.payload;
      })
});

export const { setPeople, setLoading } = peopleSlice.actions;
export default peopleSlice.reducer;
