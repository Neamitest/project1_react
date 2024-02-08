import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../style/navbar.css";
import logo from "../img/logo.png";
import { useRef } from "react";
import { Link } from "react-router-dom";
import DarkMode from "./darkmode";
import Cookies from "js-cookie";
function NavBar() {
    const home = useRef();
    const About = useRef();
    const Explore = useRef();
    const Reviews = useRef();
    const FAQ = useRef();
    const role = Cookies.get("role")

    const moveDown = (ref) => {
        ref.current.scrollIntoView();
    };

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary ">
                <Container>
                    <Navbar.Brand  >
                        <img src={logo} className="NavLogo" title="Logo" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto links">
                            <Link to="#">Home</Link>
                            <Link to="/home/about">About as</Link>
                            <Link to="#">Explore Foods</Link>
                            { role == "ADMIN" &&<Link to="/admin">Adination</Link>}
                            <Link to="#">Reviews</Link>
                            <Link to="/home/faq">FAQ</Link>
                        </Nav>

                        {/* style component DarkMode on file navbar.js  */}
                        <DarkMode />
                        <Link to="/home/login" id="btnLogin" title="Login">
                            <i className="fa-solid fa-user"></i>
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
