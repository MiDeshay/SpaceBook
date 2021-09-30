import React from 'react';


class PostIndexItem extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            firstRender: true
        }
 
        this.hideBody = this.hideBody.bind(this);
        this.revealBody = this.revealBody.bind(this)
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
    const {post} = this.props;
    const {firstRender} = this.state

   

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
    

    return (
        <div className="post-block">
            <div className="post-block-header">
                <div className="post-profile-image"></div>
                <div className="post-username"></div>
                <button className="post-options-button"></button>
            </div>
            <div className="post-block-main">
                {textBody}
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