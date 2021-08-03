import React from 'react';
import aboutimg from "../images/about.png";

const About = () => {
    return (
        <div id="about">
          <div className="about-image">
             <img src={aboutimg} alt="aboutimg" /> 
          </div>  

          <div className="about-text">
             <h1>LEARN MORE ABOUT US</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At earum perferendis, 
               ad fuga id dolorem facere. Distinctio fugiat, corrupti aliquam 
               cum inventore incidunt expedita rem odio minus, quod quia voluptatem.</p> 
             <button>READ MORE</button>
          </div>  
        </div>
    )
}

export default About;
