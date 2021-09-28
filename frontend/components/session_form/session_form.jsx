import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            first_name: "",
            last_name: "",
            password: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.loginDemoUser = this.loginDemoUser.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.processForm(this.state)
    }

    loginDemoUser(){
        const demoUser = {
            email: "demo",
            password: "password"
        }

        this.props.processForm(demoUser)
    }

    handleInput(type){
        return (e) => this.setState({[type]: e.currentTarget.value})
    }

    render(){
        const errors = this.props.errors ? this.props.errors[0] : ""

        const signUpForm =  
        <div id="signup-modal-conatiner">
            <div id="signup-modal">
                <h4 className="session-errors">{errors}</h4>
                <form>
                    <label>Email:
                        <input className="signup-input" type="text" value={this.state.email} onChange={this.handleInput('email')}/>
                    </label>
                    <label>First Name:
                        <input className="signup-input" id="login-fname" type="text" value={this.state.first_name} onChange={this.handleInput('first_name')}/>
                    </label>
                    <label>Last Name:
                        <input className="signup-input" id="login-lname"type="text" value={this.state.last_name} onChange={this.handleInput('last_name')}/>
                    </label>
                    <label>Password:
                        <input className="signup-input" type="password" value={this.state.password} onChange={this.handleInput('password')}/>
                    </label>
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
            </div>

            <div id="signup-footer">
                <Link to="/"> 
                    <button id="login-button">
                        Login
                    </button>
                </Link>
            </div>
        </div>
        
        



    const loginForm = 
    <div id="login-container">
        
        <div id="login-form">
            <form>
            <h4 className="session-errors">{errors}</h4>
                <input placeholder="Email" className="login-input" type="text" value={this.state.email} onChange={this.handleInput('email')}/>
                <br/>
                <input placeholder="Password" className="login-input" type="password" value={this.state.password} onChange={this.handleInput('password')}/>
                <br/>
                <button id="login-button" onClick={this.handleSubmit}>Login</button>
            </form>
        </div>
        <div id="login-footer">
            <button id="demo-login-button" onClick={this.loginDemoUser}>Demo User Login</button>
            <br/>
            <Link to="/signup">
                <button id="new-account-button">
                    Create New Account
                </button>
            </Link>
        </div>
        
    </div>
    const form = this.props.formType === "Login" ? loginForm : signUpForm

        return(
           <>
           {form}
           </>
        )
    }
}

export default SessionForm