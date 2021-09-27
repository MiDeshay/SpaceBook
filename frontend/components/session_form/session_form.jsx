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
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.processForm(this.state)
    }

    handleInput(type){
        return (e) => this.setState({[type]: e.currentTarget.value})
    }

    render(){
        const errors = this.props.errors ? this.props.errors[0] : ""

        const signUpForm =  <div>
        <h2>Sign Up</h2>
        <Link to="/login"> Login</Link>
        <h4>{errors}</h4>
        <form>
            <label>Email:
                <input type="text" value={this.state.email} onChange={this.handleInput('email')}/>
            </label>
            <label>First Name:
                <input type="text" value={this.state.first_name} onChange={this.handleInput('first_name')}/>
            </label>
            <label>Last Name:
                <input type="text" value={this.state.last_name} onChange={this.handleInput('last_name')}/>
            </label>
            <label>Password:
                <input type="password" value={this.state.password} onChange={this.handleInput('password')}/>
            </label>
            <button onClick={this.handleSubmit}>Sign Up</button>
        </form>

    </div>

    const loginForm = <div>
        <form>
        <h2>Login</h2>
        <Link to="/signup"> Sign Up</Link>
        <h4>{errors}</h4>
            <label>Email:
                <input type="text" value={this.state.email} onChange={this.handleInput('email')}/>
            </label>
            <label>Password:
                <input type="password" value={this.state.password} onChange={this.handleInput('password')}/>
            </label>
            <button onClick={this.handleSubmit}>Login</button>

        </form>
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