import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { FOOD_URL } from "../../../utils/constent";

export default function View_products() {
    const { id } = useParams();
    const [products, setProducts] = useState();
    const navigete = useNavigate();

    useEffect(() => {
        fetch(`${FOOD_URL}/${id}`)
            .then((res) => res.json())
            .then((data) => setProducts(data.data));
    }, []);
    return (
        <>
            <button
                onClick={() => navigete("/products")}
                className=" bg-blue-700 px-6 py-1 m-5 rounded-sm"
            >
                <i className="fa-solid fa-arrow-left text-white"></i>
            </button>
            {products && (
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto   ">
                    <img className="rounded-t-lg" src={products.image} alt="" />

                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {products.title}
                        </h5>
                        <p className=" text-lg text-sky-700 font-bold">
                            Category | {products.category}{" "}
                        </p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {products.description}
                        </p>
                        <p className="inline-flex items-center px-3 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            {products.time} min
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
