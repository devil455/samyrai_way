import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Navbar from './components/Navbar/Navbar.js';
import Profile from './components/Profile/Profile.js';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className='app-wrapper-contents'>
          <Routes>
            <Route path='/dialogs/' element={<Dialogs dialogsData={props.state.messagesPage.dialogsData} Messages={props.state.messagesPage.Messages}/>} />
            <Route path='/profile' element={<Profile profilePost={props.state.profilePage.profilePost}/>} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/friends' element={<Friends friends={props.state.friends}/>} />

          </Routes>
        </div>
        <Navbar />
        <Header />
      </div>
    </BrowserRouter>);
}

export default App;
