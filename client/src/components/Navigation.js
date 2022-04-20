import React, { useState, useEffect } from "react";
import '../App.css';
import logoImg from '../images/logo.gif';

const Navigation = (props) => {
    return (
        // ---------- Start of Navigation ---------- // 
       <section className="section nav-section fixed-top facebook-light-gray-color">
            <nav className="navbar navbar-expand-lg horizontal-navigation navbar-light facebook-light-gray-color">
                    <a className="navbar-brand logo-link me-3 ms-3" href="#">
                    <img className="responsive-img logo-img" src={logoImg} alt="img" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="d-flex justify-content-between w-100 navigation-box">
                        <div>
                            <form className="d-flex">
                                <input className="form-control search-textbox" type="search" placeholder="Search" aria-label="Search"/>
                                {/* <button className="btn btn-outline-primary" type="submit">Search</button> */}
                            </form>
                        </div>
                        <div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                                <li className="nav-item">
                                    <span className="material-icons home-icon">home</span>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mobile-nav-link" aria-current="page" href="#">Akshay</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mobile-nav-link" aria-current="page" href="#">Friends</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mobile-nav-link" aria-current="page" href="#">Videos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mobile-nav-link" aria-current="page" href="/memories">Memories</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mobile-nav-link" aria-current="page" href="/news">News</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mobile-nav-link" aria-current="page" href="/weather">Weather</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button className="btn btn-outline-primary me-3 ms-3" type="submit">Logout</button>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="nav flex-column vertical-navigation facebook-light-gray-color">
                <a className="nav-link" href="/"><aside className="material-icons nav-icons">account_circle</aside><span>Akshay</span></a>
                <a className="nav-link" href="/"><aside className="material-icons nav-icons">people_alt</aside><span>Friends</span></a>
                <a className="nav-link" href="/videos"><aside className="material-icons nav-icons">ondemand_video</aside><span>Videos</span></a>
                <a className="nav-link" href="/memories"><aside className="material-icons nav-icons">history</aside><span>Memories</span></a>
                <a className="nav-link" href="/news"><aside className="material-icons nav-icons">newspaper</aside><span>News</span></a>
                <a className="nav-link" href="/weather"><aside className="material-icons nav-icons">wb_sunny</aside><span>Weather</span></a>
            </nav>
       </section>
        // ---------- End of Navigation ---------- // 
    );
};

export default Navigation;