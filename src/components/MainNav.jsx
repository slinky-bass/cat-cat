import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

// ----- INTERNAL ----- \\
import SvgLogoIcon from '../common/SvgHomeIcon';
import SvgHomeIcon from '../common/SvgHomeIcon';
import SvgCatIcon from '../common/SvgHomeIcon';

// ----- COMPONENTS ----- \\
const MainNav = () => {

    const hashLocation = window.location.hash.substring(0, window.location.hash.indexOf("?"));

    return (
        <nav className="main-nav-container">
            <div className="logo-container">
                <SvgLogoIcon />
                <span></span>
            </div>
            <ul className="nav-tab-list">
                <li className={hashLocation === "#/" ? classNames("nav-tab-item active") : classNames("nav-tab-item")}>
                    <Link to={`/`}><SvgHomeIcon /></Link>
                </li>
                <li className={classNames("nav-tab-item", { "active": hashLocation === "#/cats" })}>
                    <Link to={`/articles`}><SvgCatIcon /></Link>
                </li>
            </ul>
        </nav>
    );  
}

export default MainNav;