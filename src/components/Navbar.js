import React from 'react'
import Home from './Home'
import "./CSS/Navbar.css"
import "./CSS/all.css"
import "./CSS/NavResponsive.css"
import logo from "../img/logo.png"
const Navbar = () => {
    return (
        <>
            <div className="header">
                <section className="first">
                    <div className="phone">
                        <i class="fas fa-phone"></i>
                        <p>273435|</p>
                        <i class="far fa-envelope"></i>
                        <p>info@somedomain.com</p>
                    </div>
                    <div className="social">
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-google"></i>
                        <i class="fab fa-instagram"></i>
                        <p>|USD</p>
                        <i class="fas fa-chevron-down"></i>

                    </div>
                </section>
                <section className="second">
                    <div className="logo-section">
                        <img src={logo} alt="logo" />
                        <div className="text">
                            <h4>GROCA</h4>
                            <p>GROCERY MART</p>
                        </div>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Shop</a></li>
                            <li><a href="/">Best Sellers</a></li>
                            <li><a href="/">Deal of the day</a></li>
                            <li><a href="/">Pages</a></li>
                            <li><a href="/">Contact Us</a></li>
                            <div className="icons">
                                <i class="far fa-heart"></i>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-user"></i>
                            </div>
                        </ul>
                    </nav>
                </section>
                <div className="search-section">
                    <button className="btn1"> <i class="fas fa-bars"></i>    All Departments    <i class="fas fa-chevron-down"></i></button>
                    <input type="text" className="input" placeholder="search here" />
                    <button className="btn2">Search</button>
                </div>
            </div>
            <Home />
        </>
    )
}

export default Navbar
