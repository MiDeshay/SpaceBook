import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER, RECEIVE_ALL_USERS, REMOVE_USER } from "../actions/user_actions";

export const usersReducer = (state={}, action) => {
    Object.freeze(state)
    const newState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {[action.user.id]: action.user})
        case RECEIVE_USER:
            return Object.assign({}, state, {[action.user.id]: action.user})
        case RECEIVE_ALL_USERS:
            return action.users
        case REMOVE_USER:
            delete newState[action.userId]
        default:
            return state;
    }
}