import React from 'react';
import { Link } from 'react-router-dom';


const PostIndexItem = (props) => {
    const {post} = props
    return (
        <div className="post-block">
            <div className="post-block-header">
                <div className="post-profile-image"></div>
                <div className="post-username"></div>
                <button className="post-options-button"></button>
            </div>
            <div className="post-block-main">
                <p className="post-block-text">{post.body}</p>
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

export default PostIndexItem