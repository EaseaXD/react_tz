
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import { useState } from 'react';





function App(props) {
  
  return (
    
  <BrowserRouter>
  
  <div className='wrapper'>
  <Header />
  <div className='mainContent'>
    <div className='container ' >
      
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/news/*" element={<News state={props.state} />} />
        <Route path="/login/*" element={<Login />} />
        
        <Route path="/profile/*" element={<Profile />} />
        
        </Routes>
      
    </div>
    </div>
    <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
