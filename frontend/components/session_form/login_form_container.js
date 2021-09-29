import { connect } from "react-redux";
import { loginUser,removeErrors,signUpUser } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mSTP = (state) => ({
    errors: state.errors.session.errors,
})

const mDTP = (dispatch) => ({
    signup: (user) => dispatch(signUpUser(user)),
    login: (user) => dispatch(loginUser(user)),
    removeErrors: () => dispatch(removeErrors())
})  

export default connect(mSTP,mDTP)(SessionForm)