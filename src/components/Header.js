import React from "react";
import NavBar from "./Navbar";

function Header(props){
    const {currentTab, setCurrentTab} = props;

    return (
        <header>
            <div>
                <NavBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
            </div>
        </header>
    )
}

export default Header;