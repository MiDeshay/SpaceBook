import { connect } from "react-redux";
import Newsfeed from "./newsfeed";
const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = (dispatch) => ({
    logout: () => dispatch(logoutUser())
})  

export default connect(mSTP,mDTP)(Newsfeed)