import React from 'react'
import logo from "../../assets/logos/bgLogo.png"

function Logo({h,w}) {
  return (
    <div>
       <img src={logo} alt="logo" height={h} width={w} />
    </div>
  )
}

export default Logo
