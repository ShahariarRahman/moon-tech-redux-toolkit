import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    error: "",
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
        builder.addCase(getProducts.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
        });
    },
});

export default productsSlice.reducer;