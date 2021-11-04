import React from 'react';
import { Link } from 'react-router-dom';
import Comment from './comment';

class PostIndexItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            body: "",
            post_id: this.props.post.id,
            commenter_id: this.props.currentUser.id,
            firstRender: true
        }

        
        this.firstPass = true;

        
        
        this.hideBody = this.hideBody.bind(this);
        this.revealBody = this.revealBody.bind(this);
        this.showOptionsModal = this.showOptionsModal.bind(this);
        this.showOptionsModal2 = this.showOptionsModal2.bind(this);
        this.formatDate = this.formatDate.bind(this)
        this.handleCreateComment = this.handleCreateComment.bind(this)
    }


    componentDidMount(){

        //this.props.fetchCommentsForPost(this.props.post.id)
        this.menu = document.getElementById(`options-dropdown${this.props.post.id}`);
        this.menu2 = document.getElementById(`other-options-dropdown${this.props.post.id}`);

        const that = this;

        document.addEventListener("click", (event) => { 
        if(that.firstPass){
            that.firstPass = false;
        }else if(that.menu !== event.target && that.menu2 !== event.target  ){
            that.menu.style.display = "none"; 
            that.menu2.style.display = "none"; 
        } 
        })

        const input = document.getElementById(`post-input-${this.props.post.id}`);
        input.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            that.handleCreateComment()
        }
        });

        if(this.props.post.id !== this.state.post_id){
            this.setState({post_id: this.props.post.id})
        }
    }

    showOptionsModal(){
        this.firstPass = true;
       this.menu.style.display = "flex";
       
    }

    showOptionsModal2(){
        this.firstPass = true;
       this.menu2.style.display = "flex";
       
    }



    formatDate(){
        const date = new Date (this.props.post.createdAt);
        return date.toString().slice(0, 15);

    }

    

    //slices body string and adds three dots
    //also adds link "See More" to the end which calls reveal body on click
    //returns everything in a div with classes small-text post-block-text big-text-hidden
    hideBody(){
        let slicedBody = this.props.post.body.slice(0, 330)

        while(slicedBody[slicedBody.length-1] === " "){
            slicedBody = slicedBody.slice(0, slicedBody.length-1);
        }

        slicedBody = slicedBody.concat("... ");

        return (<div className="small-text post-block-text big-text-hidden">
            {slicedBody}
            <button className="see-more-button" onClick={this.revealBody}>See More</button>
        </div>)
    }

    //sets firstRender to false and triggers a rerender
    revealBody(){
        this.setState({firstRender: false})
    }



    handleCommentInput(e){
        this.setState({body: e.currentTarget.value})
    }

    handleCreateComment(){
        this.state.post_id = this.props.post.id
        this.props.createComment(this.state)
        this.setState({body: ""})
    }

    goToComment(){
        document.getElementById(`post-input-${this.props.post.id}`).focus()
    }

    handleLike(){
        const {post, likePost, unLikePost} = this.props
        if (post.liked){
            unLikePost(post.liked)
        } else {
            const like = {
                likeable_type: "Post",
                likeable_id: post.id,
                user_id: this.props.currentUser.id
            }
            likePost(like)
        }
    }



    render(){

    const {post} = this.props;
    const {firstRender} = this.state;
   
    this.formatDate()
    let textBody = '';

    if(firstRender){
        if (post.body.length > 530){
            textBody = this.hideBody()
        }else if(post.body.length > 40){
            textBody = (<div className="small-text post-block-text">{post.body}</div>)
        } else {
            textBody = (<div className="post-block-text">{post.body}</div>)
        }
    } else{
        if(post.body.length > 40){
            textBody = (<div className="small-text post-block-text">{post.body}</div>)
        } else {
            textBody = (<div className="post-block-text">{post.body}</div>)
        }
    }


    const image = post.photoUrl ? <img id="post-picture" src={post.photoUrl}></img> : <></>
    const avatar = post.posterId === this.props.currentUser.id ?  this.props.currentUser.avatarUrl : post.avatarUrl

    const liked = post.liked ? 'liked' : "unliked"
    const likedText = post.liked ? 'post-button liked-text' : "post-button"

    let likersInfoString = ""
    if(post.likers){
        const likersArr = Object.values(post.likers)
        likersInfoString += likersArr[0].firstName + " " + likersArr[0].lastName

        if (likersArr.length === 2){
            likersInfoString += ` and ${likersArr.length - 1} other`
        } else if(likersArr.length > 2) {
            likersInfoString += ` and ${likersArr.length - 1} others`
        }

    }

    const likeInformation = post.likers ? (
        <div className="post-interaction-info">
            <div className="mini-post-likes"></div>
            <div className="likers-dropdown" >{likersInfoString}
                <div className="likers-dropdown-content"> 

                    <ul>
                        {Object.values(post.likers).map((liker, i) => 
                            <div key={i}>
        
                            <Link to={`/user/${liker.id}`} className="dropdown-liker">
                                <img className="likers-picture" src={liker.avatarUrl}/>
                                <div className="likers-name">{liker.firstName} {liker.lastName}</div>
                                </Link>
                            </div>
                        )}
                    </ul>
                </div>
            </div>
        </div>

    ) : ""

    const optionsModal = post.posterId === this.props.currentUser.id ? (<button onClick={this.showOptionsModal} className="post-options-button"></button>) :
    (<button onClick={this.showOptionsModal2} className="post-options-button"></button>)


    const postAuthorInfo = post.messagedUser ? (<div className="share-text"><Link to={`/user/${post.posterId}`} className="hover-underline">{`${post.firstName} ${post.lastName}`}</Link>  <div className="share-arrow">►</div> <Link to={`/user/${post.messagedUser.id}`} className="hover-underline">{`${post.messagedUser.firstName} ${post.messagedUser.lastName}`}</Link></div>) 
    : <Link to={`/user/${post.posterId}`} className="hover-underline">{`${post.firstName} ${post.lastName}`}</Link>

    return (
        <div className="post-block">
            <div className="post-block-header">
                <img src={avatar} className="post-profile-image"></img>
                <div className="post-info">
                    <div className="post-author">
                        {postAuthorInfo}
                    </div>
                    <div className="post-date">
                        {this.formatDate()}
                    </div>
                </div>
                {optionsModal}
            </div>
            <div className="post-block-main">
                {textBody}
                {image}
                
            </div>
            {likeInformation}
            <div className="post-buttons">
                <button className={likedText} onClick={this.handleLike.bind(this)}><div className={liked}></div>Like</button>
                <button className="post-button" onClick={this.goToComment.bind(this)}><div className="comment-button"></div>Comment</button>
            </div>
            <div className="post-block-footer">
                <div className="post-comment-block">
                    <img src={this.props.currentUser.avatarUrl} className="post-comment-user"></img>
                    <input className="post-comment-input" value={this.state.body} onChange={this.handleCommentInput.bind(this)} id={`post-input-${post.id}`} placeholder="Write a comment..." type="text"/>
                </div>
            </div>
            <ul>
            {this.props.post.comments.map( (comment, i) => 

            
                <div className="comment" key={i} >
                    <Comment 
                    comment={comment} 
                    currentUser={this.props.currentUser}
                    post={this.props.post}
                    deleteComment={this.props.deleteComment}
                    updateComment ={this.props.updateComment}
                     />
                </div>
                
                )}

        </ul>
            
        </div>
    )
    }
}

export default PostIndexItem