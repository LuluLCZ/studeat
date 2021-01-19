import React from 'react';
import littlePriceImg from '../../DocLandingPage/D1.png';
import './LittlePriceComponent.scss';

const LittlePriceComponent = () => {
    return (
        <div className="littlePriceContainer">
            <div className="littlePriceDescContainer">
                <div className="littlePriceTitle">
                    Des Paniers à <div className="redText">petits prix</div>
                </div>
                <div className="littlePriceDesc">
                Paniers entre 5€ et 7€ selon tes préférences alimentaires
                . Un budget spécialement pensé pour les étudiants en galère.
                </div>
            </div>
            <img src={littlePriceImg} className="littlePriceImg" />
        </div>
    )
}

export default LittlePriceComponent;