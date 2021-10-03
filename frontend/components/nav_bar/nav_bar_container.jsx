import { connect } from "react-redux";
import { logoutUser } from "../../actions/session_actions";
import NavBar from "./nav_bar";
const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = (dispatch) => ({
    logout: () => {dispatch(logoutUser());}

})  

export default connect(mSTP,mDTP)(NavBar)