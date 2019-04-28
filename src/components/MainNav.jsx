import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

// ----- COMPONENTS ----- \\
const MainNav = () => {

    const hashLocation = window.location.hash.substring(0, window.location.hash.indexOf("?"));

    return (
        <nav className="main-nav">
            <div className="logo-container">=(^.^)=</div>
            <ul className="nav-tab-list">
                <li className={hashLocation === "/" ? classNames("nav-tab-item active") : classNames("nav-tab-item")}>
                    <Link to={`/`}>Home</Link>
                </li>
                <li className={classNames("nav-tab-item", { "active": hashLocation === "/articles" })}>
                    <Link to={`/articles`}>Article</Link>
                </li>
            </ul>
        </nav>
    );  
}

export default MainNav;