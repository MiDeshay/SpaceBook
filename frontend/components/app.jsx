import React from 'react';

import LoginFormContainer from './session_form/login_form_container';
import { Switch, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthRoute, HomeAuthRoute } from '../util/route_util';
import ProfileContainer from './profile/profile_container';
import EditPostContainer from './profile/posts/edit_post_container';

const App = () => (
    <div>

            <HomeAuthRoute path="/home/edit_post/:postId" component={EditPostContainer}/>
            <HomeAuthRoute path="/home" component={ProfileContainer}/>
            <AuthRoute path="/login" component={LoginFormContainer}/>
            <Redirect to="home"/>
            
       
    </div>
);

export default App;