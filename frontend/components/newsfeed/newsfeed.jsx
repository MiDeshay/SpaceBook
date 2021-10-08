import React from "react";
import { Link, withRouter} from 'react-router-dom';
import CreatePostContainer from "../posts/create_post_container";
import PostIndexContainer from "../posts/post_index_container";
import NewsFeedIndexContainer from "./news_feed_index_container";

class Newsfeed extends React.Component{

    revealCreatePost(){
        const createPost = document.getElementById('post-container');
        document.getElementById("post-modal-contianer").style.display = "block";
        createPost.style.display = "block"
     }

    render(){
        const display = this.props.currentUser ? (
            <div id="all-newsfeed-content">

                <div id="newsfeed-left">
                    <div className="left-block" id="user-profile-block">
                        <Link id="left-newsfeed-profile" to={`/user/${this.props.currentUser.id}`}>
                            <button className="left-block-button">
                                <img src={this.props.currentUser.avatarUrl} className="left-profile-image"></img>
                                <div className="left-block-text"> {`${this.props.currentUser.firstName} ${this.props.currentUser.lastName}`}</div>

                            </button>
                        </Link>
                    </div>

                    <div className="left-block" id="friends">
                       {/* <Link to="/everyone"> <button className="left-block-button">
                            <div className="left-profile-image" id="friends-pic"></div>
                            <div className="left-block-text"> Friends</div>
                        </button> </Link> */}
                    </div>

                    <div id="left-style-line"></div>

                    <div id="left-shortcuts">
                        <h2 id="shortcuts-header"> Your Shortcuts</h2>
                        <a href="https://mideshay.github.io/Picross/">
                            <button className="left-block-button">
                                <div className="left-profile-image" id="left-game-pic"></div>
                                <div className="left-block-text"> Picross!</div>
                            </button>

                        </a>
                    </div>


                </div>


            <div id="newsfeed-box">
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
                            <NewsFeedIndexContainer/>
                            
                            {/* <PostIndexContainer/> */}
                        </div>
                </div>
            </div>

            <div id="newsfeed-right">

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