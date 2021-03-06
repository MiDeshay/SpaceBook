import { RECEIVE_POST, RECEIVE_ALL_POSTS, REMOVE_POST } from "../actions/post_actions";


const postsReducer = (state={}, action) => {
    Object.freeze(state)
    const newState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_ALL_POSTS:
            return action.posts;
        case RECEIVE_POST:
            newState[action.post.id] = action.post
            return newState;
        case REMOVE_POST:
            delete newState[action.postId]
            return newState; 
        default:
            return state;
    }
}

export default postsReducer