import { connect } from "react-redux";
import { logoutUser } from "../../actions/session_actions";
import Profile from "./profile";

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    user: state.entities.users[ownProps.match.params.userId]
})

const mDTP = (dispatch) => ({
    logout: () => dispatch(logoutUser())
})  

export default connect(mSTP,mDTP)(Profile)