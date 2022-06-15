// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Banner from './components/Banner';
import MovieScroller from './components/MovieScroller';
// import requests from './components/APIrequests.js'
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <MovieScroller 
        largeImage
        title='Neflix Originals'
        img ='https://flxt.tmsimg.com/assets/p14166741_b_h8_ai.jpg'
        
      />
    </div>
  );
}

export default App;
