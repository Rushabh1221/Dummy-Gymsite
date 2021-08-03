import React from 'react';
import Featurebox from './Featurebox';
import fimg1 from "../images/1.svg";
import fimg2 from "../images/2.svg";
import fimg3 from "../images/3.svg";
import fimg4 from "../images/4.svg";

const Feature = () => {
    return ( 
        <div id="features">
          <h1>FEATURES</h1>
          <div className="a-container">
            <Featurebox image={fimg1} title="Weight-Lifting"/> 
            <Featurebox image={fimg2} title="Muscle-Gaining"/>
            <Featurebox image={fimg3} title="Muscle-Flexing"/>
            <Featurebox image={fimg4} title="Cardio-Session"/> 
          </div>  
        </div> 
    )
}

export default Feature;
