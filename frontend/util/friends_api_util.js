export const getOwnFriends = () => {
    return $.ajax({
        method: "GET",
        url: '/api/friends'
    })
}

export const getUserFriends = (userId) => {
    return $.ajax({
        method: "GET",
        url: `/api/friends/${userId}`
    })
}

export const createFriendship = (friendship) => {
    return $.ajax({
        method: "POST",
        url: `/api/friends`,
        data: {friendship}
    })
}

export const removeFriendship = (friendshipId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/friends/${friendshipId}`,
    })
}