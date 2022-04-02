import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Navigation from "./Navigation";
import '../App.css';
import logoImg from '../images/logo.gif';

const Posts = (props) => {
    function openModal (){
        
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
                                    <div className="col-md-2">
                                        <div className="p-3 pe-0">
                                            <aside className="material-icons messanger-dark-color post-icon">account_circle</aside>
                                        </div>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="p-3 ps-0">
                                            <div className="input-group input-group-lg">
                                                <input type="text" className="form-control rounded-pill" id="write-post-textbox" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="What's on your mind ..." onFocus={openModal}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="read-post-section">
                            <h1>hiii</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        {/* Modal code */}
        <div className="modal" tabIndex={-1} id="myModal">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>
        {/*  */}
        </>
        // ---------- End of Posts ---------- // 
    );
};

export default Posts;