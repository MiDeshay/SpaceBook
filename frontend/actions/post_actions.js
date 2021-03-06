export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const REMOVE_POST = "REMOVE_POST";
import * as APIUTIL from "../util/posts_api_util"

const receivePost = (post) => ({
    type: RECEIVE_POST,
    post
})

const receiveAllPosts = (posts) => ({
    type: RECEIVE_ALL_POSTS,
    posts
})

const removePost = (postId) => ({
    type: REMOVE_POST,
    postId
})

export const fetchNewsfeed = () => dispatch => {
    APIUTIL.fetchNewsfeed().then((res) => dispatch(receiveAllPosts(res)))
}

export const fetchPosts = (userId) => dispatch => {
    APIUTIL.fetchPosts(userId).then((res) => dispatch(receiveAllPosts(res)))
}

export const fetchPost = (postId) => dispatch => {
    APIUTIL.fetchPost(postId).then((res) => dispatch(receivePost(res)))
}

export const createPost = (post) => dispatch => {
    APIUTIL.createPost(post).then((res) => dispatch(receivePost(res)))
}

export const updatePost = (post) => dispatch => {
    APIUTIL.updatePost(post).then((res) => dispatch(receivePost(res)))
}

export const deletePost = (postId) => dispatch => {
    APIUTIL.deletePost(postId).then((post) => dispatch(removePost(post.id)))
}