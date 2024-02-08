import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { fetchOrders } from "../../rtk/orders-slice";
import { ORDER_URL } from "../../utils/constent";
import Pagination from "../pagination";
import Search from "../search";

export default function Orders() {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orders);
    const [numPage, setNumPage] = useState(1);
    let dataIsFound = true;
    useEffect(() => {
        dispatch(fetchOrders(numPage));
    }, [numPage]);

    const handleCheked = (e, id) => {
        let confirmOrder;
        if (e) {
            confirmOrder = false;
        } else {
            confirmOrder = true;
        }
        fetch(`${ORDER_URL}/${id}`, {
            method: "PUT",
            headers: { "content-type": "Application/json" },
            body: JSON.stringify({
                confirmOrder,
            }),
        });
    };
    const deleteOrder = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${ORDER_URL}/${id}`, { method: "delete" }).then(() => {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                    });
                    dispatch(fetchOrders());
                });
            }
        });
    };
    if (orders.data !== undefined && orders.data.length == 0) {
        dataIsFound = false;
        console.log(orders.data.length);
    }
    return (
        <>
            <div className="m-6">
                <Link
                    to="/dashbord"
                    className="text-white p-2 hover:no-underline rounded-lg bg-blue-500   m-6 hover:bg-blue-700 "
                >
                    <i className="fa-solid fa-arrow-left mr-2"></i>
                    Dashbord
                </Link>
               
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                user name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Adress
                            </th>
                            <th scope="col" className="px-6 py-3">
                                date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                time
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Count
                            </th>

                            <th scope="col" className="px-6 py-3">
                                telephone
                            </th>
                            <th scope="col" className="px-6 py-3">
                                confirmation
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.data !== undefined &&
                            orders.data.length > 0 &&
                            orders.data.map((order) => {
                                const date = new Date(
                                    order.date
                                ).toLocaleString();

                                return (
                                    <tr
                                        key={order._id}
                                        className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                                    >
                                        <td className="px-6  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {order.firstName} {order.lastName}
                                        </td>
                                        <td className=" px-5">{order.email}</td>
                                        <td className="px-6  ">
                                            {order.adress}
                                        </td>
                                        <td className="px-6 ">{date}</td>
                                        <td className="px-6  ">{order.time}</td>
                                        <td className="px-6  ">
                                            {order.quantity}
                                        </td>

                                        <td className="px-6   ">
                                            {order.phoneNumber}
                                        </td>
                                        <td className=" text-center w-8">
                                            <input
                                                className="m-2 cursor-pointer"
                                                onClick={(e) => {
                                                    handleCheked(
                                                        order.confirmOrder,
                                                        order._id
                                                    );
                                                }}
                                                type="checkbox"
                                                defaultChecked={
                                                    order.confirmOrder
                                                }
                                            />
                                            <i
                                                className="fa-solid fa-trash m-3 t text-base text-red-500 cursor-pointer"
                                                onClick={() =>
                                                    deleteOrder(order._id)
                                                }
                                            ></i>
                                            <Link
                                                to={`/admin/orders/${order._id}`}
                                            >
                                                <i className="fa-solid fa-pen-to-square text-base text-teal-500 cursor-pointer"></i>
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
                {orders.data != undefined && orders.data.length == 0 && (
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
            </div>
        </>
    );
}
