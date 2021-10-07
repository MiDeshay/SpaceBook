import { connect } from "react-redux";
import { fetchAllUsers } from "../../actions/user_actions";
import AllUsers from "./all_users_index";


const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users
})

const mDTP = (dispatch) => ({
    fetchAllUsers: () => dispatch(fetchAllUsers())
})  

export default connect(mSTP,mDTP)(AllUsers)