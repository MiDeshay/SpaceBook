import React from "react";
import CreatePostContainer from "./posts/create_post_container";
import PostIndexContainer from "./posts/post_index_container";


class Profile extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)

        this.revealCreatePost = this.revealCreatePost.bind(this)
    }

    componentDidMount(){
        this.resizePage()
        window.addEventListener('resize', () => {
            this.resizePage()
           
        })
    }

    resizePage(){
        const width = window.innerWidth

        const sideBar = document.getElementById("profile-side-content");
        const lowerProfileHeader = document.getElementById('lower-profile-header');
        const editButton = document.getElementById("edit-profile-button");
        const editSymbol = document.getElementById("edit-profile-symbol")

        if(width < 985){
            sideBar.style.display = "none"
        }else{
            sideBar.style.display = "block"
        }
    

        if(width < 740){
            lowerProfileHeader.style.width = "500px"
            editButton.style.left ="35px"
            editSymbol.style.left = "50px";
        } else{
            lowerProfileHeader.style.width = "720px"
            editButton.style.left ="253px";
            editSymbol.style.left = "267px";
            
        }
    }

    handleClick(){
        this.props.logout()
    }

    revealCreatePost(){
       const createPost = document.getElementById('post-container');
       document.getElementById("post-modal-contianer").style.display = "block";
       createPost.style.display = "block"
    }

    render(){
        return(
            <div>
              

            <div id="profile-header"> 
                <div id="upper-profile-header">
                    <div id="cover">
                        <div id="cover-photo"></div>
                        <div id="cover-profile-picture"></div>
                    </div>
                    <div id="upper-profile-text">
                        <div className="profile-text" id="upper-profile-name">{`${this.props.currentUser.firstName} ${this.props.currentUser.lastName}`}</div>
                        <div className="profile-text" id="upper-profile-bio">{`${this.props.currentUser.bio}`}</div>
                    </div>
                </div>
                <div id="lower-profile-header">
                    <div id="lower-profile-buttons">
                        <button className="profile-buttons" id="profile-posts-button">Posts</button>
                        <button className="profile-buttons" id="profile-friends-button">Friends</button>
                        <button className="profile-buttons" id="profile-photos-button">Photos</button>
                    </div>
                    <div id="edit-profile">
                        <div id="edit-profile-symbol"></div>
                        <button id="edit-profile-button">Edit Profile</button>
                    </div>

                </div>
            </div>

            <div id="profile-main-content">
                <div id="profile-side-content">
                    <div id="Intro"  className="profile-side-panel">
                        <div className="panel-title" id="intro-title info-detail">Intro</div>
                        <div id='school-div' className="info-div-container">
                            <div className="info-pic" id="school-logo"></div>
                            <div className="info-text-line">
                                <div className="info-text-first">Went to</div>
                                <div className="info-text-second" id="school-name">{`${this.props.currentUser.school}`}</div>
                            </div>
                        </div>
                        <div id='location-div' className="info-div-container">
                            <div className="info-pic" id="location-logo"></div>
                            <div className="info-text-line">
                                <div className="info-text-first">Lives in</div>
                                <div  className="info-text-second" id="location-name">{`${this.props.currentUser.location}`}</div>
                            </div>
                        </div>
                        <div id='from-div' className="info-div-container">
                            <div className="info-pic" id="from-logo"></div>
                            <div className="info-text-line">
                                <div className="info-text-first">From</div>
                                <div className="info-text-second" id="from-name">{`${this.props.currentUser.birthplace}`}</div>
                            </div>
                        </div>

                    </div>
                    <div id="Photos"  className="profile-side-panel">
                         <div className="panel-title" id="photos-title">Photos</div>
                    </div>
                    <div id="Friends"  className="profile-side-panel">
                        <div className="panel-title" id="friends-title">Friends</div>
                    </div>
                </div>
           
           
                <div id="profile-posts-content">
                    <div id="post-bar">
                        <div id="post-bar-main">
                            <div id="post-image"></div>
                            <div onClick={this.revealCreatePost}id="post-text-button">
                            <div id="text-prompt"> What's on your mind?</div>
                                
                                </div>
                        </div>
                        <div id="post-bar-line"></div>
                        
                    </div>
                    <div id="post-container">
                        <CreatePostContainer/>
                    </div>
                    
                    
                    <PostIndexContainer/>
                </div>
               
            </div>
        </div>
         )
        }
    }
  

export default Profile