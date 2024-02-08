import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Header from "../components/Header";

import "../style/Home.css";
import img_1 from "../img/1.png";
import img_2 from "../img/2 (1).png";

import imgP1 from "../img/1.jpg";
import imgP2 from "../img/2.jpg";

import { Carousel } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import NumberCounting from "../components/NumberCounting";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/products-slice";
import Order from "../components/order";
import { Link } from "react-router-dom";
import Pagination from "../components/pagination";

function Home() {
    const refFix = useRef();
    const [toggle, setToggle] = useState("");
    const [offset, setOffset] = useState(0);
    const [idOrderProduct, setIdOrderProduct] = useState(0);
    const [numPage, setNumPage] = useState(1);
    const products = useSelector((state) => state.products);
    const darkMode = useSelector((state) => state.darkMode);
    const dispatch = useDispatch();
    let dataIsFound = true;

    useEffect(() => {
        dispatch(fetchProducts(numPage));
        setOffset(window.scrollY);
    }, [numPage]);

    // icon to top

    // document.addEventListener("scroll",function () {
    //     offset >= "750"
    //         ? (refFix.current.style.right = "20px")
    //         : (refFix.current.style.right = "-60px");
    // })

    function scrollToTop() {
        window.scrollTo({ top: 1, behavior: "smooth" });
    }
    const show = () => {
        setToggle("open");
    };
    if (products.data != undefined && products.data.length == 0) {
        dataIsFound = false;
    }

    return (
        <>
            <Header />
            <NumberCounting />

            <div
                ref={refFix}
                className="icon_top"
                onClick={() => {
                    scrollToTop();
                }}
            >
                <i className="fa-solid fa-arrow-up"></i>
            </div>
            <section className="pride">
                <div className="container">
                    <div className="row row_one">
                        <div className="col-md-7 pride_img">
                            <img src={img_1} />
                        </div>
                        <div className="col-md-5">
                            <h2>
                                We pride ourselves on making real food from the
                                best ingredients.
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Etiam et purus a odio finibus
                                bibendum in sit amet leo. Mauris feugiat erat
                                tellus.
                            </p>
                            <button>learn more</button>
                        </div>
                    </div>
                    <div className="row row_two">
                        <div className="col-md-5">
                            <h2>
                                We make everything by hand with the best
                                possible ingredients.
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Etiam et purus a odio finibus
                                bibendum in sit amet leo. Mauris feugiat erat
                                tellus.Far far away, behind the word mountains,
                                far from the countries Vokalia and Consonantia,
                                there live the blind texts.
                            </p>
                            <ul>
                                <li>
                                    {" "}
                                    <i className="fa fa-check"></i> Etiam sed
                                    dolor ac diam volutpat.
                                </li>
                                <li>
                                    {" "}
                                    <i className="fa fa-check"></i> Erat
                                    volutpat aliquet imperdiet
                                </li>
                                <li>
                                    {" "}
                                    <i className="fa fa-check"></i> purus a odio
                                    finibus bibendum.
                                </li>
                            </ul>
                            <button>learn more</button>
                        </div>
                        <div className="col-md-7">
                            <img src={img_2} />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="row row_three">
                    <div className="col-md-12">
                        <h2>
                            When a man's stomach is full it makes no difference
                            whether he is rich or poor.
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam et purus a odio finibus bibendum in sit
                            amet leo. Mauris feugiat erat tellus.
                        </p>
                        <Link className="link">
                            {" "}
                            <i className="fa-solid fa-caret-right"></i>Watch our
                            story
                        </Link>
                    </div>
                </div>
            </section>
            <section id="EOF">
                <div className="container">
                    <div className="row row_Explore">
                        <div>
                            <h2>Explore Our Foods</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Etiam et purus a odio finibus
                                bibendum in sit amet leo. Mauris feugiat erat
                                tellus. Far far away, behind the word mountains,
                                far from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live
                                in Bookmarksgrove.
                            </p>
                        </div>
                    </div>
                    <div className="row row_cards">
                        {products.data != undefined &&
                            products.data.map((product, i) => {
                                return (
                                    <div className="col-md-4" key={i}>
                                        <Card>
                                            <Card.Img
                                                className="img_card"
                                                src={product.image}
                                            />
                                            <Card.Body>
                                                <Card.Title className="title_card">
                                                    {product.title}
                                                </Card.Title>
                                                <Card.Text className="text_card">
                                                    Time: {product.time} Minutes
                                                </Card.Text>
                                                <Card.Text className="descri_card">
                                                    {product.description}
                                                    ...
                                                </Card.Text>
                                                <Card.Text className="price_card">
                                                    ${product.price}
                                                </Card.Text>

                                                <Button
                                                    className="btn_card"
                                                    onClick={() => {
                                                        show();
                                                        setIdOrderProduct(
                                                            product._id
                                                        );
                                                    }}
                                                >
                                                    order now
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                );
                            })}

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
                    </div>
                </div>
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
            </section>
            {/* from order */}
            {toggle == "open" && (
                <Order
                    onhandlerToggle={(value) => {
                        setToggle(value);
                    }}
                    idOrderProduct={idOrderProduct}
                />
            )}

            <section className="testimonials" id="reviews">
                <h2>Testimonials</h2>
                <div className="container">
                    <Carousel>
                        <Carousel.Item>
                            <div className="item">
                                <img src={imgP1} />
                                <p>
                                    " Far far away, behind the word mountains,
                                    far from the countries Vokalia and
                                    Consonantia, there live the blind texts.
                                    Separated they live. "
                                </p>
                                <span className="author">
                                    Simab Dave - Web Designer
                                </span>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="item">
                                <img src={imgP2} />
                                <p>
                                    " Far far away, behind the word mountains,
                                    far from the countries Vokalia and
                                    Consonantia, there live the blind texts. "
                                </p>
                                <span className="author">
                                    Simab Dave - Web Designer
                                </span>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="item">
                                <img src={imgP1} />
                                <p>
                                    " Far far away, behind the word mountains,
                                    far from the countries Vokalia and
                                    Consonantia, there live the blind texts.
                                    Separated they live. "
                                </p>
                                <span className="author">
                                    Simab Dave - Web Designer
                                </span>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>
            <section className="faq" id="faq">
                <div className="container">
                    <h2>Frequently Asked Questions</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <h3>
                                <span>~</span>Is Foodera Bread really baked
                                fresh each day?
                            </h3>
                            <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live
                                in Bookmarksgrove right at the coast of the
                                Semantics, a large language.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h3>
                                <span>~</span>Do you bake breads containing
                                animal fats or products?
                            </h3>
                            <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live
                                in Bookmarksgrove right at the coast of the
                                Semantics, a large language.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h3>
                                <span>~</span>Can I order your products online?
                            </h3>
                            <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live
                                in Bookmarksgrove right at the coast of the
                                Semantics, a large language.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h3>
                                <span>~</span>When are you opening a shop near
                                me?
                            </h3>
                            <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live
                                in Bookmarksgrove right at the coast of the
                                Semantics, a large language.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="parallax">
                <div className="row">
                    <div className="col-md-8">
                        <h2>Baked fresh daily by bakers with passion.</h2>
                    </div>
                    <div className="col-md-4">
                        <button>learn more</button>
                    </div>
                </div>
            </section>
            <section className="subscribe">
                <h2>Hurry up! Subscribe our newsletter and get 25% Off</h2>
                <p>
                    Limited time offer for this month. No credit card required.
                </p>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        id="eml"
                        placeholder="Email Adresse here"
                    />
                    <button>Subscribe</button>
                </form>
            </section>
        </>
    );
}

export default Home;
