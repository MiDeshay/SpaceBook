import React from 'react';
import {Link, withRouter} from 'react-router-dom';


class EditPostModal extends React.Component{
    constructor(props){
        super(props)
        this.showSubmit = false

        this.state = this.props.post;
        if(this.state){
            this.oldBody = this.state.body;
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateBody = this.updateBody.bind(this)
        
    }

    componentDidMount(){
        
       this.toggleSubmitButton("off"); 
    }

    toggleSubmitButton(action){
        const button = document.getElementById("post-submit-button");
        if(action === "on" ){
            button.style.pointerEvents = "auto"
            button.style.color = "#fff"
            button.style.backgroundColor = "#1877f2"
        }else if (action === "off"){
            button.style.pointerEvents = "none"
            button.style.color = "#bcc0c4"
            button.style.backgroundColor = "#e4e6eb"
        }
    }

    updateBody(e){
        this.setState({body: e.target.value})

        if(e.target.value != this.oldBody){
            console.log("no match")
            this.toggleSubmitButton("on");
        }

        if(e.target.value === this.oldBody){
            console.log("match")
            this.toggleSubmitButton("off");
        } else {
            if(e.target.value != ""){
            this.toggleSubmitButton("on")
            } else if (e.target.value === ""){
            this.toggleSubmitButton("off")
            }
        }

    
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state);
        this.props.history.push("/home")

        //document.getElementById("post-close-button").click()


    }


    render(){
        const { formType, submitType, currentUser} = this.props
        const display = this.props.post != undefined ? ( 
            <div id="post-modal-contianer">
                <div id="post-modal">
                    <Link to="/home" id="post-close-button" onClick={this.hideModal}></Link>
                    <div id="post-header-container">
                        <h3 id="post-modal-header">{formType}</h3>
                    </div>
                    <div id="post-image-container">
                        <div id="small-post-image"></div>
                        <div id="post-username">{currentUser.firstName} {currentUser.lastName}</div>
                    </div>
                    <form id="post-modal-main" onSubmit={this.handleSubmit}>
                        <textarea id="post-text" type="text" placeholder="What's on your mind?" value={this.state.body} onChange={this.updateBody}/>
                        <button id="post-submit-button">{submitType}</button>
                    </form>              
                </div>
            </div>
        ) : this.props.history.push("/home")
        return(
            <>
            {display}
            </>
        )
    }
}

export default withRouter(EditPostModal)