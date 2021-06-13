import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './components/Home/Home';
import Navigation from './components/Navigation'
import Login from "./components/Login";
import Register from './components/Register';
import Logout from './components/Logout';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/logout' component={Logout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;