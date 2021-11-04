export const RECEIVE_POST = "RECEIVE_POST";
import * as APIUTIL from "../util/likes_util"

const receivePost = (post) => ({
    type: RECEIVE_POST,
    post
})

export const likePost = (like) => dispatch => {
    APIUTIL.createLike(like).then(post => dispatch(receivePost(post)))
}

export const unLikePost = (likeId) => dispatch => {
    APIUTIL.deleteLike(likeId).then(post => dispatch(receivePost(post)))
}