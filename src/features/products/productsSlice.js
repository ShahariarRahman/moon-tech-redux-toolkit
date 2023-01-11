import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};



const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: () => {

    },
});

export default productsSlice.reducer;