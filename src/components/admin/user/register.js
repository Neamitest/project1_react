import { useRef, useState } from "react";
import { USER_URL } from "../../../utils/constent";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Register() {
    const [data, setData] = useState({});
    const [successful, setSuccessful] = useState(false);
    const refFistName = useRef();
    const refLastName = useRef();
    const refEmail = useRef();
    const refPsw = useRef();
    const refConfPsw = useRef();
    const refPhoneNumber = useRef();
    const navigate = useNavigate();
    const token = "token";

    const getVAlue = () => {
        return {
            fistName: refFistName.current.value,
            lastName: refLastName.current.value,
            email: refEmail.current.value,
            password: refPsw.current.value,
            confirmPassword: refConfPsw.current.value,
            phoneNumber: refPhoneNumber.current.value,
        };
    };
    const AddUser = () => {
        let password;
        if (getVAlue().password == getVAlue().confirmPassword) {
            password = getVAlue().password;
            
        } else {
            console.log("password invalid !");
        }

        fetch("http://localhost:5000/api/users/register", {
            method: "POST",
            headers: { "content-type": "Application/json" },
            body: JSON.stringify({
                fistName: getVAlue().fistName,
                lastName: getVAlue().lastName,
                email: getVAlue().email,
                password,
                phoneNumber: getVAlue().phoneNumber,
            }),
        })
             
            .then((res) => {
                
                if (res.data !== null) {
                    Cookies.set(token, res.data?.user.token);
                    Cookies.set("role", res.data?.role);
                    setSuccessful(true);
                     
                }
            });
    };
    if (successful === true) {
        Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
        }).then(()=> navigate("/"))}
    const handleForm = (e) => {
        e.preventDefault();
        AddUser();
        
         
    };
    // Cookies.remove(token)
    return (
        <>
            {successful === false && (
                <div
                    style={{
                        boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    }}
                    className=" my-5 p-3 w-2/4 rounded-xl mx-auto "
                >
                    <form className="max-w-md mx-auto" onSubmit={handleForm}>
                        <div className=" flex justify-between">
                            <h1 className="text-xl md:text-2xl font-bold leading-tight mb-4 ">
                                Sign up
                            </h1>
                            <Link to="/">
                                <i className="fa-solid fa-xmark mr-4 text-3xl cursor-pointer text-gray-500"></i>
                            </Link>
                        </div>
                        <p className=" text-right text-sm">
                            Already have an account?{" "}
                            <Link
                                to="/home/login"
                                className="text-blue-500 hover:text-blue-700 font-semibold"
                            >
                                log in
                            </Link>
                        </p>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5">
                                <input
                                    type="text"
                                    name="floating_first_name"
                                    id="floating_first_name"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-x-0  border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    ref={refFistName}
                                />
                                <label
                                    htmlFor="floating_first_name"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    First name
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="floating_last_name"
                                    id="floating_last_name"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-x-0  border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    ref={refLastName}
                                />
                                <label
                                    htmlFor="floating_last_name"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Last name
                                </label>
                            </div>
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
                        <div className="relative z-0 w-full mb-5 group">
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
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="password"
                                name="repeat_password"
                                id="floating_repeat_password"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-x-0  border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                                ref={refConfPsw}
                            />
                            <label
                                htmlFor="floating_repeat_password"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Confirm password
                            </label>
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="tel"
                                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                name="floating_phone"
                                id="floating_phone"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-x-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                                ref={refPhoneNumber}
                            />
                            <label
                                htmlFor="floating_phone"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Phone number (123-456-7890)
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                        px-4 py-3 mt-6"
                            
                        >
                            sign up
                        </button>
                    </form>
                </div>
             )}
        </>
    );
}
