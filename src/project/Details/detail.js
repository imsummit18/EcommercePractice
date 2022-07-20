import React from 'react'

import {AiOutlineYoutube,AiOutlineInstagram} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import {RiPinterestLine} from 'react-icons/ri'
import './detail.css'

const Contact = () => {
  return (
    <div className="contact">

        <div className="person-info">
<a href="#"><h1>SUMIT.</h1></a>
<p>Lorem ipsum dolor sit amet consectetur atibus nisi est autem ab. Neque fugit id, eaque incidunt accusamus similique, inventore, hic quos possimus officiis fuga explicabo.</p>
<div className="social-icons">
    <a href="#" className='social'><AiOutlineYoutube className='youtube'/></a>
    <a href="#"  className='social'><AiOutlineInstagram  className='instagram'/></a>
    <a href="#"  className='social'><FiTwitter className='twitter'/></a>
    <a href="#"  className='social'><RiPinterestLine className='instagram'/></a>

</div>

        </div>
        

        <div className="useful-links">
            <h3>Useful Links</h3>
           <div className="link-container">
           <div className="left-side side">
                <a href=""><p>Home</p></a>
                <a href=""><p>Man Fashion</p></a>
                <a href=""><p>Accessories</p></a>
                <a href=""><p>Order Tracking</p></a>
                <a href=""><p>Wishlist</p></a>
            </div>
            <div className="right-side side">
                <a href=""><p>Cart</p></a>
                <a href=""><p>Woman Fashion</p></a>
                <a href=""><p>My Account</p></a>
                <a href=""><p>Wishlist</p></a>
                <a href=""><p>Terms</p></a>
            </div>
           </div>
        </div>
         
         <div className="detail_contact">
            <h3>Contact</h3>
<div className="contact-container">
<p>New Baneshwor-10,Kathmandu</p>
<p>+977-9818160442</p>
<p>sumitghimire018@gmail.com</p>
<a href="#"><img src="https://i.ibb.co/Qfvn4z6/payment.png"  className='card' alt="" /></a>
         
</div>
</div>
        
    </div>
  )
}

export default Contact