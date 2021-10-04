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

export const createPost = (formData) => {
    return $.ajax({
        url: '/api/posts',
        method:'POST',
        data: formData,
        contentType: false,
        processData: false,

    })
}

export const updatePost = (post) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/posts/${post.id}`,
        data: {post}
    })
}

export const deletePost = (postId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/posts/${postId}`
    })
}