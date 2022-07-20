import React from 'react'
import {Link} from 'react-router-dom'
import './login.css'
const Login = () => {
  return (
   <div className="log-in">
<div className="login-container">
<div className="login-title">
    <h1>LOG IN</h1>
</div>
<div className="login-input">
    <input type="text" placeholder='username'  />
<input type="password" placeholder='password' />
</div>
    <button className="create-register btn-register">LOGIN </button>

<div className="forget-pass">
<a href="">FORGET A PASSWORD?</a>
</div>
<div className="create-new">
   <Link to='/register'> CREATE A NEW ACCOUNT</Link>
</div>

</div>
</div>

  )
}

export default Login