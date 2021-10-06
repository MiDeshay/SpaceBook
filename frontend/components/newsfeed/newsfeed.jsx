import React from "react";
import { withRouter} from 'react-router-dom';
import CreatePostContainer from "../posts/create_post_container";
import PostIndexContainer from "../posts/post_index_container";

class Newsfeed extends React.Component{

    revealCreatePost(){
        const createPost = document.getElementById('post-container');
        document.getElementById("post-modal-contianer").style.display = "block";
        createPost.style.display = "block"
     }

    render(){
        const display = this.props.currentUser ? (
            <div id="newsfeed">
            <div id="profile-posts-content">
                    <div id="post-bar">
                        <div id="post-bar-main">
                            <img src={this.props.currentUser.avatarUrl} id="post-image"></img>
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
        ) : ("bang")

        return(
            <>
            {display}
            </>
        )
    }
}

export default withRouter(Newsfeed)