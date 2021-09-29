import React from "react";
import SignUpModal from "./signup_modal"
import { Link } from 'react-router-dom';


class SessionForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            first_name: "",
            last_name: "",
            password: "",  
            birthday: null,
            gender: "",
            pronouns: null,
        }
        
        this.showSignUpForm = false;
        

        
        this.handleLogin =  this.handleLogin.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.loginDemoUser = this.loginDemoUser.bind(this);
        this.handleShowSignUp = this.handleShowSignUp.bind(this);
        this.handleCloseSignUp = this.handleCloseSignUp.bind(this);
        
    }


    handleShowSignUp(){
        this.showSignUpForm = true;
        this.props.removeErrors();
        this.setState( {
            email: "",
            first_name: "",
            last_name: "",
            password: ""  
        });
    }

    handleCloseSignUp(){
       this.showSignUpForm = false;
       this.props.removeErrors();
       this.setState( {
        email: "",
        first_name: "",
        last_name: "",
        password: ""  
    });
       
    }

    

    handleLogin(e){
        e.preventDefault()
        this.props.login(this.state)


    }

    loginDemoUser(){
        const demoUser = {
            email: "demo",
            password: "password"
        }

        this.props.login(demoUser)
    }

    handleInput(type){
        return (e) => this.setState({[type]: e.currentTarget.value})
    }

    render(){
        const errors = this.props.errors ? this.props.errors[0] : ""
        const form =
        <div>
            <header id="app-header">
            <div id="logo">
                <Link id="logo-text" to="/">Spacebook</Link>
            </div>
        </header>
        <div id="login-container">
            <div id="login-form">
                <form>
                <h4 id="form-errors">{errors}</h4>
                    <input placeholder="Email" className="login-input" type="text" value={this.state.email} onChange={this.handleInput('email')}/>
                    <br/>
                    <input placeholder="Password" className="login-input" type="password" value={this.state.password} onChange={this.handleInput('password')}/>
                    <br/>
                    <button id="login-button" onClick={this.handleLogin}>Log In</button>
                </form>
            </div>
            <div id="login-footer">
                <a id="demo-login-button" onClick={this.loginDemoUser}>Demo User Login</a>
                <br/>
                <div id="login-style-line"></div>
                <button id="new-account-button" onClick={this.handleShowSignUp}>
                    Create New Account
                </button>
                
            </div>  
        </div>

        {this.showSignUpForm ? 
        (<SignUpModal 
            errors={this.props.errors} 
            signup={this.props.signup}  
            handleCloseSignUp={this.handleCloseSignUp}/>) : ("")}
        </div>
         

        return(
           <>
           {form}
           </>
        )
    }
}

export default SessionForm