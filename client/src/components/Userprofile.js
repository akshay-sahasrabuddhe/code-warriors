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

const Userprofile = (props) => {
  let firstName;
  let lastName;
  let email;
  let pswd;
  let confirmPswd;
  let dob;
  let gender;
  let relationStatus;
  let interests;
  let id;
  let userProfileData,editProfileData = null;
    
    const [about , setAbout] = useState(undefined);
    const [aboutedit , setAboutEdit] = useState(undefined);
    const [loading, setLoading] = useState(true);
  //let bytes = cryptojs.AES.decrypt(ReactSession.get('user'), 'MySecretKey');
  if (
    localStorage.getItem("user") &&
    localStorage.getItem("user") !== "undefined"
  ) {
    id = cryptojs.AES.decrypt(
      localStorage.getItem("userSession"),
      "MySecretKey"
    );

    id = JSON.parse(id.toString(cryptojs.enc.Utf8));
    console.log(id);
  }
  let paramId = useParams();
  const [friend, setAlreadyFriend] = useState(false);
  const [request, setRequest] = useState(false);

  const [visitedsent, setVisitedSent] = useState(false);

  useEffect(() => {
    async function fetchdata() {
      const instance = axios.create({
        baseURL: "*",
        timeout: 20000,
        withCredentials: true,
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        },
      });

      const resp = await instance.get(
        `http://localhost:3000/userprofile/${paramId.id}`
      );
      console.log(resp.data.data.d);
      if (resp.data.data.res) {
        setAbout([resp.data.data.d]);
            setLoading(false);
        let frnds = resp.data.data.d.friends;
        if (paramId.id != id) {
          for (let i = 0; i < frnds.length; i++) {
            if (frnds[i] == paramId.id) {
              setAlreadyFriend(true);
              break;
            }
          }
        }
      } else {
        console.log("user not found");
        //set state for user profile not found
      }
    }

    fetchdata();
    fetchRequestData();
  }, []);
  async function fetchRequestData() {
    console.log(id);
    await axios
      .post(`http://localhost:3000/friend/searchrequest`, {
        loggedIn: id,
        Visited: paramId.id,
      })
      .then(function (response) {
        console.log(response.data.data);
        let res = response.data.data;
        if (response.data.requestSent === 200) {
          if (res != null) {
            //setRequest(true);
            if (res.sender == id) {
              setRequest(true);
            } else if (res.receiver == id) {
              setVisitedSent(true);
            }
          } else {
          }
        }
      })
      .catch(function (error) {
        console.log(error);
        setRequest(false);
        alert("There was some error please try again");
      });
  }
  async function sendRequest() {
    if (paramId.id != id) {
      await axios
        .post(`http://localhost:3000/friend/sendRequest`, {
          sender: id,
          receiver: paramId.id,
        })
        .then(function (response) {
          console.log(response.data);
          if (response.data.requestSent === 200) {
            setRequest(true);
          }
        })
        .catch(function (error) {
          console.log(error);
          setRequest(false);
          alert("There was some error please try again");
        });
    }
  }

  async function cancelRequest() {
    if (paramId.id != id) {
      await axios
        .post(`http://localhost:3000/friend/cancelRequest`, {
          sender: id,
          receiver: paramId.id,
        })
        .then(function (response) {
          console.log(response);
          if (response.data.status) {
            setRequest(false);
          } else {
            alert("Cannot Cancel Request: Error Occurred");
          }
        })
        .catch(function (error) {
          console.log(error);
          alert("Cannot Cancel Request: Error Occurred");
        });
    }
  }

  userProfileData = about && about.map((n) => {
    return(
   <div className="row">
                    <div className="col-md-5 offset-2 offset-md-1">
                        <div className="d-flex  pt-4 pb-4">
                            <div className="d-flex align-self-center">
                                <span className="material-icons-outlined about-box-img">email</span>
                            </div>
                            <div className="d-flex flex-column m-2">
                                <span className="about-heading">{n.email}</span>
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
                                <span className="about-heading">{n.dateOfBirth}</span>
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
                                <span className="about-heading">{n.gender}</span>
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
                                <span className="about-heading">{n.relationshipStatus}</span>
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
                                <span className="about-heading">{n.interestedIn}</span>
                                <span className="about-subheading text-secondary">Interests</span>
                            </div>
                        </div>
                    </div>
                </div>
 )
    
});

