import React from 'react';
import {Link} from "react-router-dom";

const Navigation= () => {

  return <>
  <nav className='navigation-box'>
    <div className='login-box'>
      <Link> Zaloguj </Link>
      <Link> Załóż konto </Link>
    </div>
    <div className='main-navigation-box'> 
      <Link to={'/#'} > Start </Link>
      <Link to={'/xd'} > O co chodzi? </Link>
      <Link> O nas </Link>
      <Link> Fundacja i organizacje </Link>
      <Link> Kontakt </Link>
    </div>
  </nav>
  </>
}

export default Navigation;