import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ORDER_URL } from "../../utils/constent";
export default function Edit_orders() {
    const navigete = useNavigate();
    const {id} = useParams();


    const [data, setData] = useState({});
    const firstNameRef = useRef("");
    const lastNameRef = useRef("");
    const emailRef = useRef("");
    const adressRef = useRef("");
    const quantityRef = useRef("");
    const timeRef = useRef("");
    const phoneNumberRef = useRef("");
 
    const getData = (id) => {
      
            fetch(`${ORDER_URL}/${id}`)
            .then((res) => res.json())
            .then((res) => { setData(res.data ?? {})})

    };
    const editData = () => {
        const firstName = firstNameRef.current.value ;
        const lastName = lastNameRef.current.value;
        const email = emailRef.current.value;
        const adress = adressRef.current.value;
        const quantity = quantityRef.current.value;
        const phoneNumber = phoneNumberRef.current.value;
        const time = timeRef.current.value;
         

        fetch(`${ORDER_URL}/${id}`, {
            method: "PUT",
            headers: { "content-type": "Application/json" },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                adress,
                quantity,
                phoneNumber,
                time,
            }),
        }).then(() => {navigete("/admin/orders")});
    };
    useEffect(() => {
        getData(id);
    }, []);

    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                        Edit order
                    </h2>
                    <form>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="first Name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="First Name"
                                    required=""
                                    ref={firstNameRef}
                                    defaultValue={data.firstName}
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="last Name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Last Name"
                                    required=""
                                    ref={lastNameRef}
                                    defaultValue={data?.lastName}
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="brand"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Email
                                </label>
                                <input
                                    type="text"
                                    name="brand"
                                    id="brand"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Email"
                                    required=""
                                    ref={emailRef}
                                    defaultValue={data?.email}
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="price"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    phone Number
                                </label>
                                <input
                                    type="number"
                                    
                                    id="price"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="$2999"
                                    required=""
                                    ref={phoneNumberRef}
                                    defaultValue={data?.phoneNumber}
                                />
                            </div>
                            <div>
                                <label
                                   
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Adress
                                </label>
                                <input
                                type="text"
                                   
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    ref={adressRef}
                                    defaultValue={data?.adress}
                                >
                                    
                                </input>
                            </div>
                            <div>
                                <label
                                    htmlFor="item-weight"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Time (min)
                                </label>
                                <input
                                    type="number"
                                    name="item-weight"
                                    id="item-weight"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="12"
                                    required=""
                                    ref={timeRef}
                                    defaultValue={data?.time}
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="description"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    quantity
                                </label>
                                <input
                                    
                                    type="number"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Your quantity"
                                    ref={quantityRef}
                                    defaultValue={data?.quantity}
                                ></input>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                            onClick={(e) => {
                                editData();
                                e.preventDefault();
                            }}
                        >
                            Edit order
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}
