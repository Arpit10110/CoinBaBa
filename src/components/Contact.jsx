import React from 'react'
import "../style/Contact.css"
// import {Link} from "react-router-dom";
const Contact = () => {
  return (
    <div className='Contact' >
       <form className='form'  action='https://formspree.io/f/mpzglrne' method='POST'>
        <input className='inputs' type="text" name='Name' placeholder='Enter Your Name' required />
        <input className='inputs' type="text" name='Phoneno' placeholder='Enter Your Phone no.' required />
        <input className='inputs' type="text" name='Email' placeholder='Enter Your E-mail' required />
        <input className='inputs' type="text" name='Message' placeholder='Enter The Message' required />
        <button type='submit' className='formbtn'>Submit</button>
       </form>
    </div>
  )
}

export default Contact