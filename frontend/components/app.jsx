import React from 'react';

import LoginFormContainer from './session_form/login_form_container';
import HomePageContainer from "./home/home_page_container"
import { Switch, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthRoute, HomeAuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer}/>
            <HomeAuthRoute path="/home" component={HomePageContainer}/>
            <Redirect from="/" to="home"/>
            
        </Switch>
    </div>
);

export default App;