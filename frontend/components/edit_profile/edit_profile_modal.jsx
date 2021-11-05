import React from "react";

class EditProfileModal extends React.Component{
    constructor(props){
        super(props);

        this.state = this.props.currentUser

        this.oldState = this.state
        this.resetBio = this.resetBio.bind(this)
        this.resetIntro = this.resetIntro.bind(this)
        this.updateUser = this.updateUser.bind(this)
    }

    componentDidMount(){
        const introModalContainer = document.getElementById('intro-modal-container')
        if(introModalContainer){
            introModalContainer.addEventListener("click", (e) => {
                
                    if (e.target === introModalContainer){
                        this.hideIntroChange()
                    }
               
            })
        }
    }

    updateUser(){
        const formData = new FormData();
        if(this.state.avatarUrl && this.state.avatarUrl != this.oldState.avatarUrl){
            formData.append("user[avatar]", this.state.avatarFile)
        }

        if(this.state.backgroundUrl && this.state.backgroundUrl != this.oldState.backgroundUrl){
            formData.append("user[background]", this.state.backgroundFile)
        }
        
        formData.append("user[bio]", this.state.bio)
        formData.append("user[birthplace]", this.state.birthplace)
        formData.append("user[school]", this.state.school)
        formData.append("user[location]", this.state.location)

        const packet = {id: this.state.id, payload: formData}
        this.props.updateUser(packet)
        document.getElementById("edit-profile-container").style.display = "none"
        
        
    }

    

    handleProfilePic(e){
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader()

        if(file){
            fileReader.readAsDataURL(file)
        }

        fileReader.onloadend= () => {
            this.setState({ avatarUrl: fileReader.result, avatarFile: file})
        }
     
    }

    handleBackground(e){
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader()

        if(file){
            fileReader.readAsDataURL(file)
        }

        fileReader.onloadend= () => {
            this.setState({ backgroundUrl: fileReader.result, backgroundFile: file})
        }
    }

    handleBio(e){
        this.setState({bio: e.currentTarget.value})
    }

    handleBirthplace(e){
        this.setState({birthplace: e.currentTarget.value})
    }

    handleLocation(e){
        this.setState({location: e.currentTarget.value})
    }

    handleSchool(e){
        this.setState({school: e.currentTarget.value})
    }
    

    resetBio(){
        this.setState({bio: this.oldState.bio})
    }

    resetIntro(){
        this.setState({school: this.oldState.school, location: this.oldState.location, birthplace: this.oldState.birthplace})
    }




    showBioChange(){
        document.getElementById("bio-change-field").style.display = "block";
        document.getElementById("bio-preview").style.display = "none"

    }

    hideBioChange(){
        document.getElementById("bio-change-field").style.display = "none";
        document.getElementById("bio-preview").style.display = "block"
        this.resetBio()
    }

    keepBioChange(){
        document.getElementById("bio-change-field").style.display = "none";
        document.getElementById("bio-preview").style.display = "block"

    }



    showIntro(){
        document.getElementById("intro-modal-container").style.display = "block"
    }

    hideIntroChange(){
        document.getElementById("intro-modal-container").style.display = "none";
        this.resetIntro()
    }

    keepIntroChange(){
        document.getElementById("intro-modal-container").style.display = "none"
    }




    hideModal(){
        document.getElementById("edit-profile-container").style.display = "none"
    }

