import { useSelector } from "react-redux";
import "../style/Header.css";
import { useEffect, useRef } from "react";

function Header() {
    const darkMode = useSelector((state) => state.darkMode);
    const refHeader = useRef();

    return (
        <header ref={refHeader}>
            <div className="row " id="home">
                <div className="col-md-6 menu">
                    <h2>Good food choices are good investments.</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam et purus a odio finibus bibendum amet leo.
                    </p>
                    <button>
                        order now{" "}
                        <i className="fa-solid fa-basket-shopping"></i>
                    </button>
                    <button>
                        Learn more <i className="fa-solid fa-angle-right"></i>
                    </button>
                </div>
                <div className="col-md-6"></div>
            </div>
        </header>
    );
}

export default Header;
