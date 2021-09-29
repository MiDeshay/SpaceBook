import React from 'react';
import { connect } from 'react-redux';
import { fetchPost, updatePost } from "../../../actions/post_actions";
import PostForm from './post_form';


class EditPostForm extends React.Component {
  componentDidMount(){
    this.props.fetchPost(this.props.match.params.postId)
  }

  render() {
    
    const { action, formType, post } = this.props;

    if (!post) return null;
    return (
      <PostForm
        action={action}
        formType={formType}
        post={post} />
    );
  }
}

const mSTP = (state, ownProps) => ({
  post: state.post[ownProps.match.params.postId],
  formType: 'Edit Report'
})

const mDTP = dispatch => ({
  requestPost: (postId) => dispatch(fetchPost(postId)),
  action: (post) => dispatch(updatePost(post))
})

export default connect(mSTP, mDTP)(EditPostForm)