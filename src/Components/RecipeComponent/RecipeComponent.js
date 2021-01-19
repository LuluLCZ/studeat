import React from 'react';
import './RecipeComponent.scss';
import recipe from "../../DocLandingPage/recipe1.png";

const RecipeComponent = () => {
    return (
        <div className="recipeContainer">
            <div className="firstDelivery">
                <div className="studEatTitle deliveryTitle">
                    Participe à la première livraison
                </div>
                <div className="studEatDesc deliveryDesc">
                    La première livraison sera lancé le <div className="greenText">Mercredi 20 Janvier 2021</div> sur le campus de HEC, dans le hall du M1 <div className="greenText"> entre 12h et 13h.</div>
                </div>
                <a className="btn btn-success commandBtn" href="#" role="button">Commande</a>
            </div>
            <div className="firstRecipe">
                <div className="RecipeTitle">La recette</div>
                <div className="RecipeInfo">Temps: 30min<br />Personne: 1</div>
                <img src={recipe} className="recipe1" />
            </div>
        </div>
    )
}

export default RecipeComponent;