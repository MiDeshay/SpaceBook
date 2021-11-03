import React from 'react';
import PostIndexItem from './post_index_item';
import { Link } from 'react-router-dom';
import {EditPostContainer} from "./edit_post_container"
import { withRouter } from 'react-router-dom';

class PostIndex extends React.Component {
    constructor(props){
        super(props);
        this.handleUpdatePost = this.handleUpdatePost.bind(this)
        this.handleDeletePost = this.handleDeletePost.bind(this)

    }


    handleDeletePost(postId){
        this.props.deletePost(postId);

    }

    handleUpdatePost(postId){
        this.props.history.push(`/home/edit_post/${postId}`)
    }
  
  
    
    render(){
        const posts = []
        this.props.posts.map((post) => {
            posts.unshift(post)
        })
        
        return (
            <div id="all-posts-container">
                 <ul id="all-posts">
                    
                {posts.map((post, i) => 
                <li key={i} className="all-post-contents" id={`post${post.id}`}>
                   
                    <div className="post-options-dropdown" id={`options-dropdown${post.id}`}>
                        <div className="options-buttons-container">
                            <div className="single-option-button">
                                <div className="symbol edit-symbol"></div>
                                <Link to={`${this.props.location.pathname}/edit_post/${post.id}`}><button className="post-options-dropdown-button post-options-edit">Edit Post</button></Link>
                                
                            </div>
                            <div className="options-style-line"></div>
                            <div className="single-option-button">
                                <div className="symbol delete-symbol"></div>
                                <button className="post-options-dropdown-button post-options-delete" id={`${post.id}1`} onClick={() => this.handleDeletePost(post.id)}>Delete Post</button>
                            </div>

                        </div>
                    </div>
                  
    
                    <PostIndexItem currentUser={this.props.currentUser} 
                    post={post} 
                    currentUser={this.props.currentUser}
                    
                    createComment={this.props.createComment} 
                    deleteComment={this.props.deleteComment}
                    updateComment ={this.props.updateComment}
                    />
                    <br/>
                </li>
                
                
                
                )}
                </ul>
               
            </div>
        )
    }
            
    
}

export default withRouter(PostIndex)