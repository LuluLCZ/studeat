import React from 'react';
import localProductImg from '../../DocLandingPage/D2.png';
import './LocalProductComponent.scss';

const LocalProductComponent = () => {
    return (
        <div className="localProductContainer">
            <img src={localProductImg} className="localProductImg" />
            <div className="localProductDescContainer">
                <div className="localProductTitle">
                    Produits <div className="greenText">locaux</div>, de <div className="greenText">qualité</div> et de <div className="greenText">saison</div>
                </div>
                <div className="localProductDesc">
                    Nous choisissons des produits du coin situés à moins de 200 km de ton campus et 
                    travaillons avec des coopératives pour te permettre de manger sainement et sans 
                    polluer ta planète.
                </div>
            </div>
        </div>
    )
}

export default LocalProductComponent;