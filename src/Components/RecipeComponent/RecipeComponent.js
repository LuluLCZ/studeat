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
                    La première livraison sera lancée le <div className="orangeText"><b>Mercredi 20 Janvier 2021</b></div> sur le campus de HEC, dans le hall du M1 <div className="orangeText"> <b>entre 12h et 13h.</b></div>
                </div>
                <a className="btn btn-success commandBtn" href="https://lydia-app.com/collect/48418-stud-eat/fr" role="button">Je commande</a>
            </div>
            <div className="firstRecipe">
                <div className="RecipeTitle">La recette</div>
                <div className="RecipeInfo">Temps: 30min<br />Personne: 1<br /><b>Prix: 5euros</b></div>
                <img src={recipe} className="recipe1" />
            </div>
        </div>
    )
}

export default RecipeComponent;