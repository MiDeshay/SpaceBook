import React from "react";
import { Link, withRouter} from 'react-router-dom';
import CreatePostContainer from "../posts/create_post_container";
import PostIndexContainer from "../posts/post_index_container";
import NewsFeedIndexContainer from "./news_feed_index_container";

class Newsfeed extends React.Component{

    constructor(props){
        super(props)

        this.resizePage = this.resizePage.bind(this)
    }

    revealCreatePost(){
        const createPost = document.getElementById('post-container');
        if( document.getElementById("post-modal-contianer")){
            document.getElementById("post-modal-contianer").style.display = "block";
        }

        if(createPost){
            createPost.style.display = "block"
        }
     }

     componentDidMount(){
         this.resizePage()
        window.addEventListener('resize', () => {
            this.resizePage()
           
        })
     }

     resizePage(){
        const width = window.innerWidth;
        const newsFeedLeft = document.getElementById("newsfeed-left")
        const newsFeedRight = document.getElementById("newsfeed-right")
        if(width < 780){
            if(newsFeedLeft){
                
                newsFeedLeft.style.display = "none";
                newsFeedRight.style.display = "none";
            }
        }else{
            if(newsFeedLeft){
               
                newsFeedLeft.style.display = "block";
                newsFeedRight.style.display = "block";
            }
        }
     }

    render(){
        const display = this.props.currentUser ? (
            <div id="all-newsfeed-content">
                 <div id="page-validator"></div>
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
                                    <Link to={`/user/${this.props.currentUser.id}`}><img src={this.props.currentUser.avatarUrl} id="post-image"></img></Link>
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
                            
                        </div>
                </div>
            </div>

            <div id="newsfeed-right">
            <div id="right-shortcuts">
                        <div className="sp-title" id="shortcuts-header"> Sponsored </div>
                                
                            <a href="https://www.appacademy.io/course/app-academy-open">
                                <div className="ad">
                                <img src="https://assets-global.website-files.com/5dcc7f8c449e597ed83356b8/603820afd31232aab368ea6f_New%20Red-logo-emblem.png" className="ad-picture"/>

                                <div className="ad-text-container">
                                    <div className="title-add">App Academy</div>
                                    <div className="ad-description">Learn to Code for Free!</div>
                                </div>

                                </div>
                            </a>

                                
                            <a href="https://www.facebook.com">
                                <div className="ad">
                                        <img src="https://www.teahub.io/photos/full/172-1725552_facebook-logo-png.png" className="ad-picture"/>

                                    <div className="ad-text-container">
                                        <div className="title-add">Facebook</div>
                                        <div className="ad-description">See the Original</div>
                                    </div>
                                </div>
                            </a>
                    </div>    
            </div>

        </div>
        ) : ( <div id="page-validator"></div>)

        return(
            <>
            {display}
            </>
        )
    }
}

export default withRouter(Newsfeed)