import React from 'react';

import LoginFormContainer from './session_form/login_form_container';
import { Switch, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthRoute, HomeAuthRoute } from '../util/route_util';
import ProfileContainer from './profile/profile_container';

const App = () => (
    <div>
        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer}/>
            <HomeAuthRoute path="/home" component={ProfileContainer}/>
            <Redirect from="/" to="home"/>
            
        </Switch>
    </div>
);

export default App;