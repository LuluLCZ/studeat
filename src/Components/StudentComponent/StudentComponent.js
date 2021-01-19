import React from 'react';
import studentProductImg from '../../DocLandingPage/D3.png';
import './StudentComponent.scss';

const StudentProductComponent = () => {
    return (
        <div className="studentProductContainer">
            <div className="studentProductDescContainer">
                <div className="studentProductTitle">
                    Recettes <div className="orangeText">variées</div> et <div className="orangeText">adaptées aux étudiants</div>
                </div>
                <div className="studentProductDesc">
                    Nous avons conçu des recettes spécialement adaptées à ta cuisine, simples et efficaces, adaptées à ton mode de vie. 
                </div>
            </div>
            <img src={studentProductImg} className="studentProductImg" />
        </div>
    )
}

export default StudentProductComponent;