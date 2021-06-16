import React, {useState, useEffect} from 'react';
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
import fire from './fire';
import GiveThings from './components/GiveThings/GiveThings';

function App() {
const [user, setUser] = useState('');
// const [loginValue, setLoginValue] = useState(
//   {
//     mail: '',
//     password: ''
//   }
// )

const authListener = () => {
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      // clearInputs();
      setUser(user);
    } else {
      setUser("");
    }
  })
};

const handleLogout = () => {
  fire.auth().signOut();
}

useEffect(() => {
  authListener();
},[]);


  return (
    <div className="App">
      <Router>
        <Navigation user={user} handleLogout={handleLogout} mail={user.email}/>
        <Switch>
          <Route exact path='/' component={()=> <Home user={user}/>} />
          <Route path='/login' component={() => <Login />} />
          <Route path='/register' component={Register} />
          <Route path='/logout' component={() => <Logout />} />
          <Route path='/giveThings' component={() => <GiveThings />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;