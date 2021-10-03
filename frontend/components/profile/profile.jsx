import React from "react";
import CreatePostContainer from "./posts/create_post_container";
import PostIndexContainer from "./posts/post_index_container";


class Profile extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)

        this.revealCreatePost = this.revealCreatePost.bind(this)
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
                    <div id="placeholder"></div>
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