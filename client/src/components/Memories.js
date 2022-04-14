import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Navigation from "./Navigation";
import '../App.css';
import logoImg from '../images/logo.gif';
import $, { event } from 'jquery';
import { Modal } from 'bootstrap';

const Memories = (props) => {

    const openComments = param => event => {
        let a = "";
           if(event.target.tagName == "SPAN"){
                a = event.target.parentNode.parentNode.parentNode.nextElementSibling;
           }
            a.style.display = 'block';
            window.setTimeout(function(){
                a.style.opacity = 1;
                a.style.transform = 'scale(1)';
            },0);
      };

    return (
        // ---------- Start of Posts ---------- // 
        <> 
        <Navigation></Navigation>  
        <section className="section posts-section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="read-post-section mb-5">
                        <div className="card-header memories-card-heading border-0"><strong>1 Week Ago</strong></div>
                            <div className="card post-card align-self-center mb-3">
                                <div className="post-row">
                                    <div className="left-header-box">
                                        <div className="p-2 p-lg-3 pb-0 pb-lg-0 text-center">
                                            <aside className="material-icons messanger-dark-color post-icon">account_circle</aside>
                                        </div>
                                    </div>
                                    <div className="right-header-box d-flex align-items-center">
                                        <div className="p-2 p-lg-3 pb-0 pb-lg-0 ps-lg-0">
                                            <strong>
                                                <p className="post-heading mobile-text-center">Akshay Sahasrabuddhe</p>
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                                <hr className="m-0 mb-2"></hr>
                                <div className="post-row flex-column">
                                    <p className="post-heading ps-4 pe-4">Nostrud nulla voluptate et qui veniam eiusmod cillum cupidatat. Voluptate proident tempor in enim consequat ut cillum duis irure duis deserunt sunt reprehenderit. Sunt ad ut ullamco fugiat ullamco cillum voluptate deserunt laborum adipisicing laborum labore. In labore commodo amet duis laboris nostrud sunt quis ex excepteur dolore non in tempor.</p>
                                    <img className="img-fluid" src={logoImg} alt="post image" />
                                </div>
                                <hr className="m-0 mb-2"></hr>
                                <div className="post-row flex-row justify-content-between me-3 ms-3">
                                    <div className="d-flex flex-row">
                                        <span className="material-icons-outlined messanger-dark-color me-2">thumb_up</span>
                                        <p className="text-secondary">100</p>
                                    </div>
                                    <div className="d-flex flex-row">
                                    <a className="memories-comments-button" type="button" onClick={(e) => openComments(1)(e)} >
                                        <span className="text-secondary me-2">1</span>
                                        <span className="text-secondary">comments</span>
                                    </a>
                                    </div>
                                </div>
                                
                                
                                <div className="comments-box">
                                <hr className="m-0"></hr>
                                    <div className="post-row">
                                        <div className="left-header-box align-self-center">
                                            <div className="p-2 p-lg-3 pb-0 pb-lg-0 text-center">
                                                <aside className="material-icons messanger-dark-color post-icon">account_circle</aside>
                                            </div>
                                        </div>
                                        <div className="right-header-box flex-grow-1">
                                            <div className="p-2 p-lg-3 ps-lg-0 w-100">
                                            <div className="card facebook-light-gray-color p-3 border-25">
                                            <p className="card-title"><strong>Eiusmod magna</strong></p>
                                            <p className="card-subtitle">excepteur laboris ea in officia anim elit officia reprehenderit aute</p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        </div>
                        <div className="read-post-section mb-5">
                        <div className="card-header memories-card-heading border-0"><strong>2 Weeks Ago</strong></div>
                            <div className="card post-card align-self-center mb-3">
                                <div className="post-row">
                                    <div className="left-header-box">
                                        <div className="p-2 p-lg-3 pb-0 pb-lg-0 text-center">
                                            <aside className="material-icons messanger-dark-color post-icon">account_circle</aside>
                                        </div>
                                    </div>
                                    <div className="right-header-box d-flex align-items-center">
                                        <div className="p-2 p-lg-3 pb-0 pb-lg-0 ps-lg-0">
                                            <strong>
                                                <p className="post-heading mobile-text-center">Akshay Sahasrabuddhe</p>
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                                <hr className="m-0 mb-2"></hr>
                                <div className="post-row flex-column">
                                    <p className="post-heading ps-4 pe-4">Nostrud nulla voluptate et qui veniam eiusmod cillum cupidatat. Voluptate proident tempor in enim consequat ut cillum duis irure duis deserunt sunt reprehenderit. Sunt ad ut ullamco fugiat ullamco cillum voluptate deserunt laborum adipisicing laborum labore. In labore commodo amet duis laboris nostrud sunt quis ex excepteur dolore non in tempor.</p>
                                    <img className="img-fluid" src={logoImg} alt="post image" />
                                </div>
                                <hr className="m-0 mb-2"></hr>
                                <div className="post-row flex-row justify-content-between me-3 ms-3">
                                    <div className="d-flex flex-row">
                                        <span className="material-icons-outlined messanger-dark-color me-2">thumb_up</span>
                                        <p className="text-secondary">100</p>
                                    </div>
                                    <div className="d-flex flex-row">
                                    <a className="memories-comments-button" type="button" onClick={(e) => openComments(1)(e)} >
                                        <span className="text-secondary me-2">1</span>
                                        <span className="text-secondary">comments</span>
                                    </a>
                                    </div>
                                </div>
                                
                                
                                <div className="comments-box">
                                <hr className="m-0"></hr>
                                    <div className="post-row">
                                        <div className="left-header-box align-self-center">
                                            <div className="p-2 p-lg-3 pb-0 pb-lg-0 text-center">
                                                <aside className="material-icons messanger-dark-color post-icon">account_circle</aside>
                                            </div>
                                        </div>
                                        <div className="right-header-box flex-grow-1">
                                            <div className="p-2 p-lg-3 ps-lg-0 w-100">
                                            <div className="card facebook-light-gray-color p-3 border-25">
                                            <p className="card-title"><strong>Eiusmod magna</strong></p>
                                            <p className="card-subtitle">excepteur laboris ea in officia anim elit officia reprehenderit aute</p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        </div>
                        <div className="read-post-section mb-5">
                        <div className="card-header memories-card-heading border-0"><strong>3 Weeks Ago</strong></div>
                            <div className="card post-card align-self-center mb-3">
                                <div className="post-row">
                                    <div className="left-header-box">
                                        <div className="p-2 p-lg-3 pb-0 pb-lg-0 text-center">
                                            <aside className="material-icons messanger-dark-color post-icon">account_circle</aside>
                                        </div>
                                    </div>
                                    <div className="right-header-box d-flex align-items-center">
                                        <div className="p-2 p-lg-3 pb-0 pb-lg-0 ps-lg-0">
                                            <strong>
                                                <p className="post-heading mobile-text-center">Akshay Sahasrabuddhe</p>
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                                <hr className="m-0 mb-2"></hr>
                                <div className="post-row flex-column">
                                    <p className="post-heading ps-4 pe-4">Nostrud nulla voluptate et qui veniam eiusmod cillum cupidatat. Voluptate proident tempor in enim consequat ut cillum duis irure duis deserunt sunt reprehenderit. Sunt ad ut ullamco fugiat ullamco cillum voluptate deserunt laborum adipisicing laborum labore. In labore commodo amet duis laboris nostrud sunt quis ex excepteur dolore non in tempor.</p>
                                    <img className="img-fluid" src={logoImg} alt="post image" />
                                </div>
                                <hr className="m-0 mb-2"></hr>
                                <div className="post-row flex-row justify-content-between me-3 ms-3">
                                    <div className="d-flex flex-row">
                                        <span className="material-icons-outlined messanger-dark-color me-2">thumb_up</span>
                                        <p className="text-secondary">100</p>
                                    </div>
                                    <div className="d-flex flex-row">
                                    <a className="memories-comments-button" type="button" onClick={(e) => openComments(1)(e)} >
                                        <span className="text-secondary me-2">1</span>
                                        <span className="text-secondary">comments</span>
                                    </a>
                                    </div>
                                </div>
                                
                                
                                <div className="comments-box">
                                <hr className="m-0"></hr>
                                    <div className="post-row">
                                        <div className="left-header-box align-self-center">
                                            <div className="p-2 p-lg-3 pb-0 pb-lg-0 text-center">
                                                <aside className="material-icons messanger-dark-color post-icon">account_circle</aside>
                                            </div>
                                        </div>
                                        <div className="right-header-box flex-grow-1">
                                            <div className="p-2 p-lg-3 ps-lg-0 w-100">
                                            <div className="card facebook-light-gray-color p-3 border-25">
                                            <p className="card-title"><strong>Eiusmod magna</strong></p>
                                            <p className="card-subtitle">excepteur laboris ea in officia anim elit officia reprehenderit aute</p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        </>
        
    );
};

export default Memories;