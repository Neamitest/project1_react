import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';
import logo from './../../img/logo.png';
 
function Navs(){

    return(
        
        <>
        <Navbar  expand="lg"  className="bg-body-tertiary ">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} className='NavLogo'  title='Logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">    
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About as</Nav.Link>
                    <Nav.Link href="#home">Explore Foods</Nav.Link>
                    <Nav.Link href="#link">Reviews</Nav.Link>
                    <Nav.Link href="#link">FAQ</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link id='lastnav' >0641522895</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
         
        </>
    )
}

export default Navs;