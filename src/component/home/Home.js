
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from "./Header";
import './Home.css';
import img_1 from "./../../img/1.png";
import img_2 from "./../../img/2 (1).png";
import img_card1 from "../../img/img_card1.jpg";
import img_card2 from "../../img/img_card2.jpg";
import img_card3 from "../../img/img_card3.jpg";
import imgP1 from '../../img/1.jpg';
import imgP2 from '../../img/2.jpg';

import { Carousel } from 'react-bootstrap';
import Footer from './Footer';

function Home(){
    

    return(
        <>
       <Header/>
       <section className="numbers">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h2>1287+</h2>
                    <h5>SAVINGS</h5>
                </div>
                <div className="col-md-3">
                    <h2>5786+</h2>
                    <h5>PHOTOS</h5>
                </div>
                <div className="col-md-3">
                    <h2>1467+</h2>
                    <h5>ROCKETS</h5>
                </div>
                <div className="col-md-3">
                    <h2>1247+</h2>
                    <h5>GLOBES</h5>
                </div>
            </div>
        </div>
       </section>
       <section className="pride">
            <div className="container">
                <div className="row row_one">
                    <div className="col-md-7 pride_img">
                        <img src={img_1} />
                    </div>
                    <div className="col-md-5">
                        <h2 >We pride ourselves on making real food from the best ingredients.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a 
                            odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <button>learn more</button>
                    </div>
                </div>
                <div className="row row_two">
                    <div className="col-md-5">
                        <h2>
                        We make everything by hand with the best possible ingredients.
                        </h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a
                         odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, 
                         behind the word mountains, far from
                         the countries Vokalia and Consonantia, there live the blind texts.
                        </p>
                        <ul>
                            <li> <i className="fa fa-check"></i> Etiam sed dolor ac diam volutpat.</li>
                            <li>  <i className="fa fa-check"></i> Erat volutpat aliquet imperdiet</li>
                            <li>  <i className="fa fa-check"></i> purus a odio finibus bibendum.</li>
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
                    <div  className="col-md-12">
                        <h2>
                        When a man's stomach is full it makes no difference whether he is rich or poor.
                        </h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
                        finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                        </p>
                        <a className="link" > <i className="fa-solid fa-caret-right"></i>Watch our story</a>
                    </div>

                </div>
       </section>
       <section>
        <div className="container">
            <div className="row row_Explore">
                <div>
                    <h2>
                    Explore Our Foods
                    </h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit 
                    amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
                    </p>
                </div>
            </div>
            <div className="row row_cards">
                <div className="col-md-4">
                    <Card className='card'>
                    <Card.Img className='img_card' src={img_card1} />
                    <Card.Body>
                        <Card.Title className='title_card'>Rainbow Vegetable Sandwich</Card.Title>
                        <Card.Text>
                        Time: 15 - 20 Minutes | Serves: 1
                        </Card.Text>
                        <Card.Text className='price_card'>
                        $10.50 <span>$11.70</span>
                        </Card.Text>
                         
                        <Button className='btn_card'>order now</Button>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card  >
                    <Card.Img className='img_card'   src={img_card2} />
                    <Card.Body>
                        <Card.Title className='title_card'>Vegetarian Burger</Card.Title>
                        <Card.Text className='text_card'>
                        Time: 30 - 45 Minutes | Serves: 1
                        </Card.Text>
                        <Card.Text className='price_card'>
                        $10.50 <span>$11.70</span>
                        </Card.Text>
                    
                        <Button  className='btn_card'>order now</Button>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card  >
                    <Card.Img  className='img_card'  src={img_card3} />
                    <Card.Body>
                        <Card.Title className='title_card'>Raspberry Stuffed French Toast</Card.Title>
                        <Card.Text>
                        Time: 10 - 15 Minutes | Serves: 1
                        </Card.Text>
                        <Card.Text className='price_card'>
                        $10.50 <span>$11.70</span>
                        </Card.Text>
                        
                        <Button className='btn_card'>order now</Button>
                    </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
       </section>
       <section className='testimonials'>
        <h2>Testimonials</h2>
        <div className='container'>
                <Carousel>
            <Carousel.Item  >
                <div className='item'>
                <img src={imgP1} />
                    <p>" Far far away, behind the word mountains, far from the countries 
                        Vokalia and Consonantia, there live the blind texts. Separated they live. "</p>
                        <span className="author">Simab Dave - Web Designer</span>
                </div>
            </Carousel.Item>
            <Carousel.Item >
            <div className='item'>
                <img src={imgP2} />
            <p>" Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. "</p>
                        <span className="author">Simab Dave - Web Designer</span>
                </div>
                 
            </Carousel.Item>
            <Carousel.Item>
               <div className='item'>
               <img src={imgP1} />
               <p>" Far far away, behind the word mountains, far from the countries 
                        Vokalia and Consonantia, there live the blind texts. Separated they live. "</p>
                        <span className="author">Simab Dave - Web Designer</span>
                </div>
            </Carousel.Item>
            </Carousel>
        </div>
       </section>
       <section className='faq'>
        <div className='container'>
            <h2>Frequently Asked Questions</h2>
            <div  className='row'>
                <div className='col-md-6'>
                    <h3><span>~</span>Is Foodera Bread really baked fresh each day?</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. 
                        Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                </div>
                <div className='col-md-6'>
                    <h3><span>~</span>Do you bake breads containing animal fats or products?</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. 
                        Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                </div>
                <div className='col-md-6'>
                    <h3><span>~</span>Can I order your products online?</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. 
                        Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                </div>
                <div className='col-md-6'>
                    <h3><span>~</span>When are you opening a shop near me?</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. 
                        Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                </div>
            </div>
        </div>
       </section>
        <section className='parallax' >
                <div className='row'>
                    <div className='col-md-8'>
                        <h2>Baked fresh daily by bakers with passion.</h2>
                    </div>
                    <div className='col-md-4'>
                        <button>learn more</button></div>
                    </div>   
        </section>
        <section className='subscribe'>
            <h2>Hurry up! Subscribe our newsletter and get 25% Off</h2>
            <p>Limited time offer for this month. No credit card required.</p>
            <form onSubmit={(e)=>e.preventDefault()}>
                <input type='email' id='eml'  placeholder='Email Adresse here'/>
                <button>Subscribe</button>
            </form>
        </section>
         <Footer/>
        </>
    )
}

export default Home;