
import { RECEIVE_SESSION_ERRORS, REMOVE_SESSION_ERRORS } from "../actions/session_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions"

const _nullState = {errors: null};

export const sessionErrorsReducer = (state=_nullState, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_SESSION_ERRORS:
            return Object.assign({}, {errors: action.errors})
        case REMOVE_SESSION_ERRORS:
            return _nullState
        case RECEIVE_CURRENT_USER:
            return _nullState
        default:
            return state
    }
}

