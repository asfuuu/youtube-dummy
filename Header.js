import React from 'react';
import './Header.css';

const Header = () => {
  return (

    <>
    
    <nav className="navbar">
        <div className="toggle-btn">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <img src="img/logo.PNG" className="logo" alt=""/>
        <div className="search-box">
            <input type="text" className="search-bar" placeholder="search"/>
            <button className="search-btn"><img src="img/search.PNG" alt=""/></button>
        </div>
        <div className="user-options">
            <img src="img/video.PNG" className="icon" alt=""/>
            <img src="img/grid.PNG" className="icon" alt=""/>
            <img src="img/bell.PNG" className="icon" alt=""/>
            <div className="user-dp">
                <img src="img/profile-pic.png" alt=""/>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Header;