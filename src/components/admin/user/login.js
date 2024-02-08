import React, { useEffect, useRef, useState } from "react";
import icon_google from "../../../img/google.png";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function Login() {
    const refEmail = useRef();
    const refPsw = useRef();
    const token = "token";
    const navigate = useNavigate();
    const [successful, setSuccessful] = useState(false);
    console.log(successful);
    const getVAlue = () => {
        return {
            email: refEmail.current.value,
            password: refPsw.current.value,
        };
    };
    const AddUser = () => {
        fetch("http://localhost:5000/api/users/login", {
            method: "POST",
            headers: { "content-type": "Application/json" },
            body: JSON.stringify({
                email: getVAlue().email,
                password: getVAlue().password,
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.data !== null) {
                    Cookies.set(token, res.data?.token);
                    Cookies.set("role", res.data?.role);
                    setSuccessful(true);
                }
            });
    };
    const handleForm = (e) => {
        e.preventDefault();
        AddUser();
    };
    // Cookies.remove("token")
    if (successful === true) {
        Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
        }).then(() => navigate("/"));
    }
    return (
        <>
            {successful === false && (
                <div
                    style={{
                        boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    }}
                    className=" mt-5 px-5 py-4 w-2/4 rounded-xl mx-auto "
                >
                    <form className="max-w-md mx-auto" onSubmit={handleForm}>
                        <div className=" flex justify-between">
                            <h1 className="text-xl md:text-2xl font-bold leading-tight mb-5 ">
                                Log in to your account
                            </h1>
                            <Link to="/">
                                <i className="fa-solid fa-xmark   text-3xl cursor-pointer text-gray-500"></i>
                            </Link>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="email"
                                name="floating_email"
                                id="floating_email"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-t-0 border-x-0  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                                ref={refEmail}
                            />
                            <label
                                htmlFor="floating_email"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Email address
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-3 group">
                            <input
                                type="password"
                                name="floating_password"
                                id="floating_password"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-x-0  border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                                ref={refPsw}
                            />
                            <label
                                htmlFor="floating_password"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Password
                            </label>
                        </div>
                        <div className="text-right ">
                            <a
                                href="#"
                                className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                            >
                                Forgot Password?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
                        >
                            Log In
                        </button>
                        <hr className="my-6 border-gray-300 w-full"></hr>
                        <button
                            type="button"
                            className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
                        >
                            <div className="flex items-center justify-center">
                                <img src={icon_google} />
                                <span className="ml-4">Log in with Google</span>
                            </div>
                        </button>
                        <p className="mt-8">
                            Need an account?{" "}
                            <Link
                                to="/home/register"
                                className="text-blue-500 hover:text-blue-700 font-semibold"
                            >
                                Create an account
                            </Link>
                        </p>
                    </form>
                </div>
            )}
        </>
    );
}
