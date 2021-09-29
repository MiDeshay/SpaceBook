import { connect } from "react-redux";
import Greeting from "./greeting";
import { logoutUser, loginUser } from "../../actions/session_actions";

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = (dispatch) => ({
    logout: () => dispatch(logoutUser()),
})
export default connect(mSTP, mDTP)(Greeting)