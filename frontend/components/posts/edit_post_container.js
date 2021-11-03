import React from 'react';
import { connect } from 'react-redux';
import { updatePost, fetchPost } from "../../actions/post_actions";
import EditPostModal from './edit_post_form';


class EditPostForm extends React.Component {
  

  componentDidMount(){
    fetchPost(this.props.match.params.postId)
  }

 

  render() {
    
    const { action, formType, post, currentUser, submitType, i } = this.props;
    return (
      <EditPostModal
        action={action}
        formType={formType}
        post={post}
        currentUser={currentUser}
        submitType={submitType}
        i={i}
        />
    );
  }
}

const mSTP = (state, ownProps) => ({
  post: this.props.post,
  formType: 'Edit Post',
  submitType: "Save",
  currentUser: this.props.currentUser,
  prevPath: state.path
})

const mDTP = dispatch => ({
  action: (post) => dispatch(updatePost(post)),
  fetchPost: (postId) => dispatch(fetchPost(postId))
})

export default connect(mSTP, mDTP)(EditPostForm)