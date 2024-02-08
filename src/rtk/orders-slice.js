import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {ORDER_URL} from "../utils/constent"
export const fetchOrders = createAsyncThunk(
    "ordersSlice/fetchOrders",
    async (numPage) => {
        const res = await fetch(`http://localhost:5000/api/orders?limit=6&page=${numPage}`).then((data) =>
            data.json()
        );
        return res;
    }
);
export const ordersSlice = createSlice({
    initialState: [],
    name: "ordersSlice",
    extraReducers: (bailden) => {
        bailden.addCase(fetchOrders.fulfilled, (state, action) => {
            return action.payload;
        });
        bailden.addCase(fetchOrders.rejected,(state,action)=>{
            return state = "rejected"
         
        })
        bailden.addCase(fetchOrders.pending,(state,action)=>{
            return state = "pending"
        })
    },
});
export default ordersSlice.reducer;
export const {} = ordersSlice.actions;
