import React from 'react';
import Recette from '../../DocLandingPage/recette2.png';

const RecetteContainer = () => {
    return (
        <div style={{"width": "100%"}}>
            <img src={Recette} style={{"width": "100%"}} className="recetteImg" />
        </div>
    )
}

export default RecetteContainer;