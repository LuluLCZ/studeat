import React from 'react';
import littleLogo from '../../DocLandingPage/logonoir+.png';

import './TopbarComponent.scss'

const TopbarComponent = () => {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand" href="/">
                <img src={littleLogo} width="70" height="40" alt="" />
            </a>
            <div className="rightNav" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="/command">Commander</a>
                    <a className="nav-item nav-link" href="/about">À propos</a>
                </div>
            </div>
        </nav>
    )
}

export default TopbarComponent;