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
            <div>
                 <ul id="all-posts">
                    
                {posts.map((post, i) => 
                <li key={i} id={`post${post.id}`}>
                    <PostIndexItem Myid={i} post={post} />
    
                    <button id={`${post.id}1`} onClick={() => this.handleDeletePost(post.id)}>Delete</button>
                    <Link to={`/home/edit_post/${post.id}`}>Edit</Link>
                    <br/>
                </li>
                
                
                
                )}
                </ul>
               
            </div>
        )
    }
            
    
}

export default PostIndex