import React from 'react';
import logo from './logo.svg';
import Signup from './components/Signup';
import Login from './components/Login';
import './App.css';
import {BrowserRouter as Router, Routes ,Route, Link} from 'react-router-dom';

function App() {
  return (
   
      <div className="App">
        <header className="App-header">
          <h1>Welcome to DuckBook</h1>
          <Link className='App-link' to='signup'>Signup</Link>
          
        </header>
        
        <div className='App-body'>
          <Routes>
          <Route  path = '/signup' element={<Signup />}/>
          </Routes>
        </div>
       
      </div>
    
  );
}

export default App;
