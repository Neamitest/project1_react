
import './Footer.css';

function Footer(){

    return(<>
   <section className='footer'>
    <div className='container'>
        
        <ul className='listLink'>
            <li>register</li>
            <li>forum</li>
            <li>affiliate</li>
            <li>FAQ</li>
        </ul>
        <ul className='listIcon'>
            <li><a href="#" ><i className="fa-brands fa-facebook"></i></a></li>
            <li><a href="#" ><i className="fa-brands fa-twitter"></i></a></li>
            <li><a href="#" ><i className="fa-brands fa-youtube"></i></a></li>
            <li><a href="#" ><i className="fa-brands fa-dribbble"></i></a></li>
            <li><a href="#" ><i className="fa-brands fa-linkedin"></i></a></li>
            <li><a href="#" ><i className="fa-brands fa-instagram"></i></a></li>
        </ul>
        <p>© 2023. Foodera. All rights reserved.</p>
     
    </div>
   </section>
    </>)
}

export default Footer;