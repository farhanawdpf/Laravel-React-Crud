import React from 'react'

const Login = () => {
  return (
    <div className='container'> 
    <h2 className='text-align-center'>This is login page</h2>
      <input name="email" placeholder="Email" /><br />
      <input name="password" type="password"  placeholder="Password" /><br /><br />
      <button>Login</button>
    </div>
  )
}

export default Login