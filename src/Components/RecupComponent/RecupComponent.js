import React from 'react';
import RecupImg from '../../DocLandingPage/D4.png';
import './RecupComponent.scss';

const RecupComponent = () => {
    return (
        <div className="recupProductContainer">
            <img src={RecupImg} className="recupProductImg" />
            <div className="recupProductDescContainer">
                <div className="recupProductTitle">
                    <div className="redText">Récupère ton panier</div> directement dans ton <div className="redText">école</div>
                </div>
                <div className="recupProductDesc">
                Les paniers Stud’eat sont livrés dans ton école à 18h. Choisis ta recette puis ton créneau horaire, et c’est presque déjà prêt. 
                </div>
            </div>
        </div>
    )
}

export default RecupComponent;