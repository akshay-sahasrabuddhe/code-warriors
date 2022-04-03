import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Navigation from "./Navigation";
import '../App.css';
import logoImg from '../images/logo.gif';
import $ from 'jquery';
import { Modal } from 'bootstrap';

const Posts = (props) => {
    function openModal (){
        let myModal = new Modal(document.getElementById('myModal'));
        myModal.show();
    }
    return (
        // ---------- Start of Posts ---------- // 
        <> 
        <Navigation></Navigation>  
        <section className="section posts-section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="write-post-section">
                            <div className="card post-card align-self-center text-center">
                                <div className="row">
                                    <div className="col-lg-2">
                                        <div className="p-3 pe-lg-0">
                                            <aside className="material-icons messanger-dark-color post-icon">account_circle</aside>
                                        </div>
                                    </div>
                                    <div className="col-lg-10">
                                        <div className="p-3 ps-lg-0">
                                            <div className="input-group input-group-lg">
                                                <input type="text" className="form-control rounded-pill" id="write-post-textbox" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="What's on your mind ..." onFocus={openModal} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="read-post-section">
                            <div className="card post-card align-self-center">
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
                                        <span class="material-icons-outlined messanger-dark-color me-2">thumb_up</span>
                                        <p className="text-secondary">100</p>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <p className="text-secondary me-2">1</p>
                                        <p className="text-secondary">comments</p>
                                    </div>
                                </div>
                                <hr className="m-0 mb-2"></hr>
                                <div className="post-row flex-row">
                                    <button type="button" class="btn btn-outline-primary d-flex flex-row align-self-center post-buttons border-0 justify-content-center">
                                        <span class="material-icons-outlined me-2">thumb_up</span>
                                        <span>Like</span>
                                    </button>
                                    <button type="button" class="btn btn-outline-primary d-flex flex-row align-self-center post-buttons border-0 justify-content-center">
                                        <span class="material-icons-outlined me-2">chat_bubble_outline</span>
                                        <span>Comment</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        {/* Modal code */}
       

        <div className="modal fade" id="myModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Create Post</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                        <div className="mb-3">
                            <label for="message-text" className="col-form-label">Message:</label>
                            <textarea className="form-control" id="message-text"></textarea>
                        </div>
                        <div class="input-group mb-3">
                            {/* <label class="input-group-text" for="inputGroupFile01">Upload</label> */}
                            <input type="file" class="form-control" id="inputGroupFile01" />
                        </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Send message</button>
                    </div>
                </div>
            </div>
        </div>
        

        {/*  */}
        </>
        
    );
};

export default Posts;