import React from 'react';
import PostIndexItem from './post_index_item';
import { Link } from 'react-router-dom';

class PostIndex extends React.Component {
    constructor(props){
        super(props);
        this.firstRender = true
        this.handleUpdatePost = this.handleUpdatePost.bind(this)
        this.handleDeletePost = this.handleDeletePost.bind(this)
        this.state = {
            editPostConatiner: ""
        }
    }

    componentDidMount(){
        this.props.fetchPosts()
    }

    handleDeletePost(postId){
        this.props.deletePost(postId);
        
        

    }

    handleUpdatePost(postId){
        this.props.history.push(`/home/edit_post/${postId}`)
    }

  
  
    
    render(){
        const posts = []


        this.props.posts.map((post) => posts.unshift(post))
        
        return (
            <div id="all-posts-container">
                 <ul id="all-posts">
                    
                {posts.map((post, i) => 
                <li key={i} className="all-post-contents" id={`post${post.id}`}>

                   
                    <div className="post-options-dropdown" id={`options-dropdown${post.id}`}>
                        <div className="options-buttons-container">
                            <div className="single-option-button">
                                <div className="symbol edit-symbol"></div>
                                <Link to={`/user/:userId/edit_post/${post.id}`}><button className="post-options-dropdown-button post-options-edit">Edit Post</button></Link>
                            </div>
                            <div className="options-style-line"></div>
                            <div className="single-option-button">
                                <div className="symbol delete-symbol"></div>
                                <button className="post-options-dropdown-button post-options-delete" id={`${post.id}1`} onClick={() => this.handleDeletePost(post.id)}>Delete Post</button>
                            </div>

                        </div>
                    </div>
    
                    <PostIndexItem users={this.props.users} Myid={i} post={post} />
                    <br/>
                </li>
                
                
                
                )}
                </ul>
               
            </div>
        )
    }
            
    
}

export default PostIndex