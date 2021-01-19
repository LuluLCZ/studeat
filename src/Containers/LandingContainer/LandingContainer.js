import React from 'react';
import HeroComponent from '../../Components/HeroComponent/Hero';
import LittlePriceComponent from '../../Components/LittlePriceComponent/LittlePriceComponent';
import LocalProductComponent from '../../Components/LocalProductComponent/LocalProductComponent';
import RecipeComponent from '../../Components/RecipeComponent/RecipeComponent';
import RecupComponent from '../../Components/RecupComponent/RecupComponent';
import StudentProductComponent from '../../Components/StudentComponent/StudentComponent';

const LandingContainer = () => {
    return (
        <div>
            <HeroComponent />
            <LittlePriceComponent />
            <LocalProductComponent />
            <StudentProductComponent />
            <RecupComponent />
            <RecipeComponent />
        </div>
    )
}

export default LandingContainer;