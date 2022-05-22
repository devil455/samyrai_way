import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Navbar from './components/Navbar/Navbar.js';
import Profile from './components/Profile/Profile.js';



const App = () => {
  return (
    <div className="app-wrapper">
      <div className='app-wrapper-contents'>
        <Profile />
      </div>
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
