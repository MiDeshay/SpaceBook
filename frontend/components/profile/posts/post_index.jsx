import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
    constructor(props){
        super(props);

        this.handleDeletePost = this.handleDeletePost.bind(this)
    }

    componentDidMount(){
        this.props.fetchPosts()
    }

    handleDeletePost(postId){
        this.props.deletePost(postId);
    }
  
    
    render(){
        
        const posts = []
        this.props.posts.map((post) => posts.unshift(post))

        return (
            <div>
                 <ul id="all-posts">
                {posts.map((post, i) => 
                <li key={i}>
                    <PostIndexItem post={post} />
                    <button onClick={() => this.handleDeletePost(post.id)}>Delete</button>
                    <br/>
                </li>
                
                
                
                )}
                </ul>
            </div>
        )
    }
            
    
}

export default PostIndex