    render(){
        return (
            
            <div id="edit-profile-modal">
                <button onClick={this.hideModal} id="edit-modal-close"></button>

                <h2 id="edit-profile-header">
                    Edit Profile
                </h2>

                <div className="edit-profile-block" id="edit-profile-pic">
                    <div className="preview-header">
                        <h5 className="profile-edit-header" > Profile Picture</h5>
                        <input type="file" className="hidden-file-input" id="will-edit-avatar" onChange={this.handleProfilePic.bind(this)} />
                        <button onClick={() => document.getElementById('will-edit-avatar').click()} className="profile-modal-edit-button">Edit</button>
                    </div>

                    <img className="edit-preview" src={this.state.avatarUrl} id="profile-image-preview"></img>
                </div>

                <div className="edit-profile-block" id="edit-cover-photo">
                 <div className="preview-header">
                        <h5 className="profile-edit-header"> Cover Photo</h5>
                        <input type="file" className="hidden-file-input" id="will-edit-background" onChange={this.handleBackground.bind(this)} />
                        <button onClick={() => document.getElementById('will-edit-background').click()} className="profile-modal-edit-button">Edit</button>
                    </div>

                    <img className="edit-preview" src={this.state.backgroundUrl} id="background-photo-preview"></img>
                </div>

                <div className="edit-profile-block" id="edit-Bio">
                    <div className="preview-header">
                        <h5 className="profile-edit-header"> Bio </h5>
                        <button onClick={this.showBioChange.bind(this)} className="profile-modal-edit-button">Edit</button>
                    </div>

                    <div className="edit-preview" id="bio-preview">{`${this.state.bio}`}</div>
                    <div id="bio-change-field">
                        <input id="bio-textarea" value={`${this.state.bio}`} onChange={this.handleBio.bind(this)}/>
                        <div id="bio-buttons">
                            <button onClick={this.hideBioChange.bind(this)} className="bio-button" id="bio-cancel">Cancel</button>
                            <button onClick={this.keepBioChange.bind(this)} className="bio-button" id="bio-commit">Save</button>
                        </div>

                    </div>
                </div>

                <div className="edit-profile-block" id="edit-intro">
                    <div className="preview-header">
                        <h5 id="customize-intro" className="profile-edit-header"> Customize Your Intro </h5>
                        <button onClick={this.showIntro.bind(this)} className="profile-modal-edit-button">Edit</button>
                    </div>

                 
                            
                            <div id='school-div' className="info-div-container">
                                <div className="info-pic" id="school-logo"></div>
                                <div className="info-text-line">
                                    <div className="info-text-first">Went to</div>
                                    <div className="info-text-second" id="school-name">{`${this.state.school}`}</div>
                                </div>
                            </div>

                            <div id='location-div' className="info-div-container">
                                <div className="info-pic" id="edit-location-logo"></div>
                                <div className="info-text-line">
                                    <div className="info-text-first">Lives in</div>
                                    <div  className="info-text-second" id="location-name">{`${this.state.location}`}</div>
                                </div>
                            </div>

                            <div id='from-div' className="info-div-container">
                                <div className="info-pic" id="from-logo"></div>
                                <div className="info-text-line">
                                    <div className="info-text-first">From</div>
                                    <div className="info-text-second" id="from-name">{`${this.state.birthplace}`}</div>
                                </div>
                            </div>

                            <div id="intro-modal-container">
                                <div id="intro-modal">
                                <button onClick={this.hideIntroChange.bind(this)} id="edit-modal-close"></button>
                                    <h2 id="Intro-header">Edit Detials</h2>
                                    <div id="intro-modal-content">

                                        <div id="school-section">
                                            <h3 className="intro-modal-headers"> Education</h3>
                                            <input className="intro-text-input" onChange={this.handleSchool.bind(this)} value={`${this.state.school}`}></input>
                                        </div>
                                        <div id="location-section">
                                            <h3 className="intro-modal-headers"> Current City</h3>
                                            <input className="intro-text-input" onChange={this.handleLocation.bind(this)} value={`${this.state.location}`}></input>

                                        </div>
                                        <div id="from-section">
                                            <h3 className="intro-modal-headers"> Hometown</h3>
                                            <input className="intro-text-input" onChange={this.handleBirthplace.bind(this)} value={`${this.state.birthplace}`}></input>
                                        </div>

                                    </div>
                                    <div id="intro-footer">
                                        <button id="intro-cancel" className="bio-button" onClick={this.hideIntroChange.bind(this)}>Cancel</button>
                                        <button id="intro-save" className="bio-button" onClick={this.keepIntroChange.bind(this)}>Save</button>

                                    </div>
                                </div>
                            </div>
                    
                    
                </div>

                <button id="close-profile-edit" onClick={this.updateUser.bind(this)}>Save Changes</button>


            </div>
            
        )
    }
}

export default EditProfileModal