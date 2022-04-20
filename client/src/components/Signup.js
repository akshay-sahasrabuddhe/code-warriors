import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
//import { makeStyles, TextField, Button, Radio, RadioGroup } from '@material-ui/core';
//import { FormControlLabel, FormLabel } from "@material-ui/core";
import {Form, FloatingLabel, Button, Row, Col}from 'react-bootstrap'
import '../App.css';

/*const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(2),
  
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '300px',
      },
      '& .MuiButtonBase-root': {
        margin: theme.spacing(2),
      },
      
    },
  }));
  */

const Signup = (props) => {
    //const classes = useStyles();
    let firstName;
    let lastName;
    let email;
    let pswd;
    let confirmPswd;
    let dob;
    let gender;
    let relationStatus;
    let interests

    return (
        <div className="App-body pt-5 mt-5">
            
            <h2>Signup Form</h2>
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
    );
};

export default Signup;