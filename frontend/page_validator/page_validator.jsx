import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class PageValidator extends React.Component{

    constructor(props){
        super(props)
        this.firstRender = true
        this.state = {
            validPage: true
        }
        
    }

    componentDidMount(){
        this.props.fetchAllUsers()
    }

    componentDidUpdate(){

       const userIds = []
       
       Object.values(this.props.users).map(user => userIds.push(user.id))

       let validUserRoutes = []
       validUserRoutes.push("/newsfeed")

       userIds.map(id => {
            validUserRoutes.push(`/user/${id}`)
       })

        if(this.state.validPage && !validUserRoutes.includes(this.props.location.pathname)){

            this.setState({validPage: false})
            
        } else if (!this.state.validPage && validUserRoutes.includes(this.props.location.pathname)){
            this.setState({validPage: true})
        }
       
    }

    render(){

        let display = ""

         
            display = this.state.validPage ? "" : 
                <div>
                    <div id="error-page">404</div>
                    <div id="error-page-text">The page you're looking for doesn't exist!</div>
                    <Link to="/login" id="error-link"><div id="error-redirect">Back to Spacebook</div></Link>
                </div>
        

        return (
            <div>
                {display}
            </div>
        )
    }
}
export default withRouter(PageValidator)