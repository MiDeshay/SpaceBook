import React from 'react';

import LoginFormContainer from './session_form/login_form_container';
import ProfileContainer from "./profile/profile_container"
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthRoute, HomeAuthRoute } from '../util/route_util';
import profile_container from './profile/profile_container';

const App = () => (
    <div>
        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer}/>
            <HomeAuthRoute path="/" component={ProfileContainer}/>
        </Switch>
    </div>
);

export default App;