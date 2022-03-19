import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Signup from './components/Signup';
import Login from './components/Login';
import News from './components/News';
import './App.css';
import {BrowserRouter as Router, Routes ,Route, Link} from 'react-router-dom';

function App() {
  return (
   
      <div className="App">
   
        <header className="App-header">
          <h1>Welcome to DuckBook</h1>
          <Link className='App-link' to='signup'>Signup</Link>
          <Link className='App-link' to='login'>Login</Link>
          <Link className='App-link' to='news'>News</Link>
          {/* <Link className='App-link' to='signup'>Signup</Link>
          <Link className='App-link' to='login'>Login</Link> */}
          <Navigation></Navigation>
        </header>
        
        <div className='App-body pt-5 pb-5'>
          <Routes>
            
            <Route  path = '/signup' element={<Signup />}/>
            <Route  path = '/login' element={<Login />}/>

            <Route path= '/news' element={<News />} />
          </Routes>
        </div>
       
      </div>
    
  );
}

export default App;
