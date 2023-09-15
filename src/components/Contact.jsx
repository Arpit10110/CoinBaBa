import React from 'react'
import "../style/Contact.css"
// import {Link} from "react-router-dom";
const Contact = () => {
  return (
    <div className='Contact' >
       <form className='form'  action='/'>
        <input className='inputs' type="text" placeholder='Enter Your Name' required />
        <input className='inputs' type="text" placeholder='Enter Your Phone no.' required />
        <input className='inputs' type="text" placeholder='Enter Your E-mail' required />
        <input className='inputs' type="text" placeholder='Enter The Message' required />
        <button className='formbtn'>Submit</button>
       </form>
    </div>
  )
}

export default Contact