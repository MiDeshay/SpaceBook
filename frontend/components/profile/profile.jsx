import React from "react";
import { Link, withRouter} from 'react-router-dom';
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

        if(this.props.user){
            this.props.fetchPosts(this.props.user.id)
        }

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
              if( that.editContainer){
                  that.editContainer.style.display = "none"
              }
            }
            

        })

        if (this.props.user != this.props.currentUser){
            const edit = document.getElementById("edit-profile")
            if(edit){
                edit.style.display = "none"
            }
        }


        
    }

        
    componentDidUpdate(prevProps){
        
        this.user = this.props.users[this.props.match.params.userId]
        if(this.user){
            if(prevProps.user){
                if(this.user.id !== prevProps.user.id){
                    this.props.fetchPosts(this.user.id)
                }
            }else{
                this.props.fetchPosts(this.user.id)
            }
        }


        if(this.props.friends.length !== prevProps.friends.length){
            this.props.fetchAllUsers()
        }

        if (this.user){
            let swtiched = false
            this.props.friends.map((relation) => {
                if (relation.userId == this.user.id && relation.friendId ==  this.props.currentUser.id ||
                    relation.userId == this.props.currentUser.id && relation.friendId ==  this.user.id){
                    if(document.getElementById("remove-friend")){
                        document.getElementById("remove-friend").style.display = "block";
                    }
                    if(document.getElementById("add-friend")){
                        document.getElementById("add-friend").style.display = "none";
                    }
                    swtiched = true
                } 
            })

            if (!swtiched && this.user.id != this.props.currentUser.id) {
                if(document.getElementById("add-friend")){
                    document.getElementById("add-friend").style.display = "block"
                }

                if(document.getElementById("remove-friend")){
                    document.getElementById("remove-friend").style.display = "none";
                }
            }else if (this.user.id == this.props.currentUser.id){

                if(document.getElementById("remove-friend")){
                    document.getElementById("remove-friend").style.display = "none";
                }

                if(document.getElementById("add-friend")){
                    document.getElementById("add-friend").style.display = "none";
                }

                if( document.getElementById("edit-profile")){
                    document.getElementById("edit-profile").style.display = "block"
                }
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
        const addFriend = document.getElementById("add-friend");
        const removeFriend = document.getElementById("remove-friend");

        if(sideBar){
        if(width < 985){
            sideBar.style.display = "none"
        }else{
            sideBar.style.display = "block"
            coverPic.scrollTop = 130
        }
        }
    
        if(lowerProfileHeader){

            if(width < 780){
                
                lowerProfileHeader.style.width = "500px"
                editButton.style.left ="35px"
                editSymbol.style.left = "50px";
                addFriend.style.left = "39px";
                removeFriend.style.left= "39px"
             
            } else{
                lowerProfileHeader.style.width = "720px"
                editButton.style.left ="255px";
                editSymbol.style.left = "270px";
                addFriend.style.left = "261px";
                removeFriend.style.left= "261px"
        
            }
        }
     
    }

    addFriend(){
        this.props.addFriend({user_id: this.props.currentUser.id, friend_id: this.props.match.params.userId })
    }

    deleteFriend(){
        this.user = this.props.users[this.props.match.params.userId]
        this.props.friends.map((relation) => {
            if (relation.userId == this.user.id && relation.friendId ==  this.props.currentUser.id ||
                relation.userId == this.props.currentUser.id && relation.friendId ==  this.user.id)
                {
                   this.props.removeFriendship(relation.id)
                }
                   
            })
        
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
        this.user = this.props.users[this.props.match.params.userId]

       
        const posts = Object.values(this.props.posts)

        let postsWithPics = []
        posts.map(post => {
            if(post.photoUrl){
                postsWithPics.push(post)
            }
        })

        let friends = []
        if(this.user && this.user.friends){
            friends = Object.values(this.user.friends)
        }
    
        if(document.getElementById("text-prompt")){
            if(this.user && this.user.id !== this.props.currentUser.id){
                document.getElementById("text-prompt").textContent = `Say something to ${this.user.firstName}...`
            }else{
                document.getElementById("text-prompt").textContent = "What's on your mind?"
            }
        }
        
        if (this.props.currentUser.id != this.props.match.params.userId){
           const edit = document.getElementById("edit-profile")
           if (edit){
               edit.style.display = "none"
           }
        }else{
            const edit = document.getElementById("edit-profile")
            if(edit){
                edit.style.display = "block"
            }
        }
    

        let inputPlaceholder = "What's on your mind?"
        
        if (this.user){
            if(this.user.id !== this.props.currentUser.id){
                inputPlaceholder = `Say something to ${this.user.firstName}...`
            }
        }

        
        const display = this.user ? (

            <div> 
                <div id="page-validator"></div>
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

                        <button onClick={this.addFriend.bind(this)} className="alt-profile-button" id="add-friend">Add Friend</button>

                        <button onClick={this.deleteFriend.bind(this)} className="alt-profile-button" id="remove-friend" ><div id="check-img"></div>Friends</button>

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
                            <ul id="photos-display">
                                {
                                    postsWithPics.map((post, i) => 
                                    <img className="photos-block" src={post.photoUrl} key={i}/>)
                                }
                            </ul>
                        </div>

                        <div id="Friends"  className="profile-side-panel">
                            <div className="panel-title" id="friends-title">Friends</div>
                            <ul id="friend-display">
                            { 
                            friends.map((friend, i) => 

                                <Link to={`/user/${friend.id}`} key={i} className="friend-block">
                                    <img className="friend-block-pic" src={friend.avatarUrl}></img>
                                    <div className="friend-block-text">{`${friend.firstName} ${friend.lastName}`}</div>
                                </Link>)
                            }
                            </ul>
                        </div>
                    </div>
            
            
                    <div id="profile-posts-content">
                        <div id="post-bar">
                            <div id="post-bar-main">
                                <Link to={`/user/${this.props.currentUser.id}`} ><img src={this.props.currentUser.avatarUrl} id="post-image"></img> </Link>
                                <div onClick={this.revealCreatePost}id="post-text-button">
                                <div id="text-prompt"> {inputPlaceholder}</div>
                                    
                                    </div>
                            </div>
                            <div id="post-bar-line"></div>
                            
                        </div>
                        <div id="post-container">
                            <CreatePostContainer />
                        </div>

                        <div id="edit-profile-container">
                            <EditProfileContainer/>
                        </div>
                        
                        <PostIndexContainer/>
                    </div>
                
                </div>
            </div>
        
        ) : ""

        return(
           <>
            {display}
           </>
         )
        }
    }
  

export default withRouter(Profile)