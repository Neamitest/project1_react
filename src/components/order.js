import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Swal from "sweetalert2";
import { fetchOrders } from "../rtk/orders-slice";
import {ORDER_URL} from "../utils/constent";
export default function Order({ onhandlerToggle, idOrderProduct }) {
    const idProduct = idOrderProduct;
    

    const firstNameRef = useRef("");
    const lastNameRef = useRef("");
    const emailRef = useRef("");
    const adressRef = useRef("");
    const quantityRef = useRef("");
    const phoneNumberRef = useRef("");
    const [price, setPrice]= useState(0)
    const dispatch = useDispatch()
    const products = useSelector((state)=>state.products)
    let product;
    
    let title;
    if(products.data !== undefined){
         product = products.data.find((element)=>element._id ==idProduct) ;
        
         title = product.title;
    };
    const caculatePrice = (e)=>{
        if(+e.target.value > 0){
            setPrice(+e.target.value  * +product.price);
        }
    }
    const validForm = () => {
        if (!firstNameRef.current.value || !emailRef.current.value || !adressRef.current.value  || !phoneNumberRef.current.value) { 
            return false;
        } else {
            return true;
        }
    };
 
    const orderProduct = () => {
       
        fetch(`${ORDER_URL}`, {
            method: "POST",
            headers: { "content-type": "Application/json" },
            body: JSON.stringify({
                idProduct: idProduct,
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value,
                email: emailRef.current.value,
                adress: adressRef.current.value,
                quantity:quantityRef.current.value,
                phoneNumber:phoneNumberRef.current.value
            }),
        })
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
            .then(() => onhandlerToggle("close"));
    };
    useEffect(() => {
        dispatch(fetchOrders())
        setPrice( +product.price);
    }, []
    );

    return (
        <>
        
            <div className="open_backgound"></div>
            <section className="formOrder">
                <div className="container">
                    <i
                        className="fa-solid fa-xmark icon_close"
                        // send to parent
                        onClick={() => onhandlerToggle("close")}
                    ></i>
                    <h2>Make Your Order Now!</h2>
                    
                    <h4 className="text-center  text-neutral-500">
                    {title}
                    </h4>
                    <h6 className="text-center  ">{price}$</h6>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <input
                                type="text"
                                ref={firstNameRef}
                                placeholder="Your First Name"
                                required="required"
                            />
                            <input
                                type="text"
                                ref={lastNameRef}
                                placeholder="Your last Name"
                                required="required"
                            />
                           
                        </div>
                        <div>
                        <input
                                type="email"
                                placeholder="Your Email Adress"
                                ref={emailRef}
                                required="required"
                            />
                            <input
                                type="text"
                                ref={adressRef}
                                placeholder="Adress"
                                required="required"
                            />
                            <input
                                type="number"
                                placeholder="quantity"
                                ref={quantityRef}
                                onChange={(e)=>{caculatePrice(e)}}
                            />
                            <input
                                type="number"
                                 ref={phoneNumberRef}
                                placeholder="Mobile No"
                                required="required"
                            />

                            <button
                                onClick={() => {
                                    validForm() === true && 
                                    orderProduct();
                                }}
                                className="btn_Order"
                            >
                                Send Message
                                <i className="fa-regular fa-paper-plane"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
