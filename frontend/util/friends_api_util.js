
//sends the friends of a user 
//can also send back own friends
export const getAllFriends = () => {
    return $.ajax({
        method: "GET",
        url: `/api/friends`
    })
}

export const addFriend = (friend) => {

    return $.ajax({
        method: "GET",
        url: "/api/friends",
        data: {friend}

    })
}

//removes one of the current users friendships
//sends back removed friend to be removed in the front end
export const removeFriendship = (friendshipId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/friends/${friendshipId}`,
    })
}