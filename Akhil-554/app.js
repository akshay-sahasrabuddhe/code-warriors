const express = require('express');
const app = express();

const session = require('express-session')

 const configRoutes = require('./routes')



app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(session({
  name: 'AuthCookie',
  secret: 'some secret string!',
  resave: false,
  saveUninitialized: true
}))



app.get('/logout', async(req,res,next)=>
{

    if(!req.session.user)
    {
      res.status(403).json({user:"User is not logged in"});
    }

    else{
      next()
    }

});


app.post('/login', async(req,res,next)=>
{

    if(req.session.user)
    {
      res.status(403).json({user:"User is already logged in"});
    }

    else{
      next()
    }

});

app.post('/signup', async(req,res,next)=>
{

    if(req.session.user)
    {
      res.status(403).json({user:"User is already logged in"});
    }

    else{
      next()
    }

});


configRoutes(app);

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log('Your routes will be running on http://localhost:3000');
});
