import React from 'react'
import './register.css'
const Register = () => {
  return (
<>
<div className="register">
<div className="register-input">
  <div className="register-title">
    <h1>CREATE AN ACCCOUNT</h1>
  </div>
<div className="form-input">
<input type="text" className='firstName-register' placeholder='name' />
    <input type="text" className='lastName-register' placeholder=' last name' />
    <input type="text" className='userName-register' placeholder='username' />
    <input type="text" className='userName-register' placeholder='email' />
    <input type="password" className='password-register' placeholder='password' />
    <input type="password" className='password-register' placeholder=' confirm password' />

</div>
    <div className="register-desc">
    By Creating  an account I consent to the processing of my personal data in accordance with the <a href=""><strong>     PRIVACY POLICY</strong></a>
    </div>
<button className="create-register">CREATE</button></div>
</div>



</>
  )
}

export default Register