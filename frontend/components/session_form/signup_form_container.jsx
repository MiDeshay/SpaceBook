import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signUpUser, loginUser } from "../../actions/session_actions";

const mSTP = (state, ownProps) => ({
    errors: state.errors.session.errors,
    formType: "Sign Up"
})

const mDTP = (dispatch, ownProps) => ({
    signup: (user) => dispatch(signUpUser(user)),
    login: (user) => dispatch(loginUser(user))
}) 
export default connect(mSTP,mDTP)(SessionForm)