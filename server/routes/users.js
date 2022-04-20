const express = require('express');
const router = express.Router();
const data = require('../data');
const usersData=data.users;
const jwt= require('jsonwebtoken')
const nodemailer= require('nodemailer')
const crypto = require('crypto')


function signUpCheck(firstName,lastName,email,password,dateOfBirth,gender,interestedIn,relationshipStatus,hobbies,location)
{

    


    if(!firstName)                                                             //firstName check 
    {
        throw 'please enter firstName'
    }
    else if(firstName)
    {

        if(!isString(firstName))
        {
            throw 'Enter firstName as string';
        }
        else if(check_for_spaces(firstName))
        {
            throw "Enter firstName without spaces"
        }
        else if(/^([a-zA-Z0-9]{4,})*$/.test(firstName)==false)
        {
            throw 'firstName should be at least four characters without spaces'
        }


    }



    if(!lastName)                                                               //lastName check 
    {
        throw 'please enter lastName'
    }
    else if(lastName)
    {

        if(!isString(lastName))
        {
            throw 'Enter lastName as string';
        }
        else if(check_for_spaces(lastName))
        {
            throw "Enter lastName without spaces"
        }
        else if(/^([a-zA-Z0-9]{4,})*$/.test(lastName)==false)
        {
            throw 'lastName should be at least four characters without spaces'
        }


    }
    

    if(!password)                                                                 //password check 
    {
        throw 'please enter password'
    }
    else if(password)
    {

        if(!isString(password))
        {
            throw 'Enter password as string';
        }
        else if(check_for_spaces(password))
        {
            throw "Enter password without spaces"
        }
        else if(/^([a-zA-Z0-9-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]{6,})*$/.test(password)==false)
        {
            throw 'password should be at least six characters without spaces'
        }


    }




    if(!email)                                                                    //email check 
    {
        throw 'please enter email'
    }
    else if(email)
    {

        if(!isString(email))
        {
            throw 'Enter email as string';
        }
        else if(check_for_spaces(email))
        {
            throw "Enter email without spaces"
        }
        else if((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email.toLowerCase())==false)
        {
            throw "Email is in wrong format, please check";
        }


    }



    if(!dateOfBirth)                                                              //dateOfBirth check
    {
        throw 'please enter dateOfBirth'
    }
    else if(dateOfBirth)
    {

        if(!isString(dateOfBirth))
        {
            throw 'Enter dateOfBirth as string';
        }
        else if(check_for_spaces(dateOfBirth))
        {
            throw "Enter dateOfBirth without spaces"
        }
        else if(!isDate(dateOfBirth))
        {
            throw 'Please enter a correct DOB in the format mm/dd/yyyy'
        }

        let age=dateOfBirthCheck(dateOfBirth)

        if(!(age>13 && age<120))
        {
            throw 'Sorry your age is not appropriate'
        } 


    }



    if(!gender)                                                              //gender check
    {
        throw 'please enter gender'
    }
    else if(gender)
    {

        if(!isString(gender))
        {
            throw 'Enter gender as string';
        }
        else if(check_for_spaces(gender))
        {
            throw "Enter gender without spaces"
        }
        else if(gender!="Male" && gender!="Female" && gender!="Others" && gender!="Prefer not to disclose")
        {

            throw 'Please enter a valid gender Male, Female , Others, Prefer not to disclose'
        }
        

    }




    if(hobbies)                                                              //hobbies check             
    {

        if(Array.isArray(hobbies) && hobbies.length>0)
        {
            for(let i=0;i<hobbies.length;i++)
            {
    
                if(typeof hobbies[i]!= 'string')
                {
                    throw "Enter only strings in hobbies";
                }
                else if(check_for_spaces(hobbies[i]))
                {
                    throw "hobbies should not contain empty data"
                }
            }
    
        }
        else
        {
            throw "Enter hobbies as array of strings"
        }

    }



    if(interestedIn)                                                            //interestedIn check             
    {

        if(!isString(interestedIn))
        {
            throw 'Enter interestedIn as string';
        }
        else if(check_for_spaces(interestedIn))
        {
            throw "Enter interestedIn without spaces"
        }
      

    }



    if(relationshipStatus)                                                       //relationshipStatus check             
    {

        if(!isString(relationshipStatus))
        {
            throw 'Enter relationshipStatus as string';
        }
        else if(check_for_spaces(relationshipStatus))
        {
            throw "Enter relationshipStatus without spaces"
        }
      

    }


    if(location)                                                              //location check             
    {

        if(!isString(location))
        {
            throw 'Enter location as string';
        }
        else if(check_for_spaces(location))
        {
            throw "Enter location without spaces"
        }
      

    }

    
}




