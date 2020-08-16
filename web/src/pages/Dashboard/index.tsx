import React from 'react';
import { Link } from 'react-router-dom';

import './styles.ts';



import logoImg from '../../assets/images/logo.svg';
import landingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";




 function Dashboard ( ) {
    return (
        <div id="page-landing">
            <div className="container" id="page-landing-content">
                <div className="logo-container">
                    <img src={logoImg} alt="estudiosYa" />
                    <h2>
                    Quedate en casa! Despreocupate y egresa en EstudiosYa</h2>
                  
                </div>
            

                <img
                    src={landingImg}
                    alt="Plataforma de Estudios"
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudiar" />
                        Estudiar
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar clases" />
                        Dar clases
                    </Link>
                </div>
                
                <span className="total-connections">
                Estudie donde estes, ya somos mas de 2000 conexiones!{" "}
                    <img src={purpleHeartIcon} alt="Coração Roxo" />
                </span>
            </div>
        </div>
    )
}




export default Dashboard;