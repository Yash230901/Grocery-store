import React from 'react'
import Footer from "./Footer"
import "./CSS/Home.css"
import Milk from "../img/milk.png"
import watermelon from "../img/watermelon.png"
import man from "../img/man.jpg"
import food4 from "../img/food4.jpg"
import food6 from "../img/food6.jpg"
import "./CSS/HomeResponsive.css"
const Home = () => {
    return (
        <>
            <div className="home-first">
                <div className="home-text">
                    <p>100% Healthy & Affordable</p>
                    <h1>Organic vegetables</h1>
                    <p>Small Changes Big Difference</p>
                    <a href="/">Shop Now</a>
                </div>
            </div>
            <div className="home-second">
                <div className="img1">
                    <h3>Veggies</h3>
                    <p>100% Organic Products</p>
                    <a href="/" className="buy-btn">Buy Now</a>
                </div>
                <div className="img2">
                    <h3>Veggies</h3>
                    <p>100% Organic Products</p>
                    <a href="/" className="buy-btn">Buy Now</a>
                </div>
            </div>
            <div className="home-third">
                <h1>Our Products</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, a?</p>
                <div className="home-third-row">
                    <div className="home-third-col">
                        <img src={Milk} alt="" />
                        <h3>MILK</h3>
                    </div>
                    <div className="home-third-col">
                        <img src={Milk} alt="" />
                        <h3>MILK</h3>
                    </div>
                    <div className="home-third-col">
                        <img src={Milk} alt="" />
                        <h3>MILK</h3>
                    </div>
                    <div className="home-third-col">
                        <img src={Milk} alt="" />
                        <h3>MILK</h3>
                    </div>
                    <div className="home-third-col">
                        <img src={Milk} alt="" />
                        <h3>MILK</h3>
                    </div>
                    <div className="home-third-col">
                        <img src={Milk} alt="" />
                        <h3>MILK</h3>
                    </div>
                </div>
            </div>
            <div className="home-fourth">
                <div className="home-fourth-row">
                    <div className="home-fourth-col">
                        <img src={watermelon} alt="" />
                        <h3>Watermelon</h3>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <p>$100</p>
                        <a href="/">Add To Cart</a>
                    </div>
                    <div className="home-fourth-col">
                        <img src={watermelon} alt="" />
                        <h3>Watermelon</h3>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <p>$100</p>
                        <a href="/">Add To Cart</a>
                    </div>
                    <div className="home-fourth-col">
                        <img src={watermelon} alt="" />
                        <h3>Watermelon</h3>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <p>$100</p>
                        <a href="/">Add To Cart</a>
                    </div>
                    <div className="home-fourth-col">
                        <img src={watermelon} alt="" />
                        <h3>Watermelon</h3>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <p>$100</p>
                        <a href="/">Add To Cart</a>
                    </div>
                    <div className="home-fourth-col">
                        <img src={watermelon} alt="" />
                        <h3>Watermelon</h3>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <p>$100</p>
                        <a href="/">Add To Cart</a>
                    </div>
                    <div className="home-fourth-col">
                        <img src={watermelon} alt="" />
                        <h3>Watermelon</h3>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <p>$100</p>
                        <a href="/">Add To Cart</a>
                    </div>
                </div>
                <div className="home-fourth-row">
                    <div className="home-fourth-col">
                        <img src={watermelon} alt="" />
                        <h3>Watermelon</h3>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <p>$100</p>
                        <a href="/">Add To Cart</a>
                    </div>
                    <div className="home-fourth-col">
                        <img src={watermelon} alt="" />
                        <h3>Watermelon</h3>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <p>$100</p>
                        <a href="/">Add To Cart</a>
                    </div>
                    <div className="home-fourth-col">
                        <img src={watermelon} alt="" />
                        <h3>Watermelon</h3>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <p>$100</p>
                        <a href="/">Add To Cart</a>
                    </div>
                    <div className="home-fourth-col">
                        <img src={watermelon} alt="" />
                        <h3>Watermelon</h3>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <p>$100</p>
                        <a href="/">Add To Cart</a>
                    </div>
                    <div className="home-fourth-col">
                        <img src={watermelon} alt="" />
                        <h3>Watermelon</h3>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <p>$100</p>
                        <a href="/">Add To Cart</a>
                    </div>
                    <div className="home-fourth-col">
                        <img src={watermelon} alt="" />
                        <h3>Watermelon</h3>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <p>$100</p>
                        <a href="/">Add To Cart</a>
                    </div>
                </div>
            </div>
            <div className="home-fifth">
                <div className="home-fifth-text">
                    <h1>Special Discount <br />for all grocery products</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Eos voluptatibus ea, id blanditiis et aut perferendis soluta,<br /> magnam porro  similique prae!</p>
                    <a href="/" className="buy-btn">Buy Now</a>
                </div>
            </div>
            <div className="home-sixth">
                <h1>Our Special products</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, molestiae!</p>
                <div className="lines">
                    <div className="line1">
                        <div className="line1-col">
                            <img src={watermelon} alt="" />
                            <div className="material">
                                <h3>Watermelon</h3>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <p>$100</p>
                                <a href="/">Add To Cart</a>
                            </div>
                        </div>
                        <div className="line1-col">
                            <img src={watermelon} alt="" />
                            <div className="material">
                                <h3>Watermelon</h3>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <p>$100</p>
                                <a href="/">Add To Cart</a>
                            </div>
                        </div>
                        <div className="line1-col">
                            <img src={watermelon} alt="" />
                            <div className="material">
                                <h3>Watermelon</h3>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <p>$100</p>
                                <a href="/">Add To Cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="line2">
                        <div className="line2-col">
                            <img src={watermelon} alt="" />
                            <div className="material">
                                <h3>Watermelon</h3>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <p>$100</p>
                                <a href="/">Add To Cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="line3">
                        <div className="line3-col">
                            <img src={watermelon} alt="" />
                            <div className="material">
                                <h3>Watermelon</h3>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <p>$100</p>
                                <a href="/">Add To Cart</a>
                            </div>
                        </div>
                        <div className="line3-col">
                            <img src={watermelon} alt="" />
                            <div className="material">
                                <h3>Watermelon</h3>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <p>$100</p>
                                <a href="/">Add To Cart</a>
                            </div>
                        </div>
                        <div className="line3-col">
                            <img src={watermelon} alt="" />
                            <div className="material">
                                <h3>Watermelon</h3>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <p>$100</p>
                                <a href="/">Add To Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* -----home seventh section---- */}
            <div className="home-seven">
                <h1>Our Clients Say</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sit?</p>
                <div className="client">
                    <img src={man} alt="" />
                    <div className="client-text">
                        <h1>Yash Verma</h1>
                        <h3>Web Designer</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Odit consequuntur laboriosam, soluta inventore fugit <br /> magni quas culpa delectus illum ut. Nobis, reprehenderit et.</p>
                    </div>
                </div>
            </div>

            {/* ----home eight section------ */}
            <div className="home-eight">
                <h1>Our Latest News</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sit?</p>
                <div className="home-eight-lines">
                    <div className="home-eight-line1">
                        <div className="home-eight-line1-col">
                            <img src={food4} alt="" />
                            <h3>Best in quality fresh meat & food</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Explicabo repellat est ipsam sequi recusandae culpa.</p>
                            <a href="/">Read more</a>
                        </div>
                    </div>
                    <div className="home-eight-line2">
                        <div className="home-eight-line2-col">
                            <img src={food4} alt="" />
                            <div className="home-eight-line2-text">
                                <h3>Best in quality fresh meat & food</h3>
                                <p>Lorem, ipsum dolor sit amet <br /> est ipsam sequi recusandae culpa.</p>
                                <a href="/">Read more</a>
                            </div>
                        </div>
                        <div className="home-eight-line2-col">
                            <img src={food4} alt="" />
                            <div className="home-eight-line2-text">
                                <h3>Best in quality fresh meat & food</h3>
                                <p>Lorem, ipsum dolor sit amet <br /> est ipsam sequi recusandae culpa.</p>
                                <a href="/">Read more</a>
                            </div>
                        </div>
                        <div className="home-eight-line2-col">
                            <img src={food4} alt="" />
                            <div className="home-eight-line2-text">
                                <h3>Best in quality fresh meat & food</h3>
                                <p>Lorem, ipsum dolor sit amet <br /> est ipsam sequi recusandae culpa.</p>
                                <a href="/">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ---Home ninth section--- */}
            <div className="home-nine">
                <h1>Subscribe to our news letter</h1>
                <div className="home-nine-search">
                    <input type="text" placeholder="Your email Address" />
                    <a href="/">Read More</a>
                </div>
            </div>

            {/* ----home-ten-section---- */}
            <div className="home-ten">
                <div className="home-ten-row">
                    <div className="home-ten-col">
                        <img src={food6} alt="" />
                    </div>
                    <div className="home-ten-col">
                        <img src={food6} alt="" />
                    </div>
                    <div className="home-ten-col">
                        <img src={food6} alt="" />
                    </div>
                    <div className="home-ten-col">
                        <img src={food6} alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home
