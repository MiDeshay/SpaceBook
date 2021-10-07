export const fetchCommentsForPost = (postId) => {
    return $.ajax({
        method: "GET",
        url: `/api/comments/${postId}`
    })
}

export const createComment = (comment) => {
    return $.ajax({
        url: '/api/comments',
        method:'POST',
        data: {comment}

    })
}

export const updateComment = (comment) => {
  
    return $.ajax({
        method: "PATCH",
        url: `/api/comments/${comment.id}`,
        data: {comment}
    })
}

export const deleteComment = (commentId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/comments/${commentId}`
    })
}