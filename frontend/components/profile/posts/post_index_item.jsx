import React from 'react';
import { Link } from 'react-router-dom';


const PostIndexItem = (props) => {
    const {post} = props
    return (
        <div>
            <p>{post.body}</p>
            
        </div>
    )
}

export default PostIndexItem