function loginCheck(email,password)
{


    if(!email)                                                                    //email check 
    {
        throw 'please enter email'
    }
    else if(email)
    {

        if(!isString(email))
        {
            throw 'Enter email as string';
        }
        else if(check_for_spaces(email))
        {
            throw "Enter email without spaces"
        }
        else if((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email.toLowerCase())==false)
        {
            throw "Email is in wrong format, please check";
        }


    }




    if(!password)                                                                 //password check 
    {
        throw 'please enter password'
    }
    else if(password)
    {

        if(!isString(password))
        {
            throw 'Enter password as string';
        }
        else if(check_for_spaces(password))
        {
            throw "Enter password without spaces"
        }
        else if(/^([a-zA-Z0-9-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]{6,})*$/.test(password)==false)
        {
            throw 'password should be at least six characters'
        }


    }





}



function dateOfBirthCheck(dateOfBirth)
{

    var dob = new Date(dateOfBirth);  
    //calculate month difference from current date in time  
    var month_diff = Date.now() - dob.getTime();  
      
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);   
      
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
      
    //now calculate the age of the user  
    var age = Math.abs(year - 1970); 

    return age
}



function isDate(ExpiryDate) { 
    var objDate,   
        mSeconds,  
        day,      
        month,     
        year;       
    if (ExpiryDate.length !== 10) { 
        return false; 
    }  
    if (ExpiryDate.substring(2, 3) !== '/' || ExpiryDate.substring(5, 6) !== '/') { 
        return false; 
    } 
    month = ExpiryDate.substring(0, 2) - 1; 
    day = ExpiryDate.substring(3, 5) - 0; 
    year = ExpiryDate.substring(6, 10) - 0; 

    if (year < 1000 || year > 3000) { 
        return false; 
    } 
 
    mSeconds = (new Date(year, month, day)).getTime(); 
    objDate = new Date(); 
    objDate.setTime(mSeconds); 

    if (objDate.getFullYear() !== year || 
        objDate.getMonth() !== month || 
        objDate.getDate() !== day) { 
        return false; 
    } 

    return true; 
}




function check_for_spaces(string)               //common code for strings
{
string=string.trim()
if(string.length>0)
{
  return false;
}
else
{
  return true;
}
}


function isString(x)                    //common code for strings
{
  return Object.prototype.toString.call(x) === "[object String]"
}











router.post("/signup", async(req,res)=>{


const{firstName,lastName,email,password,dateOfBirth,gender,interestedIn,relationshipStatus,hobbies,location}=req.body


try{

    signUpCheck(firstName,lastName,email,password,dateOfBirth,gender,interestedIn,relationshipStatus,hobbies,location)

    let user= await usersData.signUp(firstName,lastName,email,password,dateOfBirth,gender,interestedIn,relationshipStatus,hobbies,location)

    res.json({signup:"Successful"}).status(200)

}

catch(e)
{

    res.status(400).json({error:e}) 

}


})








router.post('/login', async(req,res)=>{


    let email=req.body.email;
    let password=req.body.password;
  
    try{
  
      loginCheck(email,password)
    }

      catch(e)
    {
      res.status(400).json({error:e}) 
  
    }


    try{
  
        const login= await usersData.login(req.body.email,req.body.password)
  
        req.session.user={email : login.email, _id : login._id}
      
        res.status(200).json(login)
      }
  
        catch(e)
      {
        res.status(403).json({error:e}) 
    
      }
     
  
    
  
  })




  router.get('/logout',async(req,res)=>{

    if(req.session.user)
    {
    req.session.destroy()
    
    res.clearCookie('AuthCookie')
  
    res.status(200).json({user: "logged out"})
    }
  
  
  
    })
  









module.exports = router;