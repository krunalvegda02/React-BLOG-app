import React from 'react'
import { Login as LoginComponent } from '../components'

function Login() {
  return (
    <div className='py-8'>
      console.log("Login component rendered");
      <LoginComponent />
    </div>
  )
}

export default Login
