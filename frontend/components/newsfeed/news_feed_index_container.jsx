import { connect } from 'react-redux';
import { deletePost, fetchNewsfeed, updatePost } from '../../actions/post_actions';
import NewsFeedIndex from './news_feed_index';
import { createComment, fetchCommentsForPost, updateComment, deleteComment } from '../../actions/comment_actions';


const mSTP = (state) => ({
  users: state.entities.users,
  currentUser:  state.entities.users[state.session.id],
  posts: Object.values(state.entities.posts),
})

const mDTP = (dispatch) => ({
  fetchNewsFeed: () => dispatch(fetchNewsfeed()),
  updatePost: (post) => dispatch(updatePost(post)),
  deletePost: (postId) => dispatch(deletePost(postId)),
  createComment: (comment) => dispatch(createComment(comment)),
  updateComment: (comment) => dispatch(updateComment(comment)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),

})

export default connect(mSTP, mDTP)(NewsFeedIndex)