import React from 'react';


class PostForm extends React.Component{
    constructor(props){
        super(props)
        this.showSubmit = false

        this.state = this.props.post
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateBody = this.updateBody.bind(this)
        
    }

    componentDidMount(){
        this.toggleSubmitButton("off")
    }

    toggleSubmitButton(action){
        const button = document.getElementById("post-submit-button");

        if(action === "on"){
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
        
        if(!this.showSubmit && e.target.value != ""){
            this.showSubmit = true
            this.toggleSubmitButton("on")
        } else if (this.showSubmit && e.target.value === ""){
            this.showSubmit = false
            this.toggleSubmitButton("off")
        }

        this.setState({body: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state);
        this.setState({body: ""})
        this.hideModal();
        this.toggleSubmitButton("off");
        this.showSubmit = false;

    }

    hideModal(){
        const modal = document.getElementById("post-container");
        console.log("clicked")
        modal.style.display="none"
    }

    render(){
        const { formType, submitType, currentUser} = this.props
    
        
        return(
            <div id="post-modal-conatianer">

                <div id="post-modal">
                    <button id="post-close-button" onClick={this.hideModal}></button>
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
        )
    }
}

export default PostForm