import { Outlet, Route, Routes } from "react-router";
import Footer from "./components/Footer.js";
import NavBar from "./components/navbar.js";
import Home from "./home/Home.js";
import Dashbord from "./components/admin/Dashbord.js";
import Products from "./components/admin/Products.js";
import NotFound from "./components/notFound.js";

import Edit_products from "./components/admin/cruds-products/edit_products.js";
import Create_products from "./components/admin/cruds-products/create_products.js";
import View_products from "./components/admin/cruds-products/view_products.js";
import Orders from "./components/admin/orders.js";
import Edit_orders from "./components/admin/edit_order.js";
import Register from "./components/admin/user/register.js";
import Login from "./components/admin/user/login.js";
import Profile from "./components/admin/user/profile.js";
import Cookies from "js-cookie";
import About from "./components/about.js";
import FAQ from "./components/FAQ.js";

function App() {
    // if(window.navigator.onLine){
    //     console.log("online");
    // }else{
    //     console.log("offline");
    // }
    const role = Cookies.get("role");
    console.log(role);
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <NavBar/>
                            <Home/>
                            <Footer/>
                        </>
                    }
                />

                <Route path="/home/about" element={<About/>} />
                <Route path="/home/faq" element={<FAQ/>} />
                <Route path="/home/register" element={<Register />} />
                <Route path="/home/login" element={<Login />} />
                <Route path="/home/profile" element={role ? <Profile /> : <NotFound />} />

                <Route
                    path="/admin"
                    element={role == "ADMIN" ? <Dashbord /> : <NotFound />}
                />
                <Route
                    path="/dashbord"
                    element={role == "ADMIN" ? <Dashbord /> : <NotFound />}
                />

                <Route path="*" element={<NotFound />} />
                <Route
                    path="/admin/orders"
                    element={role == "ADMIN" ? <Orders /> : <NotFound />}
                />
                <Route
                    path="/admin/orders/:id"
                    element={role == "ADMIN" ? <Edit_orders /> : <NotFound />}
                />

                {/* cruds prodact */}
                <Route path="/products" element={<Outlet />}>
                    <Route
                        path="/products"
                        element={role == "ADMIN" ? <Products /> : <NotFound />}
                    />
                    <Route
                        path="edit_product/:id"
                        element={
                            role == "ADMIN" ? <Edit_products /> : <NotFound />
                        }
                    />
                    <Route
                        path="create_product"
                        element={
                            role == "ADMIN" ? <Create_products /> : <NotFound />
                        }
                    />
                    <Route
                        path="view_product/:id"
                        element={<View_products />}
                    />
                </Route>
            </Routes>
        </>
    );
}

export default App;
