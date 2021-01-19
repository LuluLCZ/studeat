import React from 'react';
import bgHero from '../../DocLandingPage/1.png';
import './Hero.scss';

const HeroComponent = () => {
    return (
        <div className="HeroFlexContainer">
            <img src={bgHero} className="BackgroundLanding" />
            <div className="ImgHeroContainer">
                {/* <img src={HeroLogo} className="HeroLogo" /> */}
                <div className="studEatDescriptionContainer">
                    <div className="studEatTitle">
                        Le panier recette livré sur ton campus
                    </div>
                    <div className="studEatDesc">
                        Chez Stud’eat, on te concocte des paniers de produits locaux et de saison
                        , accompagnés de recettes adaptés à ta cuisine étudiante.
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeroComponent;