import React from 'react';

const Featurebox = (props) => {
    return (
        <div className="a-box">

          <div className="a-b-img">
             <img src={props.image} alt="myimg" /> 
          </div>  
 
          <div>
             <h2 className="fh2"> {props.title} </h2> 
             <p className="fp2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
 
        </div>
    )
}

export default Featurebox;
