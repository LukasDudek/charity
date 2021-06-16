import React from 'react';
import { HashLink } from 'react-router-hash-link';
import {Link} from "react-router-dom";

const Navigation= ({user, mail, handleLogout}) => {

  return (
    <>
      <nav className='navigation-box'>
      {user ? 
        <div className='login-box'>
          <p>Cześć <span>{mail}</span></p>
          <Link to={'/giveThings'}>Oddaj rzeczy</Link>
          <Link onClick={handleLogout} to={'/logout'}>Wyloguj</Link>
        </div>
      :
        <div className='login-box'>
          <Link to={'/login'}> Zaloguj </Link>
          <Link to={'/register'}> Załóż konto </Link>
        </div>
          }
        <div className='main-navigation-box'> 
          <Link to={'/#'}> Start </Link>
          <HashLink to='/#simple-steps'> O co chodzi? </HashLink>
          <HashLink to='/#about-us'> O nas </HashLink>
          <HashLink to={'/#help-places'}> Fundacja i organizacje </HashLink>
          <HashLink to={'/#contact'}> Kontakt </HashLink>
        </div>
      </nav>
    </>
  )
}

export default Navigation;