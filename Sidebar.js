import React from 'react'
import './Sidebar.css'
const Sidebar = () => {
    const mainMenus = [
        { text: 'Home', icon: "fas fa-home" },
        { text: 'Trending', icon: "fas fa-chart-line" },
        { text: 'Subscriptions', icon: "fas fa-bookmark" },
    ]
    const libraryMenus = [
        { text: 'History', icon: "fas fa-history" },
        { text: 'Watch later', icon: "fas fa-clock" },
        { text: 'Liked videos', icon: "fas fa-thumbs-up" },
        { text: 'Show more', icon: "fas fa-arrows-alt" },
    ]
   
    return (
        <div className="sidebar">
            <ul className="menu-group">
                {mainMenus.map(menu => (
                    <li className="menu-item">
                        <i className={menu.icon}></i>
                        <span className="text">{menu.text}</span>
                    </li>
                ))}
            </ul>
            <h4 className="menu-group-label">Library</h4>
            <ul className="menu-group">
                {libraryMenus.map(menu => (
                    <li className="menu-item">
                        <i className={menu.icon}></i>
                        <span className="text">{menu.text}</span>
                    </li>
                ))}
           </ul>
        </div>
    )
}

export default Sidebar;