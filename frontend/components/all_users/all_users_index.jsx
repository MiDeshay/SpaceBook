import React from "react";
import ProfileContainer from "../profile/profile_container";
import AllUsersIndexItem from "./all_users_index_item";


class AllUsers extends React.Component{
    constructor(props){
        super(props)

        
    }

    componentDidMount(){
        console.log("here")
        this.props.fetchAllUsers()
    }


    render(){

        return(
            <div id="all-users-page">
                <div id="all-users-container">
                    <button id="all-back-button">back</button>
                    <h1 id="all-users-header">People You May Know</h1>
                    <div id="spacer"></div>
                        <ul id="users-list">
                            {Object.values(this.props.users).map((user, i) => 
                            <li className="all-user-tab" key={i}>
                                <AllUsersIndexItem user={user}/>
                            </li>

                            )}

                         </ul>

                    </div>            
            </div>
        )
    }
}

export default AllUsers