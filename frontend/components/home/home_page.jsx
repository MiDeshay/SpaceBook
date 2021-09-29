import React from "react";
import GreetingContainer from '../greeting/greeting_container';


class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.props.logout()
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <GreetingContainer/>
            </div>
         )
        }
    }
  

export default HomePage