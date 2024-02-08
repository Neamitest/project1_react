
import { Link } from 'react-router-dom';
import '../style/Footer.css';

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
            <li><Link  ><i className="fa-brands fa-facebook"></i></Link></li>
            <li><Link ><i className="fa-brands fa-twitter"></i></Link></li>
            <li><Link ><i className="fa-brands fa-youtube"></i></Link></li>
            <li><Link ><i className="fa-brands fa-dribbble"></i></Link></li>
            <li><Link ><i className="fa-brands fa-linkedin"></i></Link></li>
            <li><Link ><i className="fa-brands fa-instagram"></i></Link></li>
        </ul>
        <p>© 2023. Foodera. All rights reserved.</p>
     
    </div>
   </section>
    </>)
}

export default Footer;