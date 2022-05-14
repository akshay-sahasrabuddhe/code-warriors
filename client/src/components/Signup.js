import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import { makeStyles, TextField, Button, Radio, RadioGroup } from '@material-ui/core';
//import { FormControlLabel, FormLabel } from "@material-ui/core";
import {
  Form,
  FloatingLabel,
  Button,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import FormData from "form-data";
import "../App.css";
import axios from "axios";
import ReactModal from "react-modal";

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

ReactModal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    border: "1px solid #28547a",
    borderRadius: "4px",
    overflow: "scroll",
  },
};

const Signup = (props) => {
  //const classes = useStyles();
  const [success, setSuccess] = useState(false);
  const [file, setFile] = useState([]);
  //const [profile,setProfile] = useState(undefined);
  //const [cover, setCover] = useState(undefined);
  const [showModal, setShowModal] = useState(props.isOpen);
  let firstName;
  let lastName;
  let email;
  let pswd;
  let confirmPswd;
  let dob;
  let gender;
  let relationStatus = "";
  let interests = "";

  const handleCloseModal = () => {
    setShowModal(true);
    props.handleClose(false);
  };

  const fileSelected1 = (e) => {
    const temp = e.target.files[0];

    //setFile(oldArray => [...oldArray,temp]);
    setFile(temp);
    //setProfile(temp);
  };

  /* const fileSelected2 = (e) => {
        const temp = e.target.files[0];
        let cover = JSON.parse(JSON.stringify(temp));
        cover.name = "cover";
        setFile(oldArray => [...oldArray,cover]);
        //setCover(temp);
    }*/

  let body = null;

  if (props.modal === "signup") {
    body = (
      <Form
        className="signupForm"
        onSubmit={async (e) => {
          e.preventDefault();
          console.log(file);
          let btn = document.getElementById("sub");
          btn.disabled = true;
          if (!firstName.value) {
            alert("Please enter first name");
            btn.disabled = false;
            return;
          }

          let regf = /^([a-zA-Z]{2,})*$/;
          if (!regf.test(firstName.value)) {
            alert("Please enter valid first name");
            btn.disabled = false;
            return;
          }

          if (!lastName.value) {
            alert("Please enter last name");
            btn.disabled = false;
            return;
          }

          let regl = /^([a-zA-Z]{2,})*$/;
          if (!regl.test(lastName.value)) {
            alert("Please enter valid first name");
            btn.disabled = false;
            return;
          }

          if (!email.value) {
            alert("Please enter email");
            btn.disabled = false;
            return;
          }

          //let regE = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
          let regE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          if (!regE.test(email.value.toLowerCase())) {
            alert("Please enter a valid email");
            btn.disabled = false;
            return;
          }

          if (!pswd.value) {
            alert("Please enter password");
            btn.disabled = false;
            return;
          }

          let regP = /^([a-zA-Z0-9-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]{6,})*$/;
          if (!regP.test(pswd.value)) {
            alert(
              "Password is invalid - should contain at least one digit,should contain at least one lower case, should contain at least one upper case, should contain at least 8 from the mentioned characters"
            );
            btn.disabled = false;
            return;
          }

          if (!confirmPswd.value) {
            alert("Please enter confirm password");
            btn.disabled = false;
            return;
          }

          if (pswd.value !== confirmPswd.value) {
            alert("Passwords don't match");
            btn.disabled = false;
            return;
          }

          if (!dob.value) {
            alert("Please provide your date of birth");
            btn.disabled = false;
            return;
          }

          if (dob.value) {
            let birth = new Date(dob.value);
            var month_diff = Date.now() - birth.getTime();

            //convert the calculated difference in date format
            let age_dt = new Date(month_diff);

            //extract year from date
            let year = age_dt.getUTCFullYear();
            let y = birth.getFullYear();
            let currentYear = new Date().getFullYear();
            //console.log(year);
            //console.log(currentYear);
            if (y > currentYear) {
              alert("Invalid Year");
              dob.value = "";
              btn.disabled = false;
              return;
            }
            //now calculate the age of the user
            let age = Math.abs(year - 1970);
            console.log(age);

            if (!(age > 13 && age < 120)) {
              alert("Should be between age 13 and 120");
              dob.value = "";
              btn.disabled = false;
              return;
            }
          }
          let dateOfBirth = new Date(dob.value + " EST");
          console.log(dateOfBirth);

          dateOfBirth =
            String(dateOfBirth.getMonth() + 1).padStart(2, "0") +
            "/" +
            String(dateOfBirth.getDate()).padStart(2, "0") +
            "/" +
            dateOfBirth.getFullYear();

          if (!gender.value) {
            alert("Please provide gender");
            btn.disabled = false;
            return;
          }
          const genders = ["male", "female", "others", "nodisclosure"];

          if (!genders.includes(gender.value)) {
            alert("Please provide valid gender");
            btn.disabled = false;
            return;
          }
          // console.log(gender.value);

          /*if((gender.value.toString() !== 'male') || 
               (gender.value.toString() !== 'female')
               || (gender.value.toString() !== 'others') ||
                (gender.value.toString() !== 'nodisclosure')){
                    alert("Please provide valid gender");
                   return;
                }*/
          const relationship = [
            "married",
            "single",
            "inarelation",
            "nodisclosure",
          ];
          console.log(relationStatus.value);
          if (relationStatus.value) {
            console.log(relationStatus.value);
            if (!relationship.includes(relationStatus.value)) {
              alert("Please provide valid relation status");
              btn.disabled = false;
              return;
            }
          }

          //let image = JSON.stringify(file);

          // console.log(file[0]);
          //console.log(file[1]);

          let user = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: pswd.value,
            dateOfBirth: dateOfBirth,
            gender: gender.value,
            relationshipStatus: relationStatus.value,
            interestedIn: interests.value,
          };
          let formData = new FormData();
          formData.append("firstName", firstName.value);
          formData.append("lastName", lastName.value);
          formData.append("email", email.value);
          formData.append("password", pswd.value);
          formData.append("dateOfBirth", dateOfBirth);
          formData.append("gender", gender.value);
          formData.append("relationshipStatus", relationStatus.value);
          formData.append("interestedIn", interests.value);
          //formData.append("profileImage", file);
          //console.log(formData.get('profileImage'));

          //formData.append("user",JSON.stringify(user));
          formData.append("file", file);
          /*  console.log(file);
               console.log("Printing object");
               file.forEach((f) => {
                   console.log(f);
                   formData.append("files", f)
            })*/

          // let temp = JSON.stringify(user);
          //formData.append("user",temp);
          let flag = false;
          let url = "http:/localhost:3000/signup";
          //console.log(user);
          //let msg = await axios.post('http:/localhost:3000/signup', user);
          const { data } = await axios.post(
            `http://localhost:3000/signup`,
            formData,
            {
              validateStatus: function (status) {
                return status < 500; // Resolve only if the status code is less than 500
              },
              headers: {
                "Content-Type":
                  "multipart/form-data; boundary=${form._boundary}",
              },
            }
          );
          /* .then(function (response) {
                    console.log(response);
                    if(response.status === 200){
                        alert("User registered");
                        flag = true;
                    }
                  })
                  .catch(function (error) {
                    console.log(error);
                    //setSuccess(false);
                    alert("There was some error please try again");
                   
                  });*/
          console.log(data.error);
          if (!("error" in data)) {
            alert("User registered");
            flag = true;
          } else {
            btn.disabled = false;
            alert(data.error);
          }
          e.target.reset();
          btn.disabled = false;
          if (flag) {
            setShowModal(true);
            props.handleClose(false);
          }
        }}
      >
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Default file input example</Form.Label>
          <Form.Control
            onChange={fileSelected1}
            name="file"
            type="file"
            accept="image/*"
          />
        </Form.Group>
        {/* <form method="post" action="/" enctype="multipart/form-data">
          <label class="mr-sm-2" for="inlineFormCustomSelect">
            Select a file to upload
          </label>
          <div class="form-row align-items-center">
            <div class="custom-file">
              <input
                onChange={fileSelected1}
                name="file"
                type="file"
                accept="image/*"
              ></input>
              <label class="custom-file-label" for="customFile">
                Choose file
              </label>
            </div>
          </div>
        </form> */}
        <Row className="mb-4">
          <Form.Group as={Col}>
            <FloatingLabel
              controlId="firstName"
              label="First Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="First Name"
                className="textform"
                ref={(node) => {
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
              <Form.Control
                required
                type="text"
                placeholder="Last Name"
                className="textform"
                ref={(node) => {
                  lastName = node;
                }}
              />
            </FloatingLabel>
          </Form.Group>
        </Row>

        <Form.Group>
          <FloatingLabel controlId="email" label="Email" className="mb-3">
            <Form.Control
              required
              type="email"
              placeholder="name@example.com"
              className="textform"
              ref={(node) => {
                email = node;
              }}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingPassword"
            label="Password"
            className="mb-3"
          >
            <Form.Control
              required
              type="password"
              placeholder="Password"
              className="textform"
              ref={(node) => {
                pswd = node;
              }}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingCPassword"
            label="Confirm Password"
            className="mb-3"
          >
            <Form.Control
              required
              type="password"
              placeholder="Confirm Password"
              className="textform"
              ref={(node) => {
                confirmPswd = node;
              }}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="date"
            label="Date of Birth"
            className="mb-3"
          >
            <Form.Control
              required
              type="date"
              placeholder="Date of Birth"
              className="textform"
              ref={(node) => {
                dob = node;
              }}
            />
          </FloatingLabel>

          <Form.Label className="select">
            Gender
            <Form.Select
              required
              aria-label="Gender"
              size="lg"
              className="textform"
              ref={(node) => {
                gender = node;
              }}
            >
              <option></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
              <option value="nodisclosure">Prefer not to disclose</option>
            </Form.Select>
          </Form.Label>

          <Form.Label className="select">
            Relationship Status
            <Form.Select
              aria-label="relationship status"
              className="textform"
              size="lg"
              ref={(node) => {
                relationStatus = node;
              }}
            >
              <option></option>
              <option value="married">Married</option>
              <option value="single">Single</option>
              <option value="inarelation">In a Relationship</option>
              <option value="nodisclosure">Prefer not to disclose</option>
            </Form.Select>
          </Form.Label>

          <FloatingLabel
            controlId="floatingtextarea"
            label="Interests"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              rows={10}
              placeholder="Interests"
              className="textarea"
              ref={(node) => {
                interests = node;
              }}
            />
          </FloatingLabel>
        </Form.Group>
        <Button id="sub" variant="primary" type="submit" className="submit">
          Submit
        </Button>
      </Form>
    );
  }

  return (
    <div className="App-body pt-5 mt-5">
      <ReactModal
        name="signupModal"
        isOpen={showModal}
        contentLabel="Signup Modal"
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          },
          content: {
            marginLeft: "400px",
            width: "500px",
            height: "410px",
            position: "relative",
            top: "30px",
            left: "30px",
            right: "30px",
            bottom: "30px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "auto",
            borderRadius: "10px",
            padding: "20px",
          },
        }}
      >
        <h4>Signup Form</h4>
        <Container>
          <Row>{body}</Row>
          <Row>
            <Button
              variant="danger"
              className="button cancel-button"
              onClick={handleCloseModal}
            >
              Cancel
            </Button>
          </Row>
        </Container>
      </ReactModal>
    </div>
  );
};

export default Signup;
