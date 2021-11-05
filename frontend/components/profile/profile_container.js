import { connect } from "react-redux";
import { addFriend, getAllFriends, removeFriendship } from "../../actions/friend_actions";
import { logoutUser } from "../../actions/session_actions";
import { fetchAllUsers } from "../../actions/user_actions";
import { fetchPosts } from "../../actions/post_actions";
import Profile from "./profile";

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    user: state.entities.users[ownProps.match.params.userId],
    friends: Object.values(state.entities.friends),
    users: state.entities.users,
    posts: state.entities.posts

})

const mDTP = (dispatch) => ({
    logout: () => dispatch(logoutUser()),
    fetchPosts: (userId) => dispatch(fetchPosts(userId)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    addFriend: (friend) => dispatch(addFriend(friend)),
    getAllFriends: ()=>dispatch(getAllFriends()),
    removeFriendship: (friendId)=>dispatch(removeFriendship(friendId))
    

})  

export default connect(mSTP,mDTP)(Profile)