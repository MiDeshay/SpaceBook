import React from "react";
import { connect } from "react-redux";
import { Route } from 'react-router-dom';
import { Redirect, withRouter } from "react-router-dom/cjs/react-router-dom.min";

const Auth = ({component: Component, path, loggedIn, exact}) => (
    <Route 
    path={path}
    exact={exact}
    render={props => 
    !loggedIn ? <Component {...props}/> : <Redirect to="/home"/>}
    />
)

const HomeAuth = ({component: Component, path, loggedIn, exact}) => (
    <Route 
    path={path}
    exact={exact}
    render={props => 
    loggedIn ? <Component {...props}/> : <Redirect to="/login"/>}
    />
)

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id)}
}

export const AuthRoute = withRouter(
    connect(mapStateToProps, null)(Auth)
)

export const HomeAuthRoute = withRouter(
    connect(mapStateToProps, null)(HomeAuth)
)