import React from "react";

class SignUpModal extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        const errors = this.props.errors ? this.props.errors[0] : ""
        return(
    
            <div id="signup-modal-conatainer">
            <div id="signup-modal">
                <div id="signup-header">
                    <div>
                        <h2 id="signup-title"> Sign Up</h2>
                    </div>
                    <button id="signup-close-button" onClick={this.props.handleCloseSignUp}></button>
                </div>
                
                <form>
                    <h4 className="session-errors">{errors}</h4>
                    <div id="signup-name">
                        <input placeholder="First Name" className="signup-small-input" id="login-fname" type="text" value={this.props.state.first_name} onChange={this.props.handleInput('first_name')}/>
                        <input placeholder="Last Name" className="signup-small-input" id="login-lname"type="text" value={this.props.state.last_name} onChange={this.props.handleInput('last_name')}/>
                    </div>
                    
                    <br/>
                    <input className="signup-input" placeholder="Email" className="signup-input" type="text" value={this.props.state.email} onChange={this.props.handleInput('email')}/>
                    <br/>
                    <input className="signup-input" placeholder="New Password" id="signup-password" className="signup-input" type="password" value={this.props.state.password} onChange={this.props.handleInput('password')}/>
                  
                    <br/>
                    <button id="signup-button" onClick={this.props.handleSignUp}>Sign Up</button>
                </form>

            </div>
            </div>
        )
    }
}

export default SignUpModal