import React from 'react';
import NavBarContainer from "./nav_bar/nav_bar_container";
import LoginFormContainer from './session_form/login_form_container';
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthRoute, HomeAuthRoute } from '../util/route_util';
import ProfileContainer from './profile/profile_container';
import EditPostContainer from './posts/edit_post_container';
import NewsFeedContainer from './newsfeed/newsfeed_container';
import AllUsersIndexContainer from './all_users/all_users_index_container';
import { Switch } from 'react-router';
import PageValidatorContainer from '../page_validator/page_validator_container';



const App = (props) => (
    <div>
        <header>
            <NavBarContainer/>
            <div id="nav-spacer"></div>
        </header>
                
                <HomeAuthRoute path="/everyone" component={AllUsersIndexContainer}/>
                <HomeAuthRoute path="/user/:userId/edit_post/:postId" component={EditPostContainer}/>
                <HomeAuthRoute path="/user/:userId" component={ProfileContainer}/>
                <HomeAuthRoute path="/newsfeed/edit_post/:postId" component={EditPostContainer}/>
                <HomeAuthRoute path="/newsfeed" component={NewsFeedContainer}/>
                <AuthRoute path="/login" component={LoginFormContainer}/>
                <Route path="/" component={PageValidatorContainer} />
               
       
    </div>
);

export default App;