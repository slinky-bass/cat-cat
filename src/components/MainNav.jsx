import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

// ----- INTERNAL ----- \\
import SvgLogoIcon from '../common/SvgLogoIcon';

// ----- COMPONENTS ----- \\
const MainNav = () => {

    const hashLocation = window.location.hash;

    return (
        <nav className="main-nav">
            <div className="logo-container">
                <h1>:3</h1>
                <span>Choose a cat breed from the list to learn more!</span>
            </div>
            <ul className="nav-tab-list">
                <li className={hashLocation === "#/" ? classNames("nav-tab-item active") : classNames("nav-tab-item")}>
                    <Link to={`/`}>home</Link>
                </li>
                <li className={classNames("nav-tab-item", { "active": hashLocation === "#/facts" })}>
                    <Link to={`/facts`}>cat facts</Link>
                </li>
            </ul>
        </nav>
    );  
}

export default MainNav;

//<SvgLogoIcon />