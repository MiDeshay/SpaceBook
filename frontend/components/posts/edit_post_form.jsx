import React from 'react';
import { withRouter} from 'react-router-dom';


class EditPostModal extends React.Component{
    constructor(props){
        super(props)
        this.showSubmit = false
        console.log(this.props.post.id)
        
        this.state = this.props.post
        this.prevFile = null
        
        //prevent crash when refreshing while editing
        if(this.state){
            this.oldState = this.state
            this.oldBody = this.state.body;
            this.state["photoFile"] = null;
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateBody = this.updateBody.bind(this)
        this.hideModal = this.hideModal.bind(this)
        this.handleFile = this.handleFile.bind(this)
        
    }

    componentDidMount(){
        
       this.toggleSubmitButton("off");
       if (this.state){
           if(this.state.photoUrl){
            document.getElementById("remove-picture-button").style.display = "block";
            document.getElementById("post-modal").style.marginTop = "75px"
           }
       } 
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

        

            if(e.target.value != this.oldState){
                this.toggleSubmitButton("on");
            }

            if(e.target.value === this.oldState){
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
        const formData = new FormData();
        
        formData.append("post[body]", this.state.body);
        

        if(this.state.photoUrl != this.oldState.photoUrl){
            if(this.state.photoFile){
                formData.append("post[photo]", this.state.photoFile);
            } else{
                formData.append("post[remove_photo]", true);
            }
        }

        const packet = {id: this.state.id, payload: formData}

        this.props.action(packet);
        this.props.history.goBack()

    }

    hideModal(){
        //console.log(this.props.post)
        document.getElementById(`edit-post-container-${this.state.id}`).style.display = "none"
    }

    handleFile(e){
        const removePictureButton = document.getElementById("remove-picture-button");
        const postModal = document.getElementById("post-modal")
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader()

        if(file){
            fileReader.readAsDataURL(file)
            removePictureButton.style.display = "block";
            postModal.style.marginTop = "70px";
            if (this.state.body){
                this.toggleSubmitButton("on");
            }
            
         
        }
        
        fileReader.onloadend= () => {
            this.setState({photoFile: file, photoUrl: fileReader.result})
        }
        
    }
    removePreview(e){
        e.preventDefault()
        document.getElementById("hidden-file-input").value = ""
        document.getElementById("post-modal").style.marginTop = "120px";
        document.getElementById("remove-picture-button").style.display = "none";

        this.setState({photoFile: null, photoUrl: null})
        if (this.state.body){
            this.toggleSubmitButton("on");
        }
        
    }

    render(){
        const { formType, submitType, currentUser} = this.props
        let preview = null
        if(this.state){
            preview = this.state.photoUrl ? (<><img id="post-image-preview" src={this.state.photoUrl}/></>): null
        }
        
        const display = this.props.post != undefined ? ( 
            <div>
                <div id="post-modal-contianer">
                <div id="post-modal">
                    <button to="/user/:userId" id="post-close-button" onClick={this.hideModal}></button>
                    <div id="post-header-container">
                        <h3 id="post-modal-header">{formType}</h3>
                    </div>
                    <div id="post-image-container">
                    <img src={this.props.currentUser.avatarUrl} id="small-post-image"></img>
                        <div id="post-username">{currentUser.firstName} {currentUser.lastName}</div>
                    </div>
                    <form id="post-modal-main" onSubmit={this.handleSubmit}>
                        <textarea id="post-text" type="text" placeholder="What's on your mind?" value={this.state.body} onChange={this.updateBody}/>
                        {preview}
                        <input id="edit-hidden-file-input" type="file" onChange={this.handleFile}/>
                        <input type="button" className="picture-button" id="add-picture-button" value="Change Picture" onClick={() => document.getElementById('edit-hidden-file-input').click()} />
                        <button className="picture-button" id="remove-picture-button" onClick={this.removePreview.bind(this)}>Remove Picture</button>
                        <button id="post-submit-button">{submitType}</button>
                    </form>              
                </div>
            </div>
        </div>
        ) : this.props.history.goBack()
        return(
            <>
            {display}
            </>
        )
    }
}

export default withRouter(EditPostModal)