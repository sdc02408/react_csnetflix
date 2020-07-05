import React from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LandingPage from './views/LandingPage/LandingPage'
import LoginPage from './views/LoginPage/LoginPage'
import RegisterPage from './views/RegisterPage/RegisterPage'
import Auth from '../hoc/auth'
import SearchPage from './views/SearchPage/SearchPage'
import NavBar from './views/NavBar/NavBar'
import FavoritePage from './views/FavoritePage/FavoritePage'

function App() {
  return (
    <Router>
      <NavBar />
        <div style={{paddingTop: '1px', minHeight: 'calc(100vh -80px'}}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage,true)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/searchpage" component={Auth(SearchPage,true)}/>
          <Route exact path="/favorite" component={Auth(FavoritePage,true)}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

