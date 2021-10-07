import { connect } from 'react-redux';
import { deletePost, fetchPosts, updatePost } from '../../actions/post_actions';
import { createComment, fetchCommentsForPost, updateComment, deleteComment } from '../../actions/comment_actions';

import PostIndex from './post_index';


const mSTP = (state) => ({
  users: state.entities.users,
  currentUser:  state.entities.users[state.session.id],
  posts: Object.values(state.entities.posts),
  comments: state.entities.comments
})

const mDTP = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  updatePost: (post) => dispatch(updatePost(post)),
  deletePost: (postId) => dispatch(deletePost(postId)),
  fetchCommentsForPost: (postId) => dispatch(fetchCommentsForPost(postId)),
  createComment: (comment) => dispatch(createComment(comment)),
  updateComment: (comment) => dispatch(updateComment(comment)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),


})

export default connect(mSTP, mDTP)(PostIndex)