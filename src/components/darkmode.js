import { useDispatch, useSelector } from "react-redux";
import "../style/navbar.css";
import { dark, white } from "../rtk/darkMode-slice";
export default function DarkMode() {
    const dispatch = useDispatch();

    if (localStorage.getItem("mode") == "dark") {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
        dispatch(white());
    }
    // document.body.classList.remove("token");

    const checkMode = () => {
        if (localStorage.getItem("mode") !== null) {
            if (localStorage.getItem("mode") == "dark") {
                // console.log("white");
                localStorage.setItem("mode", "white");
                document.body.classList.remove("dark");
                dispatch(white());

                console.log(localStorage);
            } else if (localStorage.getItem("mode") == "white") {
                // console.log("dark");
                localStorage.setItem("mode", "dark");
                // console.log(localStorage);
                document.body.classList.add("dark");
                dispatch(dark());
            }
        } else {
            localStorage.setItem("mode", "dark");
            // console.log(localStorage);
            document.body.classList.add("dark");
            dispatch(dark());
        }
    };
    return (
        <>
            <button title="toggle light/dark mode" onClick={checkMode}>
                <i className="fa-solid fa-circle-half-stroke iconMode"></i>
            </button>
        </>
    );
}
