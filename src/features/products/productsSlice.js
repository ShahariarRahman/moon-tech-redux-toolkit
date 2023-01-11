import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

export const getProduct = createAsyncThunk("products/getProducts", async () => {
    const res = await fetch('http://localhost:5000/product');
    const data = await res.json();
    return data;
});

const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getProduct.pending, (state, action) => {

            });
    },
});

export default productsSlice.reducer;