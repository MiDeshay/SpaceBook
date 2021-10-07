import { connect } from "react-redux";
import { fetchAllUsers } from "../../actions/user_actions";
import AllUsers from "./all_users_index";


const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = (dispatch) => ({
    fetchAllUsers: (user) => dispatch(fetchAllUsers(user))
})  

export default connect(mSTP,mDTP)(AllUsers)