import { connect } from 'react-redux';
import { deletePost, fetchPosts, updatePost } from '../../actions/post_actions';
import { createComment, updateComment, deleteComment } from '../../actions/comment_actions';
import { likePost, unLikePost } from '../../actions/like_actions';

import PostIndex from './post_index';


const mSTP = (state) => ({
  users: state.entities.users,
  currentUser:  state.entities.users[state.session.id],
  posts: Object.values(state.entities.posts),
})

const mDTP = (dispatch) => ({
  fetchPosts: (userId) => dispatch(fetchPosts(userId)),
  updatePost: (post) => dispatch(updatePost(post)),
  deletePost: (postId) => dispatch(deletePost(postId)),
  likePost: (like)=> dispatch(likePost(like)),
  unLikePost: (likeId)=> dispatch(unLikePost(likeId)),
  createComment: (comment) => dispatch(createComment(comment)),
  updateComment: (comment) => dispatch(updateComment(comment)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),


})

export default connect(mSTP, mDTP)(PostIndex)