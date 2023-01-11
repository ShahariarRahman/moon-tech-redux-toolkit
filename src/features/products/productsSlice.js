import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

export const getProduct = createAsyncThunk("products/getProducts", async () => {

});

const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
    },
});

export default productsSlice.reducer;