import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products-slice";
import darkModeSlice from "./darkMode-slice";
import ordersSlice from "./orders-slice";
import usersSlice from "./users-slice";

export const store = configureStore({
    reducer: {
        products: productsSlice,
        darkMode: darkModeSlice,
        orders: ordersSlice,
        users: usersSlice,
    },
});
