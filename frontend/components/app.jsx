import React from 'react';
import { Link, Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import HomePage from "./home/home_page"
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <header id="app-header">
            <div id="logo">
                <Link id="logo-text" to="/">Spacebook</Link>
            </div>
            <GreetingContainer/>
        </header>
        
        <AuthRoute path="/login" component={LoginFormContainer}/>
        <AuthRoute path="/signup" component={SignupFormContainer}/>
        <Route exact path="/" component={HomePage}/>
    </div>
);

export default App;