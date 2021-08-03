import React from 'react';

const Contact = () => {
    return (
        <div id="contact">
           <h1>CONTACT US</h1> 
           <form action="">
              <input type="text" placeholder="Write your Full Name" required />
              <input type="email" placeholder="Write your E-mail" required />
              <textarea name="message" placeholder="Write Here..." cols="30" rows="10"></textarea>
              <input type="submit" value="SEND" /> 
           </form> 
             
           <div className="text-center">
              <a href="#" target="blank"><i className="fab fa-twitter fa-2x i-color mr-3"></i></a>
              <a href="#" target="blank"><i className="fab fa-facebook fa-2x i-color mr-3"></i></a>
              <a href="#" target="blank"><i className="fab fa-instagram fa-2x i-color mr-3"></i></a>
              <a href="#" target="blank"><i className="fab fa-dribbble fa-2x i-color mr-3"></i></a>               
           </div>  
        </div>
    )
}

export default Contact;
