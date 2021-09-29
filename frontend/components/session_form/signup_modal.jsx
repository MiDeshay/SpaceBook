import React from "react";

class SignUpModal extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: "",
            first_name: "",
            last_name: "",
            password: "",  
            birthday: null,
            gender: "",
            pronouns: null,
        }

    
        this.addDays = this.addDays.bind(this)
        this.addYears = this.addYears.bind(this)
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.updateBirthday = this.updateBirthday.bind(this);
        this.updateGender = this.updateGender.bind(this);
        this.updatePronouns = this.updatePronouns.bind(this);
        this.revealCustomOptions = this.revealCustomOptions.bind(this)
        this.hideCustomOptions = this.hideCustomOptions.bind(this)
    }

    handleSignUp(e){
        e.preventDefault()
        this.props.signup(this.state)
    }

    handleInput(type){
        return (e) => this.setState({[type]: e.currentTarget.value})
    }

    updateBirthday(){
        const day = document.getElementById("day").value;
        const year = document.getElementById("year").value;
        const month = document.getElementById("month").value -1;

        const newDate = new Date(year, month, day)
        this.state['birthday'] = newDate;
    }

    updateGender(e){
        this.state['gender'] = e.currentTarget.value;

        if(this.state.gender === "Female"){
            this.state["pronouns"] = 'she';
            this.hideCustomOptions()
        } else if (this.state.gender === "Male"){
            this.state["pronouns"] = 'he';
            this.hideCustomOptions()
        } else{
            this.state["pronouns"] = ''
        }
        
        console.log(this.state)
        this.setState({state: this.state})
    }

    updatePronouns(e){
        console.log(this.state)
        this.state['pronouns'] = e.currentTarget.value;
    }

    hideCustomOptions(){
        const options = document.getElementById("custom-options");
        const modal = document.getElementById("signup-modal")
        modal.style.height = "470px"
        if(options){
            options.style.display = "none"

        }
    }

    revealCustomOptions(){
        const options = document.getElementById("custom-options");
        options.style.display = "block"
        const modal = document.getElementById("signup-modal")
        modal.style.height = "585px"

        this.state['gender'] = ""
        this.state['pronouns'] = ""
        this.setState({state: this.state})
        console.log(this.state)
    }

    componentDidMount(){
        this.addDays()
        this.addYears()
        this.updateBirthday()
    }


    addDays(){
        const days = document.getElementById("day");
        for(let i=1; i < 32; i++){
            days.options[days.options.length] = new Option (i, i)             
        }
    }

    addYears(){
        const years = document.getElementById("year");
        const currentYear = new Date().getFullYear()

        this.years =[]
        for(let i=currentYear; i > 1900; i--){
            years.options[year.options.length] = new Option (i, i)                       
        }
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
                    <h4 id="modal-errors">{errors}</h4>
                    <div id="signup-name">
                        <input placeholder="First Name" className="signup-small-input" id="login-fname" type="text" value={this.state.first_name} onChange={this.handleInput('first_name')}/>
                        <input placeholder="Last Name" className="signup-small-input" id="login-lname"type="text" value={this.state.last_name} onChange={this.handleInput('last_name')}/>
                    </div>
                    
                    <br/>
                    <input className="signup-input" placeholder="Email" className="signup-input" type="text" value={this.state.email} onChange={this.handleInput('email')}/>
                    <br/>
                    <input className="signup-input" placeholder="New Password" id="signup-password" className="signup-input" type="password" value={this.state.password} onChange={this.handleInput('password')}/>

                    <div id="birthday/gender-container"> 
                        <div id="birthday-container">
                            <h5 className="signup-subheader">Birthday</h5>
                            <div id="birthday-dropdowns">
                                <select onChange={this.updateBirthday} className="birthday-input" id="month">
                                    <option value="1">Jan</option>
                                    <option value="2">Feb</option>
                                    <option value="3">Mar</option>
                                    <option value="4">Apr</option>
                                    <option value="5">May</option>
                                    <option value="6">Jun</option>
                                    <option value="7">Jul</option>
                                    <option value="8">Aug</option>
                                    <option value="9">Sep</option>
                                    <option value="10">Oct</option>
                                    <option value="11">Nov</option>
                                    <option value="12">Dec</option>
                                </select>
                                <select onChange={this.updateBirthday} className="birthday-input" id="day"></select>
                                <select onChange={this.updateBirthday} className="birthday-input" id="year"></select>
                            </div>
                        </div>
                        <div id="gender-div">
                            <h5 className="signup-subheader">Gender</h5>
                            <div id="gender-container">
                                <div className="gender-dropdowns" id="female-block">
                                    <label className="gender-label" htmlFor="female">Female</label>
                                    <input className="gender-radio-input" id="female" type="radio" name="gender" value="Female" onClick={this.updateGender}/>
                                </div>
                                <div className="gender-dropdowns" id="male-block">
                                    <label className="gender-label" htmlFor="male">Male</label>
                                    <input className="gender-radio-input" id="male" type="radio" name="gender" value="Male" onClick={this.updateGender}/>
                                </div>
                                <div className="gender-dropdowns" id="custom-block">
                                    <label className="gender-label" htmlFor="custom">Custom</label>
                                    <input className="gender-radio-input" id="custom" type="radio" name="gender" value="Custom" onClick={this.revealCustomOptions}/>
                                </div>
                            </div>
                            

                        </div>
                        <div id="custom-options">
                            <select id="pronouns-dropdown" onChange={this.updatePronouns} >
                                <option value="" defaultValue>Select your pronoun</option>
                                <option value="she">She: "Wish her a happy birthday!"</option>
                                <option value="he">He: "Wish him a happy birthday!"</option>
                                <option value="they">They: "Wish them a happy birthday!"</option>
                            </select>
                            <input id="gender-input" type="text" placeholder="Gender (optional)" value={this.state.gender} onChange={this.updateGender}/>
                        </div>

                    </div>
                    <br/>
                    <button id="signup-button" onClick={this.handleSignUp}>Sign Up</button>
                </form>

            </div>
            </div>
        )
    }
}

export default SignUpModal