import React from 'react';
import Comment from './comment';

class PostIndexItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            body: "",
            post_id: this.props.post.id,
            commenter_id: this.props.currentUser.id
        }

        
        this.firstPass = true;

        
        
        this.hideBody = this.hideBody.bind(this);
        this.revealBody = this.revealBody.bind(this);
        this.showOptionsModal = this.showOptionsModal.bind(this);
        this.formatDate = this.formatDate.bind(this)
        this.handleCreateComment = this.handleCreateComment.bind(this)
    }


    componentDidMount(){

        //this.props.fetchCommentsForPost(this.props.post.id)
        this.menu = document.getElementById(`options-dropdown${this.props.post.id}`);
        const that = this;

        document.addEventListener("click", (event) => { 
        if(that.firstPass){
            that.firstPass = false;
        }else if(that.menu !== event.target){
            that.menu.style.display = "none"; 
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

    formatDate(){
        const date = new Date (this.props.post.createdAt);
        return date.toString().slice(0, 10);

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

    return (
        <div className="post-block">
            <div className="post-block-header">
                <img src={avatar} className="post-profile-image"></img>
                <div className="post-info">
                    <div className="post-author">
                        {`${post.firstName} ${post.lastName}`}
                    </div>
                    <div className="post-date">
                        {this.formatDate()}
                    </div>
                </div>
                <button onClick={this.showOptionsModal} className="post-options-button"></button>
            </div>
            <div className="post-block-main">
                {textBody}
                {image}
                
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