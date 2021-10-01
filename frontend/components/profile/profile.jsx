import React from "react";
import GreetingContainer from '../greeting/greeting_container';
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
                <GreetingContainer/>
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
         )
        }
    }
  

export default Profile