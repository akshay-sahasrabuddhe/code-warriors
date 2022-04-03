import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Signup from './components/Signup';
import Login from './components/Login';
import News from './components/News';
import Weather from './components/Weather'
import Posts  from './components/Posts';
import './App.css';
import {BrowserRouter as Router, Routes ,Route, Link} from 'react-router-dom';

function App() {
  return (
   
      <div className="App">
   
        <header className="App-header">
          <h1>Welcome to DuckBook</h1>
          
          
          {/* <Link className='App-link' to='signup'>Signup</Link>
          <Link className='App-link' to='login'>Login</Link> */}
          
        </header>
        
        <div className='App-body pt-5 pb-5'>
        <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-6 offset-md-3'>
            <div className='row'>
              <div className='col-sm-12'>
                <Routes>
                  <Route index path = '/' element={<Login />}/>
                  <Route path = '/posts' element={<Posts />}/>
                  <Route path= '/news' element={<News />} />
                  <Route path= '/weather' element={<Weather />}/>
                </Routes>
              </div>
            </div>  
          </div>
          </div>
          </div>
        </div>
      </div>
    
  );
}

export default App;
