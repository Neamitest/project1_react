import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
 
export const fetchUsers = createAsyncThunk(
    "usersSlice/fetchUsers",
    async (id) => {
        const res = await fetch(`http://localhost:5000/api/users/${id}`,{
            headers: { "Authorization": "Bearer " },
        }).then((data) =>
            data.json()
        );
        return res;
    }
);
export const usersSlice = createSlice({
    initialState: [],
    name: "userSlice",
    extraReducers: (bailden) => {
        bailden.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload;
        });
        bailden.addCase(fetchUsers.rejected,(state,action)=>{
            return state = "rejected"
         
        })
        bailden.addCase(fetchUsers.pending,(state,action)=>{
            return state = "pending"
        })
    },
});
export default usersSlice.reducer;
export const {} = usersSlice.actions;
