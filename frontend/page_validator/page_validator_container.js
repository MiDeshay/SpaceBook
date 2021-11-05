import { connect } from "react-redux";
import PageValidator from "./page_validator";
import { fetchAllUsers } from "../actions/user_actions";

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users
})

const mDTP = (dispatch) => ({
    fetchAllUsers: ()=> dispatch(fetchAllUsers())
})  

export default connect(mSTP,mDTP)(PageValidator)