import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Action
export const fetchproduct = createAsyncThunk(
  "productdata",
  async (args, { rejectWithValue }) => {
    const response = await fetch("https://fakestoreapi.com/products");
    try {
      return response.json();
    } catch (error) {
      console.log("Opps error occured..!!", rejectWithValue);
    }
  }
);

const productdata = createSlice({
  name: "productdata",
  initialState: {
    isloading: false,
    data: null,
    iserror: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchproduct.pending, (state, action) => {
      state.isloading = true;
    });

    builder.addCase(fetchproduct.fulfilled, (state, action) => {
      state.isloading = false;
      state.data = action.payload;
      console.log(state.data);
    });
    builder.addCase(fetchproduct.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.iserror = true;
    });
  },
});

export default productdata.reducer;
