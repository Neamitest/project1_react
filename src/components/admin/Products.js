import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../rtk/products-slice";
import Swal from "sweetalert2";
import { FOOD_URL } from "../../utils/constent";
import Cookies from "js-cookie";
import Pagination from "../pagination";
import Search from "../search";
export default function Products() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    const [numPage, setNumPage] = useState(1);
    let dataIsFound = true;

    useEffect(() => {
        dispatch(fetchProducts(numPage));
    }, [numPage]);

    const DeleteProduct = (product) => {
        let token = Cookies.get("token");

        Swal.fire({
            title: ` are you sure to delete ${product.title}`,
            showCancelButton: true,
        }).then((data) => {
            if (data.isConfirmed) {
                fetch(`${FOOD_URL}/${product._id}`, {
                    method: "delete",
                    headers: { Authorization: `Bearar ${token}` },
                }).then((res) => {
                    if (res.status == 401) {
                        Swal.fire({
                            icon: "error",
                            title: "your token is not valid",
                            text: "Something went wrong!",
                        });
                    } else {
                        dispatch(fetchProducts());
                    }
                });
            }
        });
    };

    if (products.data != undefined && products.data.length == 0) {
        dataIsFound = false;
    }

    return (
        <>
            <div className="m-3 flex justify-around">
                <div>
                    <Link
                        to="/dashbord"
                        className="text-white p-2 hover:no-underline rounded-lg bg-blue-500  mx-3 my-2 hover:bg-blue-700 "
                    >
                        <i className="fa-solid fa-arrow-left mr-2"></i>
                        Dashbord
                    </Link>
                    <Link
                        to="/products/create_product"
                        className="text-white rounded-lg bg-blue-500 p-2 hover:no-underline hover:bg-blue-700"
                    >
                        <i className="fa-solid fa-user-plus mr-2"></i>
                        Add Product
                    </Link>
                </div>
                <Search />
            </div>

            <div className="flex justify-center ">
                <table className="w-full mx-4 overflow-x-auto shadow-md  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product tile | count ({" "}
                                <span className=" text-green-500">
                                    {products.data !== undefined &&
                                        products.data.length}{" "}
                                </span>
                                )
                            </th>
                            <th scope="col" className="px-6 py-3">
                                image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.data != undefined &&
                            products.data.map((product, i) => {
                                return (
                                    <tr
                                        key={i}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-700  dark:hover:bg-gray-600"
                                    >
                                        <td className="px-6 py-4">
                                            {product.title}
                                        </td>
                                        <td className="px-6 py-4">
                                            <img
                                                src={product.image}
                                                className=" w-14"
                                                alt="image"
                                            />
                                        </td>
                                        <td className="px-6 py-4">
                                            {product.category}
                                        </td>
                                        <td className="px-6 py-4">
                                            {product.price}$
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <Link
                                                to={`/products/edit_product/${product._id}`}
                                                className="font-medium text-blue-600 dark:text-blue-500 hover:no-underline mx-1"
                                            >
                                                Edit
                                            </Link>
                                            <Link
                                                onClick={() =>
                                                    DeleteProduct(product)
                                                }
                                                className="font-medium text-red-500  hover:no-underline mx-1"
                                            >
                                                Delete
                                            </Link>
                                            <Link
                                                to={`/products/view_product/${product._id}`}
                                                className="font-medium text-green-500  hover:no-underline mx-1"
                                            >
                                                View
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
            {products == "rejected" && (
                <h4 className="m-8 flex justify-center">rejected</h4>
            )}
            {products.data != undefined && products.data.length == 0 && (
                <h4 className="m-8 flex justify-center">not found !</h4>
            )}
            <div className="m-8 flex justify-center">
                <Pagination
                    dataIsFound={dataIsFound}
                    numPage={(page) => {
                        setNumPage(page);
                    }}
                />
            </div>

            {products == "pending" && (
                <div className="text-center mt-14">
                    <div role="status">
                        <svg
                            aria-hidden="true"
                            className="  inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                            />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )}
        </>
    );
}
