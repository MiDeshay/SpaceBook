import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
    constructor(props){
        super(props);

        this.state = this.props.msg

        this.handleDeletePost = this.handleDeletePost.bind(this)
    }

    componentDidMount(){
        this.props.fetchPosts()
    }

    handleDeletePost(postId){
        this.props.deletePost(postId);
    }
  
    
    render(){

        return (
            <div>
                 <ul>
                {this.props.posts.map((post, i) => 
                <li key={i}>
                    <PostIndexItem post={post} />
                    <button onClick={() => this.handleDeletePost(post.id)}>Delete</button>
                </li>
                
                
                )}
                </ul>
            </div>
        )
    }
            
    
}

export default PostIndex