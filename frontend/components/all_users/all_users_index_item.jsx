import React from "react";

class AllUsersIndexItem extends React.Component{
    constructor(props){
        super(props)

        console.log(this.props.user)
    }

    handleAddFriend(){
        
    }

    render(){
        const {user} = this.props
        return (<div className="all-users-selection">
            <div className="all-users-content">
                <img src={user.avatarUrl} className="all-users-pic"/>

                <div className="users-text+button">
                    <div className="all-user-name">{`${user.firstName} ${user.lastName}`}</div>
                    <button onClick={this.handleAddFriend.bind(this)} className="all-users-add"> Add Friend</button>
                </div>

            </div>

        </div>)
    }
}

export default AllUsersIndexItem