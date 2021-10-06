export const updateUser = (packet) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/users/${packet.id}`,
        data: packet.payload,
        contentType: false,
        processData: false
    })
}

export const fetchAllUsers = () => {
   return $.ajax({
        url: "/api/users",
        method: "GET"
    })
}

export const fetchUser = (userId) => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${userId}`
    })
}

export const deleteUser = (userId) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/users/${userId}`
    })
}