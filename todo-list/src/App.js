import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Dashboard} />
        </Router>
      </Provider>
    );
  }
}

export default App;
