import React from "react";
import GreetingContainer from '../greeting/greeting_container';
import CreatePostContainer from "./posts/create_post_container";
import PostIndexContainer from "./posts/post_index_container";


class Profile extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.props.logout()
    }

    render(){
        return(
            <div>
                <GreetingContainer/>
                <CreatePostContainer/>
                <PostIndexContainer/>
               
            </div>
         )
        }
    }
  

export default Profile