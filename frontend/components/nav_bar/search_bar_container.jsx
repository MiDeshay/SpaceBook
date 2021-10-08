import { connect } from "react-redux";
import SearchBar from "./search_bar";
import { fetchAllUsers } from "../../actions/user_actions";

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    users: Object.values(state.entities.users)

})

const mDTP = (dispatch) => ({
    fetchAllUsers: ()=> dispatch(fetchAllUsers())
    
})  

export default connect(mSTP,mDTP)(SearchBar)