import React from "react";
import { Link } from "react-router-dom";

class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            searchTerm: ""
        }
        this.firstPass = true;
        this.showSearch = this.showSearch.bind(this)
    }

    componentDidMount(){
        this.menu = document.getElementById(`search-bar-dropdown`);
        this.searchContents = document.getElementById("nav-search-bar");
        this.props.fetchAllUsers()

        const that = this;
        document.addEventListener("click", (event) => { 
        if(that.firstPass){
            that.firstPass = false;
        }else if(that.searchContents !== event.target){
            that.menu.style.display = "none"; 
        }
        })

    }

    showSearch(){
        this.menu = document.getElementById(`search-bar-dropdown`);
        this.firstPass = true;
       this.menu.style.display = "flex";
       
    }

    handleSearchTerm(e){
        this.setState({searchTerm: e.target.value})
    }


    render(){

        const {searchTerm} = this.state

        const display = <div id="search-bar-contents">
        <button onClick={this.showSearch} id="search-button">
            <div id="search-logo-1"></div>
        </button>
            
        <div id="search-bar-dropdown">
            <div id="search-and-results">
                <div id="search-back-arrow"></div>
                <input placeholder="Search Spacebook" id="nav-search-bar" onChange={this.handleSearchTerm.bind(this)}></input>
                <div id='nav-search-results'>
                    {this.props.users.filter(val => {
                        if(searchTerm === ""){
                            return val
                        } else if (val.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        (val.lastName.toLowerCase().includes(searchTerm.toLowerCase()))){
                            return val
                        }
                    }).map((user, key) => {
                        return <li key={key}>
                            <Link className="search-result" to={`/user/${user.id}`}>
                                <button className="select-user">
                                    <img className="search-pic" src={user.avatarUrl}></img>
                                    <div className="search-name">{`${user.firstName} ${user.lastName}`}</div>
                                    </button></Link>
                        </li>

                    })}

                </div>
            </div>
        </div>
    </div>
        return(
            <>
            {display}
            </>
        )
    }
}

export default SearchBar