import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FOOD_URL } from "../../../utils/constent";
import Cookies from "js-cookie";
export default function Edit_products() {
    const navigete = useNavigate();
    const {id} = useParams();


    const [data, setData] = useState({});
    const nameRef = useRef("");
    const cuisineRef = useRef("");
    const imageRef = useRef("");
    const priceRef = useRef("");
    const categoryRef = useRef("");
    const timeRef = useRef("");
    const desriptionRef = useRef("");

    const getData = (id) => {
      
            fetch(`${FOOD_URL}/${id}`)
            .then((res) => res.json())
            .then((res) => {setData(res.data ?? {}); return res})
            .catch((res) => console.log("res=="))

        
    };
    const editData = () => {
        const name = nameRef.current.value ;
        const cuisine = cuisineRef.current.value;
        const image = imageRef.current.value;
        const price = priceRef.current.value;
        const category = categoryRef.current.value;
        const description = desriptionRef.current.value;
        const time = timeRef.current.value;

        let token = Cookies.get("token");
        console.log("token edit ",token);
        fetch(`${FOOD_URL}/${id}`, {
            method: "PUT",
            headers: { "content-type": "Application/json",
            "Authorization" : `Bearar ${token}` 
        },
            body: JSON.stringify({
                name,
                price,
                description,
                category,
                image,
                cuisine,
                time,
            }),
        })
        // .then(() => navigete("/products"));
    };
    useEffect(() => {
        getData(id);
    }, []);

    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                        Edit product
                    </h2>
                    <form>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Type product name"
                                    required=""
                                    ref={nameRef}
                                    defaultValue={data.title}
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Cuisine
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Type cuisine"
                                    required=""
                                    ref={cuisineRef}
                                    defaultValue={data?.cuisine}
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="brand"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Image
                                </label>
                                <input
                                    type="text"
                                    name="brand"
                                    id="brand"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Product image"
                                    required=""
                                    ref={imageRef}
                                    defaultValue={data?.image}
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="price"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Price
                                </label>
                                <input
                                    type="number"
                                    name="price"
                                    id="price"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="$2999"
                                    required=""
                                    ref={priceRef}
                                    defaultValue={data?.price}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="category"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Category
                                </label>
                                <select
                                    id="category"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    ref={categoryRef}
                                    aria-selected={data?.category}
                                >
                                    <option value="Hamburger">Hamburger</option>
                                    <option value="Tajine">Tajine</option>
                                </select>
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
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    rows="8"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Your description here"
                                    ref={desriptionRef}
                                    defaultValue={data?.description}
                                ></textarea>
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
                            Edit product
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}
