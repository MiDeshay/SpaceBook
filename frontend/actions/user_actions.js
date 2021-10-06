export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const REMOVE_USER = "REMOVE_USER";
import * as APIUTIL from "../util/user_api_util";

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
})

const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USERS,
    users
})

const removeUser = (userId) => ({
    type: REMOVE_USER,
    userId
})

export const fetchAllUsers = () => dispatch => {
    APIUTIL.fetchAllUsers().then((res) => dispatch(receiveAllUsers(res)))
}

export const fetchUser = (userId) => dispatch => {
    APIUTIL.fetchUser(userId).then((res) => dispatch(receiveUser(res)))
}

export const updateUser = (user) => dispatch => {
    APIUTIL.updateUser(user).then((res) => dispatch(receiveUser(res)))
}

export const deleteUser = (userId) => dispatch => {
    APIUTIL.deleteUser(userId).then((user) => dispatch(removeUser(user.id)))
}