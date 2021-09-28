import React from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom';

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
        const location = this.props.location;

        const display = this.props.currentUser ? (<div>
            <h1>Welcome, {this.props.currentUser.firstName}</h1>
            <button onClick={this.props.logout}>Log Out</button>
        </div>) : ("")
       


        return(
            <div>
              {display}
            </div>
         )
    }
    
}

export default withRouter(Greeting)