if(loading){
  return(
  <div>
      <h1>Loading...</h1>
  </div>
  );
}
else{

  console.log(id);
  console.log(paramId.id);

  return (
    <>
      <Navigation></Navigation>
      {/* // ---------- Start of User Profile Section ---------- //  */}
      <section className="user-profile-section">
        <div className="user-profile-box">
          <img
            src={maleUser}
            className="user-profile-pic"
            alt="User Profile Pic"
          />
        </div>
        <div>
          {id == paramId.id ? null : friend ? (
            <Button variant="primary">Friends</Button>
          ) : request ? (
            <Button variant="primary" onClick={cancelRequest}>
              Request Sent
            </Button>
          ) : visitedsent ? (
            <Button variant="primary">Request Received</Button>
          ) : (
            <Button variant="primary" onClick={sendRequest}>
              Add Friend
            </Button>
          )}
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
                {userProfileData}
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
                async (e)=>{
                    e.preventDefault();
                   
    
                    
                   let btn = document.getElementById("sub");
                  btn.disabled = false;
                   if(!firstName.value){
                       alert("Please enter first name");
                       btn.disabled = false;
                       return;
                   }
    
                   let regf = /^([a-zA-Z]{2,})*$/;
                   if(!regf.test(firstName.value)){
                        alert("Please enter valid first name");
                        btn.disabled = false;
                        return;
                   }
    
                   if(!lastName.value){
                       alert("Please enter last name");
                       btn.disabled = false;
                       return;
                   }
    
                   let regl = /^([a-zA-Z]{2,})*$/;
                   if(!regl.test(lastName.value)){
                        alert("Please enter valid first name");
                        btn.disabled = false;
                        return;
                   }
    
    
                   if(!email.value){
                       alert("Please enter email");
                       btn.disabled = false;
                       return;
                   }
    
                   //let regE = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
                   let regE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if(!regE.test(email.value.toLowerCase())){
                    alert("Please enter a valid email");
                    btn.disabled = false;
                    return;
                }
    
                //    if(!pswd.value){
                //        alert("Please enter password");
                //        btn.disabled = false;
                //        return;
                //    }
    
                   let regP = /^([a-zA-Z0-9-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]{6,})*$/
                if((pswd.value != '') && (!regP.test(pswd.value))){
                    alert("Password is invalid - should contain at least one digit,should contain at least one lower case, should contain at least one upper case, should contain at least 8 from the mentioned characters");
                    btn.disabled = false;
                    return;
                }
    
                //    if(!confirmPswd.value){
                //        alert("Please enter confirm password");
                //        btn.disabled = false;
                //        return;
                //    }
    
                   if(pswd.value !== confirmPswd.value){
                       alert("Passwords don't match");
                       btn.disabled = false;
                       return;
                   }
    
    //                if(!dob.value){
    //                    alert("Please provide your date of birth");
    //                    btn.disabled = false;
    //                    return;
    //                }
    
    //                if(dob.value){
    //                    let birth = new Date(dob.value);
    //                    var month_diff = Date.now() - birth.getTime();  
      
    // //convert the calculated difference in date format  
    //                     let age_dt = new Date(month_diff);   
      
    // //extract year from date      
    //                     let year = age_dt.getUTCFullYear();  
      
    // //now calculate the age of the user  
    //                     let age = Math.abs(year - 1970);  
    //                     console.log(age);
    
    //                     if(!(age > 13 && age < 120)){
    //                         alert("Should be between age 13 and 120");
    //                         dob.value = "";
    //                         btn.disabled = false;
    //                         return;
    //                     }
    //                }
    //                let dateOfBirth = new Date(dob.value + ' EST' );
    //                console.log(dateOfBirth);
    
    //                dateOfBirth = String(dateOfBirth.getMonth()+1).padStart(2,'0')+'/'+String(dateOfBirth.getDate()).padStart(2,'0')+'/'+dateOfBirth.getFullYear();
                  
                   if(!gender.value){
                       alert("Please provide gender");
                       btn.disabled = false;
                       return;
                   }
                   const genders=["male","female","others","nodisclosure"];
    
                   if(!genders.includes(gender.value)){
                    alert("Please provide valid gender");
                    btn.disabled = false;
                    return;
                   }
                  
                    const relationship=["married", "single", "inarelation", "nodisclosure"]
                    console.log(relationStatus.value);
                    if(relationStatus.value){
                        console.log(relationStatus.value);
                        if(!relationship.includes(relationStatus.value)){
                            alert("Please provide valid relation status");
                            btn.disabled = false;
                            return;
                        }
                    }
    
                    let user = {
                        firstName: firstName.value,
                        lastName : lastName.value,
                        email: email.value,
                        password: pswd.value,
                        dateOfBirth:about[0].dateOfBirth,
                        gender: gender.value,
                        relationshipStatus: relationStatus.value,
                        interestedIn : interests.value
                    }
                   // let temp = JSON.parse(user);
                   let flag = false;
                   let url = 'http:/localhost:3000/updateprofile'
                    console.log(user);
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
            setAbout([user]);
            console.log(user);

            await instance.patch(`http://localhost:3000/updateprofile`, user)
                      .then(function (response) {
                        console.log(response);
                        
                        if(response.status === 200){
                            alert("Hey "+user.firstName+", Your profile is updated !!!");
                            flag = true;
                        }
                      })
                      .catch(function (error) {
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
               
               <Row className="mb-4">
               <Form.Group as={Col}>
               <FloatingLabel
                controlId="firstName"
                label="First Name"
                className="mb-3"
                >
                    <Form.Control  type="text" placeholder="First Name" defaultValue={about[0].firstName}
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
                    <Form.Control  type="text" placeholder="Last Name" defaultValue={about[0].lastName}
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
                    <Form.Control  type="email" placeholder="name@example.com"
                        className="textform"  defaultValue={about[0].email}
                        ref={(node)=>{
                            email = node;
                        }}
                    />
                </FloatingLabel>
    
    
                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                    <Form.Control  type="password" placeholder="Password" 
                        className="textform"
                        ref={(node)=>{
                            pswd = node;
                        }}
                    />
                </FloatingLabel>
    
                <FloatingLabel controlId="floatingCPassword" label="Confirm Password" className="mb-3">
                    <Form.Control  type="password" placeholder="Confirm Password"
                        className="textform"
                        ref={(node)=>{
                            confirmPswd = node;
                        }}
                    />
                </FloatingLabel>
    
                {/* <FloatingLabel controlId="date" label="Date of Birth" className="mb-3" >
                    <Form.Control  type="date" placeholder="Date of Birth" disabled
                        
                        className="textform" defaultValue={about[0].dateOfBirth} 
                        ref={(node)=>{
                            dob = node;
                        }}
                    />
                </FloatingLabel> */}
    
                <Form.Label className="select" >
                Gender
                <Form.Select  aria-label="Gender" size='lg'
                 className="textform" defaultValue={about[0].gender}
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
    
                <Form.Label  className="select" >
                Relationship Status
                <Form.Select aria-label="relationship status"
                 className="textform" size='lg' defaultValue={about[0].relationshipStatus}
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
    
    
                <FloatingLabel controlId="floatingtextarea" label="Interests" className="mb-3" >
                    <Form.Control as="textarea" rows={10} placeholder="Interests"
                    className="textarea" defaultValue={about[0].interestedIn}
                    ref={(node)=>{
                        interests = node;
                    }}
                />
                </FloatingLabel>
    
                </Form.Group>
                <Button id="sub" variant="primary" type="submit" className="submit">
    Submit
                </Button>
                </Form>
                </div>
            </div>
      </section>

      {/* // ---------- End of User profiel Tabs Section ---------- //  */}
    </>
  );
}
};

export default Userprofile;