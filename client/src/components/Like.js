import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import "../App.css";
import logoImg from "../images/logo.gif";
import maleUser from "../images/male-user.svg";
import femaleUser from "../images/female-user.svg";
import otherUser from "../images/other.svg";
import $, { event } from "jquery";
import { Modal } from "bootstrap";
import axios from "axios";
import { Form, FloatingLabel, Button, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import cryptojs from "crypto-js";
const Like = (props) => {
console.log(props);

const[likedata,setlikedata] = useState(props.numlikes);
// setlikedata(props.n);
let likecontainer = null;
let finallikes = 0;
    
async function likefunk(likeid){
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

    const data1  = await instance.get(`http://localhost:3000/session`);
       console.log(data1.data.id);
       let likeobj = { userID: data1.data.id}

    // const postdata  = await instance.get(`http://localhost:3000/posts`);
    // console.log(postdata);
    

    await axios.post(`http://localhost:3000/posts/like/${likeid}`,likeobj,{
        headers:{
            'Content-Type': 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "*",
        }
        }).then(function (response) {
    console.log(response.data.likes.length);

    if(response.status === 200){
       setlikedata(response.data.likes.length)
    }
    }).catch(function (error) {
    console.log(error);
    //setSuccess(false);
    alert("There was some error please try again");

    });
    
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


        return(<>
            <div className="post-row flex-row justify-content-between me-3 ms-3">
                <div className="d-flex flex-row">
                    <span className="material-icons-outlined messanger-dark-color me-2">thumb_up</span>
                    <p className="text-secondary">{likedata}</p>
                </div>
                <div className="d-flex flex-row">
                    <p className="text-secondary me-2">1</p>
                    <p className="text-secondary">comments</p>
                </div>
            </div>
            <hr className="m-0 mt-2 mb-0"></hr>
            <div className="post-row flex-row">
                <button type="button" className="btn btn-outline-primary d-flex flex-row align-self-center post-buttons border-0 justify-content-center" onClick={() => likefunk(props.mainid)}>
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
        </>)
  
}
export default Like;