export const RECEIVE_FRIEND = "RECEIVE_FRIEND";
export const RECEIVE_ALL_FRIENDS = "RECEIVE_ALL_FRIENDS";
export const REMOVE_FRIEND = "REMOVE_FRIEND";
import * as APIUTIL from "../util/friends_api_util"

const receiveFriend = (friend) => ({
    type: RECEIVE_FRIEND,
    friend
})

const receiveAllFriends = (friends) => ({
    type: RECEIVE_ALL_FRIENDS,
    friends
})

const removeFriend = (friendshipId) => ({
    type: REMOVE_FRIEND,
    friendshipId
})

export const addFriend = (friend) => dispatch =>{
    APIUTIL.addFriend(friend).then((res) => dispatch(receiveFriend(res)))

}

export const getAllFriends = () => dispatch => {
    APIUTIL.getAllFriends().then((res) => dispatch(receiveAllFriends(res)))
}

export const removeFriendship = (friendId) => dispatch => {
    APIUTIL.removeFriendship(friendId).then(res => dispatch(removeFriend(res)))
}