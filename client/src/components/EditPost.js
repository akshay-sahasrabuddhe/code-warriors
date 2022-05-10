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
import Posts from "./Posts";
const EditPost = (props) => {
   //console.log(props);
    let title;
  let body;

  

return(
            
               
                        <form onSubmit={
        async (e)=>{
        e.preventDefault();
        let btn = document.getElementById("sub1");
        btn.disabled = false;
        //    if(!title.value){
        //        console.log(title.value);
        //        alert("Please enter post title");
        //        btn.disabled = false;
        //        return;
        //    }
        //    if(title.value.trim().length == 0){
        //     alert("Only white spaces are not allowed.");
        //     btn.disabled = false;
        //        return;
        //    }
        
        //    let regf = /^[ A-Za-z0-9_@./#&+-]*$/
        //    if(!regf.test(title.value)){
        //         alert("Please enter valid post title");
        //         btn.disabled = false;
        //         return;
        //    }
        
        //    if(!body.value){
        //        alert("Please enter first post description");
        //        btn.disabled = false;
        //        return;
        //    }
        //    if(body.value.trim().length == 0){
        //     alert("Only white spaces are not allowed.");
        //     btn.disabled = false;
        //        return;
        //    }
        
        //    if(!regf.test(body.value)){
        //         alert("Please enter valid post description");
        //         btn.disabled = false;
        //         return;
        //    }
        
        // let temp = JSON.parse(user);
        let flag = false;
        //let msg = await axios.post('http:/localhost:3000/signup', user);
        
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
        
        
        
        let postid = props.editdataid;
        
        const clickedpost = await instance.get(`http://localhost:3000/posts/${postid}`);
        
        console.log(clickedpost.data)
        
        
        
        
        
        const data1  = await instance.get(`http://localhost:3000/session`);
            console.log(data1.data);
        
        const userdata1  = await instance.get(`http://localhost:3000/getUserData`);
        console.log(userdata1.data);
        
        
        let user = {
                    id: postid,
                    title : document.getElementById('title').value,
                    body:  document.getElementById('body').value,
                    isPublic: true,
                }
                console.log(user);
        
        // let formData1 = new FormData();
        //         formData1.append("id",postid);
        //         formData1.append("title",title.value);
        //         formData1.append("body" , body.value);
        //         formData1.append("isPublic", true);
           
            
        // console.log("yE HAI AASLI"+formData1.get('title'));
        
        
        
        await axios.patch(`http://localhost:3000/posts/${postid}`,user,{
        headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "*",
            }
            }).then(function (response) {
        console.log(response.data);
        
        if(response.status === 200){
            alert("Post posted successfully!!!");
            flag = true;
            window.location.reload();
        }
        }).catch(function (error) {
        console.log(error);
        //setSuccess(false);
        alert("There was some error please try again");
        
        });
        
        e.target.reset();
        //btn.disabled = false;
        if(flag){
        
        props.handleClose(false);
        }            
        }
        }>
        
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" aria-describedby="emailHelp" defaultValue="" ref={(node)=>{
                        title = node;
                    }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="body" className="col-form-label">Message:</label>
                        <textarea className="form-control" id="body" defaultValue="" ref={(node)=>{
                        body = node;
                    }} ></textarea>
                    </div>
                    <div className="mb-3">
                        <button type="button" className="btn btn-secondary me-3" data-bs-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary" id="sub1">Publish</button>
                    </div>
                    </form>
);

}

export default EditPost;