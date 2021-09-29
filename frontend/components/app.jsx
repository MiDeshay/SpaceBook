import React from 'react';

import LoginFormContainer from './session_form/login_form_container';
import HomePageContainer from "./home/home_page_container"
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthRoute, HomeAuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer}/>
            <HomeAuthRoute path="/" component={HomePageContainer}/>
        </Switch>
    </div>
);

export default App;