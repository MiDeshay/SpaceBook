import { connect } from "react-redux";
import SearchBar from "./search_bar";
const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = (dispatch) => ({
    
})  

export default connect(mSTP,mDTP)(SearchBar)