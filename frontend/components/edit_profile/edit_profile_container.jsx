import { connect } from "react-redux";
import { updateUser } from "../../actions/user_actions";
import EditProfileModal from "./edit_profile_modal";


const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = (dispatch) => ({
    updateUser: (user) => dispatch(updateUser(user))
})  

export default connect(mSTP,mDTP)(EditProfileModal)