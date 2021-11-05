import React from "react";
import { Link } from "react-router-dom";
import SearchBarContainer from "./search_bar_container";

class NavBar extends React.Component{
    constructor(props){
        super(props);

        this.firstPass = true;
        this.showLogout = this.showLogout.bind(this)
    }


    componentDidMount(){
        this.menu = document.getElementById(`logout-container`);
        const that = this;
        document.addEventListener("click", (event) => { 
        if(that.firstPass){
            that.firstPass = false;
        }else if(that.menu && that.menu !== event.target){
            that.menu.style.display = "none"; 
        }
        })
        this.resizeButtons()

        window.addEventListener('resize', () => {
            this.resizeButtons()
           
        })

    }

    componentDidUpdate(){
        if(this.props.currentUser){
            this.resizeButtons()
        }
    }

    resizeButtons(){
        if(this.props.currentUser){
        const width = window.innerWidth
      
            const navButtons = document.getElementsByClassName("nav-button");
            const navPics = document.getElementsByClassName("nav-pic")
            const profileButton = document.getElementById("nav-profile");
            const mainButtons = document.getElementById("main-nav-buttons")
            const gamePic = document.getElementById("game-nav-pic");
        
            
             if(navButtons){

           
            for(let i = 0; i < navButtons.length; i++){
              if(width < 670){
                navButtons[i].style.width = '70px';
                navPics[i].style.left = "20px";
                
    
              } else {
                navButtons[i].style.width = '100px';
                navPics[i].style.left = "38px";
                
              }
            }

              if(width < 670){
                if(profileButton){
                    profileButton.style.display = "none";
                }
                if(gamePic){
                    gamePic.style.left = "15px";
                }
                if(mainButtons){
                    mainButtons.style.left = "55%";
                }
                
              }else{
                  if(gamePic){
                      gamePic.style.left = "30px";
                  }
                if(profileButton){
                    profileButton.style.display = "flex";
                }
                if(mainButtons){
                    mainButtons.style.left = "50%";
                }
              }
            }   
      
          
      
            }
    }

    showLogout(){
        this.menu = document.getElementById(`logout-container`);
        this.firstPass = true;
       this.menu.style.display = "flex";
       
    }

    render(){
       


        const display = this.props.currentUser ? (
           
        <div id="main-nav-bar">
        <div id="nav-all">

        <div id="home-search-container">
            <Link to="/newsfeed" id="home-logo"><div id="the-s">S</div></Link>
            <SearchBarContainer/>
        </div>

        <div id="main-nav-buttons">
            <div className="nav-container" id="nav-home-button-container">
                <Link to="/newsfeed"> <button id="nav-home-button" className="nav-button"><div className="nav-pic" id="home-nav-pic"></div></button></Link>
            </div>
            <div className="nav-container" id="nav-game-button-container">
                <a href="https://mideshay.github.io/Picross/" target="_blank"> <button id="nav-game-button" className="nav-button"><div className="nav-pic" id="game-nav-pic"></div></button></a>
            </div>
            <div className="nav-container" id="nav-linkedin-button-container">
                <a href="https://www.linkedin.com/in/michael-deshay-a76472220/" target="_blank"> <button id="nav-linkedin-button" className="nav-button"><div className="nav-pic" id="linkedin-nav-pic"></div></button></a>  
            </div>
            <div className="nav-container" id="nav-github-button-container">
                <a href="https://github.com/MiDeshay/SpaceBook" target="_blank"> <button id="nav-github-button" className="nav-button"> <div className="nav-pic" id="github-nav-pic"></div></button></a>
            </div>
        </div>

        <div id="profile-logout-container">
            <Link to={`/user/${this.props.currentUser.id}`} id="nav-profile"> 
                <img src={this.props.currentUser.avatarUrl} id="nav-profile-image"></img>
                <div id="nav-profile-name"> {`${this.props.currentUser.firstName}`}</div>
            </Link>
            <button onClick={this.showLogout} id="logout-dropdown-button"></button>
            <div id="logout-container">
                <div id="logout-dropdown-menu">
                    <div id="mini-nav-profile">
                        <Link to={`/user/${this.props.currentUser.id}`} > 
                                <div id="logout-text-container">
                                    <img src={this.props.currentUser.avatarUrl} id="mini-nav-profile-image"></img>
                                    <div id="mini-nav-logout-items">
                                        <div id="mini-nav-profile-name"> {`${this.props.currentUser.firstName} ${this.props.currentUser.lastName}`}</div>
                                        <div id="see-your-profile">See your profile</div>
                                    </div>
                                </div>
                        </Link>
                    </div>

                    <div id="logout-dropdown-style-line"></div>

                    <div id="logout-dropdown-logout">
                        
                        <button onClick={this.props.logout} id="logout-button"><div id="logout-door"></div>Log Out</button>

                    </div>
                </div>
            </div>
        </div>
        
        </div>
        {this.res}
    </div>
) : ("")
        return (display)

            
    }
}

export default NavBar