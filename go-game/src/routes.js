import React from 'react';
import {BrowserRouter,  Route, Redirect, Switch} from 'react-router-dom';

import Welcome from '././components/Welcome/Welcome';
import Home from '././components/Home/Home';
import Login from '././components/Login/Login';
import Signup from '././components/Signup/Signup';
import FindGameAsGuest from '././components/FindGame/FindGameAsGuest/FindGameAsGuest';


const Routes = () => (
  <BrowserRouter >
      <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route path="/home" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/findGameAsGuest" component={FindGameAsGuest}/>
      </Switch>
  </BrowserRouter>
);

export default Routes;
