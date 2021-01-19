import React from 'react';
import './FooterComponent.scss';
import bgFooter from '../../DocLandingPage/2.png';

const FooterComponent = () => {
    return (
        <div>
            <div className="footerContainer">
                <img src={bgFooter} className="bgFooter" />
            </div>
            <div className="copyright">© 2021 Stud’Eat</div>
        </div>
    )
};

export default FooterComponent;