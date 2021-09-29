import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root"
import {configureStore} from "./store/store"
import { createPost, fetchPost, fetchPosts, updatePost, deletePost } from "./util/posts_api_util";






document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (window.currentUser){
    const preloadedState = {
      entities: {
        users: {[window.currentUser.id]: window.currentUser}
      },
      session: { id: window.currentUser.id}
    }
      store = configureStore(preloadedState)
      delete window.currentUser
  }else{
    store = configureStore()
  }

  
  window.createPost = createPost
  window.fetchPost =  fetchPost
  window.fetchPosts = fetchPosts
  window.updatePost = updatePost
  window.deletePost = deletePost
  
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});