import React, { useContext, useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import firebase from 'firebase/app'
import 'firebase/auth'

import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Home from './Components/Home';
import PageNotFound from './Components/PageNotFound';
import { UserContext } from './Context/UserContext';
import Footer from './Layout/Footer';
import Header from './Layout/Header';




function App() {

  const [user, setUser] = useState(null)
  

  return (
    <Router>
      <UserContext.Provider value= {{user, setUser}}>
      <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='*' component={PageNotFound} />
        </Switch>
        <Footer/>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
