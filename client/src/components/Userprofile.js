import React,{useEffect, useState} from "react";
import Navigation from "./Navigation";
import '../App.css';
import axios from "axios";
import logoImg from '../images/logo.gif';
import maleUser from '../images/male-user.svg';
import femaleUser from '../images/female-user.svg';
import otherUser from '../images/other.svg';
import $, { event } from 'jquery';
import { Modal } from 'bootstrap';
import {Form, FloatingLabel, Button, Row, Col} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const url = "http://localhost:3000/session";

const Userprofile = (props) => {
    
    // const navigate = useNavigate();

    // let userId = localStorage.getItem("userId");

        
   
   

    let firstName;
    let lastName;
    let email;
    let pswd;
    let confirmPswd;
    let dob;
    let gender;
    let relationStatus;
    let interests;

    
    const [userprof , setuserprof] = useState(undefined);
    //const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData(){
            //const { data } = await axios.get(url);

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

            //const { data } = await axios.post(`http://localhost:3000/login`[user[instance]]);
            const { data } = await instance.get(`http://localhost:3000/session`);  
            console.log(data);


            console.log(url);
            setuserprof(data);
            console.log(userprof);
        }
        fetchData();
    },[]);


    return (
        <> 
        <Navigation></Navigation>  
        {/* // ---------- Start of User Profile Section ---------- //  */}
        <section className="user-profile-section">
            <div className="user-profile-box">
                <img src={maleUser} className="user-profile-pic" alt="User Profile Pic" />
            </div>
        </section>
        {/* // ---------- End of User Profile Section ---------- //  */}

        {/* // ---------- Start of User profiel Tabs Section ---------- //  */}

        <section className="user-profiel-tabs-section">
            <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link w-100 active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">About</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link w-100" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Friends</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link w-100" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Edit Profile</button>
                </li>
            </ul>
            <div className="tab-content border border-top-0" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="row">
                        <div className="col-md-5 offset-2 offset-md-1">
                            <div className="d-flex  pt-4 pb-4">
                                <div className="d-flex align-self-center">
                                    <span className="material-icons-outlined about-box-img">email</span>
                                </div>
                                <div className="d-flex flex-column m-2">
                                    <span className="about-heading">asahasra@stevens.edu</span>
                                    <span className="about-subheading text-secondary">Email</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 offset-2 offset-md-1">
                            <div className="d-flex  pt-4 pb-4">
                                <div className="d-flex align-self-center">
                                    <span className="material-icons-outlined about-box-img">cake</span>
                                </div>
                                <div className="d-flex flex-column m-2">
                                    <span className="about-heading">1 November 1996</span>
                                    <span className="about-subheading text-secondary">Birthday</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 offset-2 offset-md-1">
                            <div className="d-flex  pt-4 pb-4">
                                <div className="d-flex align-self-center">
                                    <span className="material-icons-outlined about-box-img">boy</span>
                                    {/* <span className="material-icons-outlined about-box-img">girl</span> */}
                                    {/* <span className="material-icons-outlined about-box-img">transgender</span> */}
                                </div>
                                <div className="d-flex flex-column m-2">
                                    <span className="about-heading">Man</span>
                                    <span className="about-subheading text-secondary">Gender</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 offset-2 offset-md-1">
                            <div className="d-flex  pt-4 pb-4">
                                <div className="d-flex align-self-center">
                                    <span className="material-icons-outlined about-box-img">favorite</span>
                                </div>
                                <div className="d-flex flex-column m-2">
                                    <span className="about-heading">Single</span>
                                    <span className="about-subheading text-secondary">Relationship Status</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10 offset-2 offset-md-1">
                            <div className="pt-4 pb-4 d-flex align-self-center">
                                <div className="d-flex align-self-center">
                                    <span className="material-icons-outlined about-box-img">interests</span>
                                </div>
                                <div className="d-flex flex-column m-2">
                                    <span className="about-heading">Cricket, Football, Singing</span>
                                    <span className="about-subheading text-secondary">Interests</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade pt-4 friends-tab" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="card text-center">
                                    <img src={maleUser} className="friend-list-card-img" alt="User Profile Pic" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Akshay</h5>
                                        <a href="#" className="btn btn-primary">Remove</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card text-center">
                                    <img src={maleUser} className="friend-list-card-img" alt="User Profile Pic" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Roshan</h5>
                                        <a href="#" className="btn btn-primary">Remove</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card text-center">
                                    <img src={maleUser} className="friend-list-card-img" alt="User Profile Pic" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Juzar</h5>
                                        <a href="#" className="btn btn-primary">Remove</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card text-center">
                                    <img src={maleUser} className="friend-list-card-img" alt="User Profile Pic" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Tapish</h5>
                                        <a href="#" className="btn btn-primary">Remove</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card text-center">
                                    <img src={maleUser} className="friend-list-card-img" alt="User Profile Pic" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Akhil</h5>
                                        <a href="#" className="btn btn-primary">Remove</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <Form className='signupForm' onSubmit={
                        (e)=>{
                            e.preventDefault();
                        
                        if(!firstName.value){
                            alert("Please enter first name");
                            return;
                        }

                        if(!lastName.value){
                            alert("Please enter last name");
                            return;
                        }
                        if(!email.value){
                            alert("Please enter email");
                            return;
                        }

                        //let regE = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
                        let regE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                        if(!regE.test(email.value.toLowerCase())){
                            alert("Please enter a valid email");
                            return;
                        }

                        if(!pswd.value){
                            alert("Please enter password");
                            return;
                        }

                        let regP = /^([a-zA-Z0-9-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]{6,})*$/
                        if(!regP.test(pswd.value)){
                            alert("Password is invalid - should contain at least one digit,should contain at least one lower case, should contain at least one upper case, should contain at least 8 from the mentioned characters");
                            return;
                        }

                        if(!confirmPswd.value){
                            alert("Please enter confirm password");
                            return;
                        }

                        if(pswd.value !== confirmPswd.value){
                            alert("Passwords don't match");
                            return;
                        }

                        if(!dob.value){
                            alert("Please provide your date of birth");
                            return;
                        }

                        if(dob.value){
                            let birth = new Date(dob.value);
                            var month_diff = Date.now() - birth.getTime();  
            
            //convert the calculated difference in date format  
                                let age_dt = new Date(month_diff);   
            
            //extract year from date      
                                let year = age_dt.getUTCFullYear();  
            
            //now calculate the age of the user  
                                let age = Math.abs(year - 1970);  
                                console.log(age);

                                if(!(age > 13 && age < 120)){
                                    alert("Should be between age 13 and 120");
                                    dob.value = "";
                                    return;
                                }
                        }

                        if(!gender.value){
                            alert("Please provide gender");
                            return;
                        }
                        
                        }
                    }>
                    
                    <Row className="mb-4">
                    <Form.Group as={Col}>
                    <FloatingLabel
                        controlId="firstName"
                        label="First Name"
                        className="mb-3"
                        >
                            <Form.Control  type="text" placeholder="First Name"
                                className="textform"
                                ref={(node)=>{
                                    firstName = node;
                                }}
                            />
                        </FloatingLabel>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <FloatingLabel
                                controlId="lastName"
                                label="Last Name"
                                className="mb-3"
                            >
                            <Form.Control required type="text" placeholder="Last Name"
                                className="textform"
                                ref={(node)=>{
                                    lastName = node;
                                }}
                            />
                            </FloatingLabel>
                        </Form.Group>
                        </Row>
        
                        <Form.Group>
                            <FloatingLabel
                                controlId="email"
                                label="Email"
                                className="mb-3"
                            >
                            <Form.Control required type="email" placeholder="name@example.com"
                                className="textform"
                                ref={(node)=>{
                                    email = node;
                                }}
                            />
                        </FloatingLabel>
        
        
                        <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                            <Form.Control required type="password" placeholder="Password" 
                                className="textform"
                                ref={(node)=>{
                                    pswd = node;
                                }}
                            />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingCPassword" label="Confirm Password" className="mb-3">
                            <Form.Control required type="password" placeholder="Confirm Password"
                                className="textform"
                                ref={(node)=>{
                                    confirmPswd = node;
                                }}
                            />
                        </FloatingLabel>

                        <FloatingLabel controlId="date" label="Date of Birth" className="mb-3">
                            <Form.Control required type="date" placeholder="Date of Birth" 
                                className="textform"
                                ref={(node)=>{
                                    dob = node;
                                }}
                            />
                        </FloatingLabel>

                        <Form.Label className="select" >
                        Gender
                        <Form.Select required aria-label="Gender" size='lg'
                        className="textform"
                        ref={(node)=>{
                            gender = node;
                        }}>
                            <option></option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                            <option value="nodisclosure">Prefer not to disclose</option>
                        </Form.Select>
                        </Form.Label>

                        <Form.Label  className="select">
                        Relationship Status
                        <Form.Select aria-label="relationship status"
                        className="textform" size='lg'
                        ref={(node)=>{
                            relationStatus = node;
                        }}>
                        <option></option>
                        <option value="married">Married</option>
                        <option value="single">Single</option>
                        <option value="inarelation">In a Relationship</option>
                        <option value="nodisclosure">Prefer not to disclose</option>
                        </Form.Select>
                        </Form.Label>


                        <FloatingLabel controlId="floatingtextarea" label="Interests" className="mb-3">
                            <Form.Control as="textarea" rows={10} placeholder="Interests"
                            className="textarea"
                            ref={(node)=>{
                                interests = node;
                            }}
                        />
                        </FloatingLabel>

                        </Form.Group>
        
        
                        <Button variant="primary" type="submit" className="submit">
            Submit
                        </Button>
                    </Form> 
                </div>
            </div>
        </section>

        {/* // ---------- End of User profiel Tabs Section ---------- //  */}
        </>
        
    );
};

export default Userprofile;