import React,{useState}from 'react'
import './newsletter.css'
import{AiOutlineSend} from 'react-icons/ai'
import{IoMdSend} from 'react-icons/io'

const Newsletter = () => {
 
  return (
   <div className="newsletter">
    <div className="newsletter-container">
    <h1>NewsLetter</h1>
    <p>Get  timely updates from your favourite products.</p>
  <div className="input-box">
  <input type="email" 
    className='newsletter-email'
    placeholder='Your email'
   />
 <div className="icon-n">
 <IoMdSend className='send-icon'/>
 </div>

  </div>
    </div>
   </div>
  )
}

export default Newsletter