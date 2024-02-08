import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {FOOD_URL} from "../utils/constent"
export const fetchProducts = createAsyncThunk(
    "productsSlice/fetchProducts",
    async (numPage) => {
        const res = await fetch(`http://localhost:5000/api/foods?limit=6&page=${numPage}`).then((data) =>
            data.json()
        );
        return res;
    }
);
export const productsSlice = createSlice({
    initialState: [],
    name: "productsSlice",
    extraReducers: (bailden) => {
        bailden.addCase(fetchProducts.fulfilled, (state, action) => {
            return action.payload;
        });
        bailden.addCase(fetchProducts.rejected,(state,action)=>{
            return state = "rejected"
         
        })
        bailden.addCase(fetchProducts.pending,(state,action)=>{
            return state = "pending"
        })
    },
});
export default productsSlice.reducer;
export const {} = productsSlice.actions;
