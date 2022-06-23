// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Banner from './components/Banner';
import MovieScroller from './components/MovieScroller';
import requests from './components/APIrequests.js'
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <MovieScroller 
        largeRow = { true}
        title='Neflix Originals'
        fetchURL={requests.netflixOriginals}        
      />
       <MovieScroller 
        largeRow = { false}
        title='Trending Now'
        fetchURL={requests.trendingNow}        
      />
       <MovieScroller 
        largeRow = { false}
        title='Top Rated'
        fetchURL={requests.topRated}        
      />
       <MovieScroller 
        largeRow = { false}
        title='Action Movies'
        fetchURL={requests.actionMovies}        
      />
       <MovieScroller 
        largeRow = { false}
        title='Romantic Movies'
        fetchURL={requests.documentaries}        
      />
    </div>
  );
}

export default App;
