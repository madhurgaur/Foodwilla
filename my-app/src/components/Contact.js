import React, { useState } from 'react'
// import { useState } from 'react';
const Contact=() =>{
const [message,setmesssage] =useState(false);
const handleSubmit = (e) =>{
  e.preventDefault()
  setmesssage(true);
}


  return (
    
    
         <div className="contact-container">
      <div className="contact-left">
      <img src= "/Restroimages/contact.png" alt="" />
      </div>
      <div className="contact-right">
      <h1>Contact us</h1>
                <form >
                <input type="text" placeholder="Name" required/>
                    <input type="email" placeholder="Email" required/>
                    <textarea placeholder="Type your Message here..." required></textarea>
                    <button onClick={handleSubmit}>Submit</button>
                    {message && <span>Thanks for contacting FoodFire, We will reply ASAP.</span>}
                </form>
      </div>
    </div>
  )
}

export default Contact;
