import React from 'react'
import authlogo from "../../assets/logos/authlogo.png";

function AuthLogo({h,w}) {
  return (
    <div>
       <img src={authlogo} alt="footerLogo" height={h} width={w} />
    </div>
  )
}

export default AuthLogo
