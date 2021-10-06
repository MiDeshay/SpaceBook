import React from 'react';


class PostForm extends React.Component{
    constructor(props){
        super(props)
        this.showSubmit = false

        this.state = {
            body: this.props.post.body,
            poster_id: this.props.post.poster_id,
            photoFile: null,
            photoUrl: null
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateBody = this.updateBody.bind(this)
        this.hideModal = this.hideModal.bind(this)
        
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
        const formData = new FormData();
        formData.append("post[body]", this.state.body);
        formData.append("post[poster_id]", this.state.poster_id);
        
        if(this.state.photoFile){
            formData.append("post[photo]", this.state.photoFile);
        }
       

        this.props.action(formData)

        this.setState({body: "", photoFile: null, photoUrl: null})
        this.hideModal();
        this.toggleSubmitButton("off");
        this.showSubmit = false;
        document.getElementById("text-prompt").textContent = "What's on your mind?"
        document.getElementById("hidden-file-input").value = ""
        document.getElementById("post-modal").style.marginTop = "120px";
        document.getElementById("remove-picture-button").style.display = "none";

        

    }

    hideModal(){
       
        const modal = document.getElementById("post-container");
        modal.style.display="none"
        
        this.setState({state: this.state});
        const text = document.getElementById("post-text");

        if(text.value != ""){
            document.getElementById("text-prompt").textContent = text.value
            this.toggleSubmitButton("on");
            this.showSubmit = true;
        }else{
            this.toggleSubmitButton("off");
            this.showSubmit = false;
            document.getElementById("text-prompt").textContent = "What's on your mind?"
        }

    }

    handleFile(e){
        const removePictureButton = document.getElementById("remove-picture-button");
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader()

        if(file){
            fileReader.readAsDataURL(file)
            removePictureButton.style.display = "block";
            document.getElementById("post-modal").style.marginTop = "75px";
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

    }

    render(){
        const { formType, submitType, currentUser} = this.props
        const preview = this.state.photoUrl ? (<><img id="post-image-preview" src={this.state.photoUrl}/></>): null
        
        return(
            <div id="post-modal-contianer">
                <div id="post-modal">
                    <button id="post-close-button" onClick={this.hideModal}></button>
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
                        <input id="hidden-file-input" type="file" onChange={this.handleFile.bind(this)}/>
                        <input type="button" className="picture-button" id="add-picture-button" value="Add Picture" onClick={() => document.getElementById('hidden-file-input').click()} />
                        <button className="picture-button" id="remove-picture-button" onClick={this.removePreview.bind(this)}>Remove Picture</button>
                        <button id="post-submit-button">{submitType}</button>
                    </form>
                    
                    
                </div>
                
            </div>
        )
    }
}

export default PostForm