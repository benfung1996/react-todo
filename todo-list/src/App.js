import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Dashboard} />
    </Router>
  );
}

export default App;
