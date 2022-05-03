import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Navigation from "./Navigation";
import '../App.css';
import logoImg from '../images/logo.gif';
import $, { event } from 'jquery';
import { Modal } from 'bootstrap';
import { useNavigate, Navigate } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import cryptojs from 'crypto-js';
import Session from "react-session-api";
import {ReactSession} from "react-client-session";
//const bcrypt = require('bcryptjs');
//const saltRounds = 16;

const Posts = (props) => {

    const navigate = useNavigate();
    console.log(localStorage);
    //localStorage.clear();
    let user = null;
    
    //console.log(ReactSession.get("userSession"));
    const [session , setSession] = useState(false);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function checkSession(){
            try{
                const instance = axios.create({
                    baseURL: '*',
                    timeout: 20000,
                  withCredentials: true,
                  headers: {
                      'Content-Type': 'application/json;charset=UTF-8',
                      "Access-Control-Allow-Origin": "*",
                    },
                  validateStatus: function (status) {
                      return status < 500; // Resolve only if the status code is less than 500
                    }
                });
    
                const { data } = await instance.get(`http://localhost:3000/session`);
                console.log(data);
                if('error' in data){
                    setSession(false);
                    setLoading(false);
                   // return;
                }
                else{
                    let bytes1 = cryptojs.AES.decrypt(data._id, 'MySecretKey');
                    console.log(bytes1);
                    let tempid = JSON.parse(bytes1.toString(cryptojs.enc.Utf8));
                    
                    let id = localStorage.getItem("userSession");
                    let bytes = cryptojs.AES.decrypt(id, 'MySecretKey');
                    console.log(bytes);
                   // let decid = JSON.parse(temp);
                   let decid = JSON.parse(bytes.toString(cryptojs.enc.Utf8)); 
                   
                   
                   if(tempid === decid.toString()){
                    
                    console.log("here");
                       console.log("works");
                       setSession(true);
                        setLoading(false);
                   }
                   else{
                    setSession(false);
                    setLoading(false); 
                   }
                       // return;
                }
            }
            catch(e){
                console.log(e);
            }
        }
    
        if(localStorage.length !== 0){
            console.log("here");
            checkSession();
            //return;
        }
        else{
            console.log("here in the outer if");
            setLoading(false);
            setSession(false);
        }
    
    },[]);
    if(localStorage.getItem("user") && localStorage.getItem('user') !== "undefined"){
        //console.log(localStorage.getItem("user"));
    let bytes = cryptojs.AES.decrypt(localStorage.getItem('user'), 'MySecretKey');
    user = JSON.parse(bytes.toString(cryptojs.enc.Utf8));
    }
    
    function openModal (){
        let myModal = new Modal(document.getElementById('myModal'));
        myModal.show();
    }

    const openComments = param => event => {
        let a = "";
           if(event.target.tagName == "BUTTON"){
                a = event.target.parentNode.nextElementSibling;
           }else{
                a = event.target.parentNode.parentNode.nextElementSibling;
           }
            a.style.display = 'block';
            window.setTimeout(function(){
                a.style.opacity = 1;
                a.style.transform = 'scale(1)';
            },0);
      };

      if(loading){
        return(
            <div>
                <span>Loading....</span>
            </div>
        );
    }
    else{
        if(!session){
            return (
                <Navigate to="/" replace />
                );
        }
        else{

    return (
        // ---------- Start of Posts ---------- // 
        <> 
        <Navigation></Navigation>  
        <section className="section posts-section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="write-post-section mb-3">
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
                                                <input type="text" className="form-control rounded-pill facebook-light-gray-color" id="write-post-textbox" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="What's on your mind ..." onFocus={openModal} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="read-post-section">
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
                                                <p className="post-heading mobile-text-center">{user}</p>
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
                                        <p className="text-secondary me-2">1</p>
                                        <p className="text-secondary">comments</p>
                                    </div>
                                </div>
                                <hr className="m-0 mt-2 mb-0"></hr>
                                <div className="post-row flex-row">
                                    <button type="button" className="btn btn-outline-primary d-flex flex-row align-self-center post-buttons border-0 justify-content-center">
                                        <span className="material-icons-outlined me-2">thumb_up</span>
                                        <span>Like</span>
                                    </button>
                                    <button type="button" className="btn btn-outline-primary d-flex flex-row align-self-center post-buttons border-0 justify-content-center" onClick={(e) => openComments(1)(e)}>
                                        <span className="material-icons-outlined me-2">chat_bubble_outline</span>
                                        <span>Comment</span>
                                    </button>
                                </div>
                                <div className="comments-box">
                                <hr className="m-0"></hr>
                                    <div className="post-row">
                                        <div className="left-header-box">
                                            <div className="p-2 p-lg-3 pb-0 pb-lg-0 text-center">
                                                <aside className="material-icons messanger-dark-color post-icon">account_circle</aside>
                                            </div>
                                        </div>
                                        <div className="right-header-box flex-grow-1">
                                            <div className="p-2 p-lg-3 pb-0 pb-lg-0 ps-lg-0 w-100">
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control rounded-pill facebook-light-gray-color" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Write Something ..." />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                        <div className="read-post-section">
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
                                        <p className="text-secondary me-2">1</p>
                                        <p className="text-secondary">comments</p>
                                    </div>
                                </div>
                                <hr className="m-0 mt-2 mb-0"></hr>
                                <div className="post-row flex-row">
                                    <button type="button" className="btn btn-outline-primary d-flex flex-row align-self-center post-buttons border-0 justify-content-center">
                                        <span className="material-icons-outlined me-2">thumb_up</span>
                                        <span>Like</span>
                                    </button>
                                    <button type="button" className="btn btn-outline-primary d-flex flex-row align-self-center post-buttons border-0 justify-content-center" onClick={(e) => openComments(1)(e)}>
                                        <span className="material-icons-outlined me-2">chat_bubble_outline</span>
                                        <span>Comment</span>
                                    </button>
                                </div>
                                <div className="comments-box">
                                <hr className="m-0"></hr>
                                    <div className="post-row">
                                        <div className="left-header-box">
                                            <div className="p-2 p-lg-3 pb-0 pb-lg-0 text-center">
                                                <aside className="material-icons messanger-dark-color post-icon">account_circle</aside>
                                            </div>
                                        </div>
                                        <div className="right-header-box flex-grow-1">
                                            <div className="p-2 p-lg-3 pb-0 pb-lg-0 ps-lg-0 w-100">
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control rounded-pill facebook-light-gray-color" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Write Something ..." />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                        <div className="read-post-section">
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
                                        <p className="text-secondary me-2">1</p>
                                        <p className="text-secondary">comments</p>
                                    </div>
                                </div>
                                <hr className="m-0 mt-2 mb-0"></hr>
                                <div className="post-row flex-row">
                                    <button type="button" className="btn btn-outline-primary d-flex flex-row align-self-center post-buttons border-0 justify-content-center">
                                        <span className="material-icons-outlined me-2">thumb_up</span>
                                        <span>Like</span>
                                    </button>
                                    <button type="button" className="btn btn-outline-primary d-flex flex-row align-self-center post-buttons border-0 justify-content-center" onClick={(e) => openComments(1)(e)}>
                                        <span className="material-icons-outlined me-2">chat_bubble_outline</span>
                                        <span>Comment</span>
                                    </button>
                                </div>
                                <div className="comments-box">
                                <hr className="m-0"></hr>
                                    <div className="post-row">
                                        <div className="left-header-box">
                                            <div className="p-2 p-lg-3 pb-0 pb-lg-0 text-center">
                                                <aside className="material-icons messanger-dark-color post-icon">account_circle</aside>
                                            </div>
                                        </div>
                                        <div className="right-header-box flex-grow-1">
                                            <div className="p-2 p-lg-3 pb-0 pb-lg-0 ps-lg-0 w-100">
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control rounded-pill facebook-light-gray-color" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Write Something ..." />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                            <label htmlFor="message-text" className="col-form-label">Message:</label>
                            <textarea className="form-control" id="message-text"></textarea>
                        </div>
                        <div className="input-group mb-3">
                            {/* <label className="input-group-text" htmlFor="inputGroupFile01">Upload</label> */}
                            <input type="file" className="form-control" id="inputGroupFile01" />
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
        }
    }
};

export default Posts;