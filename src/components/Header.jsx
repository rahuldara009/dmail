import React from "react";
import "../css/Header.css"
const Header=()=>{
    
    
    
    
    return(
        <div className="Navbar">
            <div className="Logo">
                    <a>GoogleMails</a>
            </div>
            <div className="SearchBar">
                <input placeholder="Search a query"></input>

            </div>
            <div className="RightBar">
                <a>Info</a>
                <a>Setting</a>
                <a>Profile</a>

            </div>
            

        </div>
    )




}
export default Header;