import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Video from './components/Video';
import AboutUs from './components/AboutUs';


function App() {
  return (
    <div className="App">
     <Header></Header>
     <Video></Video>
     <AboutUs></AboutUs>
    </div>
  );
}

export default App;
