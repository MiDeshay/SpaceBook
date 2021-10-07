
//sends back both sent and received requests of the 
//current user
export const getAllFriendRequests = () => {
    return $.ajax({
        method: "GET",
        url: "/api/friend_requests"
    })
}

//sends back both sent and received requests 
// with the new request being added to the rest
export const requestFriendship = (friendRequest) => {
    return $.ajax({
        method: "POST",
        url: `/api/friend_requests`,
        data: {friendRequest}
    })
}

//creates new friend then sends it up then deletes the request
//in the backend, if it receives the friend in the front end
//the friend request of that friend is deleted and the friend
//is added to the state
export const addFriend  = (friendRequest) => {
    return $.ajax({
        method: "GET",
        url: `/api/friend_requests/${friendRequest.id}`
    })
}

//destroys the request then sends request to the front end.
//Once received, its destroyed in the front end as well
export const rejectRequest = (friendRequest) => {
    return $.ajax({
        method: "DESTROY",
        url: `/api/friend_requests/${friendRequest.id}`
    })
}