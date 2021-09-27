import React from 'react'
import {Link} from 'react-router-dom'

class Greeting extends React.Component {
    constructor(props){
        super(props);
        this.loginDemoUser = this.loginDemoUser.bind(this)
    }
    loginDemoUser(){
        const demoUser = {
            email: "demo",
            password: "password"
        }

        this.props.login(demoUser)
    }
    
    render() {
        const display = this.props.currentUser ? (<div>
            <h1>Welcome, {this.props.currentUser.firstName}</h1>
            <button onClick={this.props.logout}>Log Out</button>
        </div>) : (<div>
            <Link to="/signUp">Sign Up</Link>
            <br/>
            <Link to="/login">Log In</Link>
            <br/>
            <button onClick={this.loginDemoUser}>Demo User</button>
            
        </div>) 


        return(
            <div>
              {display}
            </div>
         )
    }
    
}

export default Greeting