export const fetchPost = (postId) => {
    return $.ajax({
        method: "GET",
        url: `/api/posts/${postId}`
    })
}

export const fetchPosts = () => {
    return $.ajax({
        method: "GET",
        url: '/api/posts'
    })
}

export const fetchNewsfeed = () =>{

    return $.ajax({
        method: "GET",
        url: "/api/news_feeds"
    })

}

export const createPost = (formData) => {
    return $.ajax({
        url: '/api/posts',
        method:'POST',
        data: formData,
        contentType: false,
        processData: false,

    })
}

export const updatePost = (packet) => {
  
    return $.ajax({
        method: "PATCH",
        url: `/api/posts/${packet.id}`,
        data: packet.payload,
        contentType: false,
        processData: false,
    })
}

export const deletePost = (postId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/posts/${postId}`
    })
}