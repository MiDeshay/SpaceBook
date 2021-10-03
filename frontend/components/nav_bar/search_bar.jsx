import React from "react";

class SearchBar extends React.Component{
    constructor(props){
        super(props)

        this.firstPass = true;
        this.showSearch = this.showSearch.bind(this)
    }

    componentDidMount(){
        this.menu = document.getElementById(`search-bar-dropdown`);
        this.searchContents = document.getElementById("nav-search-bar");

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


    render(){
        return(
            <div id="search-bar-contents">
                <button onClick={this.showSearch} id="search-button">
                    <div id="search-logo-1"></div>
                </button>
                    
                <div id="search-bar-dropdown">
                    <div id="search-and-results">
                        <div id="search-back-arrow"></div>
                        <input placeholder="Search Spacebook" id="nav-search-bar"></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar