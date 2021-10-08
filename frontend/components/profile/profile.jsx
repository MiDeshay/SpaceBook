import React from "react";
import { withRouter} from 'react-router-dom';
import EditProfileContainer from "../edit_profile/edit_profile_container";
import CreatePostContainer from "../posts/create_post_container";
import PostIndexContainer from "../posts/post_index_container";


class Profile extends React.Component{
    constructor(props){
        super(props);

       

        this.resizePage = this.resizePage.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.revealCreatePost = this.revealCreatePost.bind(this)

    }

    componentDidMount(){
        this.props.fetchAllUsers()
        this.props.getAllFriends()
        this.resizePage()
        window.addEventListener('resize', () => {
            this.resizePage()
           
        })

        const coverPic = document.getElementById("cover-photo-box");
        if (coverPic){

            coverPic.scrollTop = 100
        }


        this.editContainer = document.getElementById("edit-profile-container");
        this.editModal = document.getElementById("edit-profile-modal")
        const that = this;
       
        document.addEventListener("click", (e)=> {
          if(that.editContainer === e.target){
                that.editContainer.style.display = "none"
            }
            

        })

        if (this.props.user != this.props.currentUser){
            const edit = document.getElementById("edit-profile-button")
            if(edit){
                edit.style.display = "none"
            }
        }


        
    }

        
        
       
    

    resizePage(){

    
        const width = window.innerWidth

        const sideBar = document.getElementById("profile-side-content");
        const lowerProfileHeader = document.getElementById('lower-profile-header');
        const editButton = document.getElementById("edit-profile-button");
        const editSymbol = document.getElementById("edit-profile-symbol")
        const coverPic = document.getElementById("cover-photo-box");

        if(sideBar){
        if(width < 985){
            sideBar.style.display = "none"
        }else{
            sideBar.style.display = "block"
            coverPic.scrollTop = 130
        }
        }
    
        if(lowerProfileHeader){

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
     
    }

    handleShowEdit(){
        document.getElementById("edit-profile-container").style.display ="block"
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
        
        if (this.props.currentUser.id != this.props.match.params.userId){
           const edit = document.getElementById("edit-profile")
           if (edit){
               edit.style.display = "none"
           }
        }else{
            const edit = document.getElementById("edit-profile")
            if(edit){
                edit.style.display = "block"
                if (this.props.user){
                    
                    this.props.friends.map((relation) => {
                        if (relation.userId == this.props.user.id && relation.friendId ==  this.props.currentUser.id ||
                            relation.userId == this.props.currentUser.id && relation.friendId ==  this.props.user.id){
                                console.log("yes")
                            }
                    })
                }
            }
           }
        
        const display = this.props.user ? (

            <div> 

            <div id="profile-header"> 
                <div id="upper-profile-header">
                    <div id="cover">
                        <div className="scrollbar-hidden" id="cover-photo-box">

                            <img src={this.props.user.backgroundUrl} id="cover-photo"></img>
                        </div>
                        <img src={this.props.user.avatarUrl}id="cover-profile-picture"></img>
                    </div>
                    <div id="upper-profile-text">
                        <div className="profile-text" id="upper-profile-name">{`${this.props.user.firstName} ${this.props.user.lastName}`}</div>
                        <div className="profile-text" id="upper-profile-bio">{`${this.props.user.bio}`}</div>
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
                        <button onClick={this.handleShowEdit.bind(this)} id="edit-profile-button">Edit Profile</button>
                    </div>

                    <button className="alt-profile-button" id="add-friend">

                    </button>

                    <button className="alt-profile-button" id="remove-friend" >

                    </button>

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
                                <div className="info-text-second" id="school-name">{`${this.props.user.school}`}</div>
                            </div>
                        </div>
                        <div id='location-div' className="info-div-container">
                            <div className="info-pic" id="location-logo"></div>
                            <div className="info-text-line">
                                <div className="info-text-first">Lives in</div>
                                <div  className="info-text-second" id="location-name">{`${this.props.user.location}`}</div>
                            </div>
                        </div>
                        <div id='from-div' className="info-div-container">
                            <div className="info-pic" id="from-logo"></div>
                            <div className="info-text-line">
                                <div className="info-text-first">From</div>
                                <div className="info-text-second" id="from-name">{`${this.props.user.birthplace}`}</div>
                            </div>
                        </div>

                    </div>

                    <div id="Photos"  className="profile-side-panel">
                         <div className="panel-title" id="photos-title">Photos</div>
                    </div>
                    <div id="Friends"  className="profile-side-panel">
                        <div className="panel-title" id="friends-title">Friends</div>
                        {/* {
                            this.props.user.friends.map((friend, i) => 
                            <div key={i}>
                            <li>{`${friend.firstName} ${friend.lastName}`}</li>
                            <br/>
                            </div>
                            )
                        } */}
                    </div>
                </div>
           
           
                <div id="profile-posts-content">
                    <div id="post-bar">
                        <div id="post-bar-main">
                            <img src={this.props.user.avatarUrl} id="post-image"></img>
                            <div onClick={this.revealCreatePost}id="post-text-button">
                            <div id="text-prompt"> What's on your mind?</div>
                                
                                </div>
                        </div>
                        <div id="post-bar-line"></div>
                        
                    </div>
                    <div id="post-container">
                        <CreatePostContainer/>
                    </div>

                    <div id="edit-profile-container">
                        <EditProfileContainer/>
                    </div>
                    
                    <PostIndexContainer/>
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
  

export default withRouter(Profile)