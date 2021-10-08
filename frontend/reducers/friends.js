import { RECEIVE_FRIEND, RECEIVE_ALL_FRIENDS, REMOVE_FRIEND } from "../actions/friend_actions";


const friendsReducer = (state={}, action) => {
    Object.freeze(state)
    const newState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_ALL_FRIENDS:
            return action.friends;
        case RECEIVE_FRIEND:
            newState[action.friend.id] = action.friend
            return newState;
        case REMOVE_FRIEND:
            delete newState[action.friendshipId]
            return newState; 
        default:
            return state;
    }
}

export default friendsReducer