import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            first_name: "",
            last_name: "",
            password: ""  
        }
        
        this.showSignUpForm = false
        this.handleSignUp = this.handleSignUp.bind(this)
        this.handleLogin =  this.handleLogin.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.loginDemoUser = this.loginDemoUser.bind(this)
        this.handleShowSignUp = this.handleShowSignUp.bind(this)
        this.handleCloseSignUp = this.handleCloseSignUp.bind(this)
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
        console.log(this.state)
    }

    handleSignUp(e){
        e.preventDefault()
        this.props.signup(this.state)
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
        <div id="login-container">
            <div id="login-form">
                <form>
                <h4 className="session-errors">{errors}</h4>
                    <input placeholder="Email" className="login-input" type="text" value={this.state.email} onChange={this.handleInput('email')}/>
                    <br/>
                    <input placeholder="Password" className="login-input" type="password" value={this.state.password} onChange={this.handleInput('password')}/>
                    <br/>
                    <button id="login-button" onClick={this.handleLogin}>Login</button>
                </form>
            </div>
            <div id="login-footer">
                <button id="demo-login-button" onClick={this.loginDemoUser}>Demo User Login</button>
                <br/>
                <button id="new-account-button" onClick={this.handleShowSignUp}>
                    Create New Account
                </button>
                
            </div>  
        </div>
        {this.showSignUpForm ? 
        (<div id="signup-modal-conatainer">
            <div id="signup-modal">
                <div id="signup-header">
                    <div>
                        <h2 id="signup-title"> Sign Up</h2>
                    </div>
                    <button id="signup-close-button" onClick={this.handleCloseSignUp}></button>
                </div>
                
                <form>
                    <h4 className="session-errors">{errors}</h4>
                    <div id="signup-name">
                        <input placeholder="First Name" className="signup-small-input" id="login-fname" type="text" value={this.state.first_name} onChange={this.handleInput('first_name')}/>
                        <input placeholder="Last Name" className="signup-small-input" id="login-lname"type="text" value={this.state.last_name} onChange={this.handleInput('last_name')}/>
                    </div>
                    
                    <br/>
                    <input className="signup-input" placeholder="Email" className="signup-input" type="text" value={this.state.email} onChange={this.handleInput('email')}/>
                    <br/>
                    <input className="signup-input" placeholder="New Password" id="signup-password" className="signup-input" type="password" value={this.state.password} onChange={this.handleInput('password')}/>
                  
                    <br/>
                    <button id="signup-button" onClick={this.handleSignUp}>Sign Up</button>
                </form>

            </div>
            </div>) : ("")}
        </div>
         

        return(
           <>
           {form}
           </>
        )
    }
}

export default SessionForm