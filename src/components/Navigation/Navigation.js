import React from 'react';
import { HashLink } from 'react-router-hash-link';
import {Link} from "react-router-dom";

const Navigation= () => {

  return (
    <>
      <nav className='navigation-box'>
        <div className='login-box'>
          <Link to={'/logIn'}> Zaloguj </Link>
          <Link to={'/register'}> Załóż konto </Link>
        </div>
        <div className='main-navigation-box'> 
          <Link to={'/#'} > Start </Link>
          <HashLink to={'/#simple-steps'} > O co chodzi? </HashLink>
          <HashLink to={'/#about-us'}> O nas </HashLink>
          <HashLink to={'/#help-places'}> Fundacja i organizacje </HashLink>
          <HashLink to={'/#contact'}> Kontakt </HashLink>
        </div>
      </nav>
    </>
  )
}

export default Navigation;