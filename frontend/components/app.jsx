import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import HomePage from "./home/home_page"
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            <h1>Spacebook</h1>
            <GreetingContainer/>
        </header>
        
        <AuthRoute path="/login" component={LoginFormContainer}/>
        <AuthRoute path="/signup" component={SignupFormContainer}/>
        <Route exact path="/" component={HomePage}/>
    </div>
);

export default App;