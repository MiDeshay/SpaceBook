import { connect } from 'react-redux';
import { deletePost, fetchPosts, updatePost } from '../../actions/post_actions';

import PostIndex from './post_index';


deletePost

const mSTP = (state) => ({
  users: state.entities.users,
  currentUser:  state.entities.users[state.session.id],
  posts: Object.values(state.entities.posts),
})

const mDTP = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  updatePost: (post) => dispatch(updatePost(post)),
  deletePost: (postId) => dispatch(deletePost(postId)),

})

export default connect(mSTP, mDTP)(PostIndex)