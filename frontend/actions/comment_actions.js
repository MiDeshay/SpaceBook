export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
import * as APIUTIL from "../util/comments_api_utils"

const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment
})

const receiveAllComments = (comments) => ({
    type: RECEIVE_ALL_COMMENTS,
    comments
})

const removeComment = (commentId) => ({
    type: REMOVE_COMMENT,
    commentId
})


export const fetchCommentsForPost = (postId) => dispatch => {
    APIUTIL.fetchCommentsForPost(postId).then((res) => dispatch(receiveAllComments(res)))
}

export const createComment = (comment) => dispatch => {
    APIUTIL.createComment(comment).then((res) => dispatch(receiveComment(res)))
}

export const updateComment = (comment) => dispatch => {
    APIUTIL.updateComment(comment).then((res) => dispatch(receiveComment(res)))
}

export const deleteComment = (commentId) => dispatch => {
    APIUTIL.deleteComment(commentId).then((comment) => dispatch(removeComment(comment.id)))
}