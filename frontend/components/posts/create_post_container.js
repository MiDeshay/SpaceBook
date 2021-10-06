import { connect } from 'react-redux';
import { createPost } from "../../actions/post_actions"
import PostForm from './post_form';


const mSTP = (state) => ({
    post: {
        body: "",
        poster_id: state.session.id
    },
    formType: 'Create Post',
    submitType: "Post",
    currentUser: state.entities.users[state.session.id],
})

const mDTP = dispatch => ({
    action: (post) => dispatch(createPost(post))
})

export default connect(mSTP, mDTP)(PostForm)