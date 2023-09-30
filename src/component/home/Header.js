import './Header.css';

function Header(){

    return(
        <header >
            <div className='row'>
                <div className="col-md-6 menu" >
                    <h2>Good food choices are good investments.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Etiam et purus a odio finibus bibendum amet leo.</p>
                    <button>order now <i className="fa-solid fa-basket-shopping"></i></button>
                    <button>Learn more <i className="fa-solid fa-angle-right"></i></button>
                </div>
                <div className="col-md-6" >
                </div>
            </div>

        </header>
    )
}

export default Header;