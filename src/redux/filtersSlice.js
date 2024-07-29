import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    name: "",
  },
  reducers: {
    filterContacts: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const selectTextFilter = (state) => state.filter.name;
export const { filterContacts } = filterSlice.actions;
export default filterSlice.reducer;
