import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Search from './components/Search';
import AnimeDetail from './components/AnimeDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/anime/:id" component={AnimeDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
