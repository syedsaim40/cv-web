import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Home from './Home';
import NavigationBar from './NavigationBar';
import Hello from './Prc';

function App() {
  return (
    <div className="App">
      
      <Router>
        <NavigationBar></NavigationBar>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
      </Router> 
    </div>
  );
}

export default App;
