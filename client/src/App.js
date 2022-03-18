import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Signup from './components/Signup';
import Login from './components/Login';
import './App.css';
import {BrowserRouter as Router, Routes ,Route, Link} from 'react-router-dom';

function App() {
  return (
   
      <div className="App">
   
        <header className="App-header">
          {/* <Link className='App-link' to='signup'>Signup</Link>
          <Link className='App-link' to='login'>Login</Link> */}
          <Navigation></Navigation>
        </header>
        
        <div className='App-body pt-5 pb-5'>
          <Routes>
            
            <Route  path = '/signup' element={<Signup />}/>
            <Route  path = '/login' element={<Login />}/>
          </Routes>
        </div>
       
      </div>
    
  );
}

export default App;
