import { createSlice } from "@reduxjs/toolkit";

export const DarkModeSlice = createSlice({
    name: "DarkModeSlice",
    initialState: localStorage.getItem("mode"),
    reducers: {
        dark: (state) => {
            return (state = "dark");
        },
        white: (state) => {
            return (state = "white");
        },
    },
});

export const { dark, white } = DarkModeSlice.actions;
export default DarkModeSlice.reducer;
