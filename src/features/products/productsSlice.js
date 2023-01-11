import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

const getProducts = createAsyncThunk("products/getProduct", async () => {
    const res = await fetch("http://localhost:5000/product");
    const data = await res.json();
    return data;
});

const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {

    },
});

export default productsSlice.reducer;