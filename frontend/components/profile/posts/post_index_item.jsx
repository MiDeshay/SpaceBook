import React from 'react';
import PostModal from './post_options_modal';


class PostIndexItem extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
        }
       
        this.firstPass = true;
        
        this.hideBody = this.hideBody.bind(this);
        this.revealBody = this.revealBody.bind(this);
        this.showOptionsModal = this.showOptionsModal.bind(this);
        this.formatDate = this.formatDate.bind(this)
    }

    componentDidMount(){
        this.menu = document.getElementById(`options-dropdown${this.props.post.id}`);
        const that = this;

        document.addEventListener("click", (event) => { 
        if(that.firstPass){
            that.firstPass = false;
        }else if(that.menu !== event.target){
            that.menu.style.display = "none"; 
        }
        })

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

    render(){
    //If firstRender is true (inserts the return of hidebigbody into the return)

    //Otherwise, inserts body with classes small-text post-block-text (so even big posts are fully revealed).
    //Else just inserts body with single class post-block-text
    const {post, users} = this.props;
    const {firstRender} = this.state;
   
    this.formatDate()
    let textBody = '';

    if(firstRender){
        if(post.body.length > 530){
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

    return (
        <div className="post-block">
            <div className="post-block-header">
                <div className="post-profile-image"></div>
                <div className="post-info">
                    <div className="post-author">
                        {`${users[post.posterId].firstName} ${users[post.posterId].lastName}`}
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
                <div className="post-block-buttons">
                    <button className="post-button">Like</button>
                    <button className="post-button">Comment</button>
                    <button className="post-button">Share</button>
                </div>
                <div className="post-comment-block">
                    <div className="post-comment-user"></div>
                    <input className="post-comment-input" placeholder="Write a comment..." type="text"/>
                </div>
            </div>
            
        </div>
    )
    }
}

export default PostIndexItem