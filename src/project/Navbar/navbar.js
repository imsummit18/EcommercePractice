import React from 'react'
import { AiOutlineSearch,AiOutlineShoppingCart } from 'react-icons/ai'
import './navbar.css'
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <div className='navbar'>
           
            <div className="bottom">
                <div className="left">
                    <div className="select">
                        <select name="select" id="selectOption">
                            <option className='option' value="English">EN</option>
                            <option value="Nepali">NEP</option>
                        </select>
                        <div className="search-btn">
                            <input type="text" placeholder='search' />
                            <AiOutlineSearch className='search-icons' />

                        </div>
                    </div>
                </div>
                <div className="center">
   <Link to='/' className='logo'><p className='logo'>SUMIT.</p></Link>
                </div>
                <div className="right">
                 <Link to='/login' className='login'><p className='signin'>SIGN IN</p></Link>
                 <Link to='/register' className='login'><p className='signin'>REGISTER</p></Link>
                    <AiOutlineShoppingCart className='shoppingCart'/>
            
                    
                     </div>
            </div>


        </div>
    )
}

export default Navbar