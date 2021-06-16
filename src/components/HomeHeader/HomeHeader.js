import React from 'react';
import {Link} from "react-router-dom";
import Decoration from '../Decoration/Decoration';

const HomeHeader = ({user}) => {

  return (
    <>
      <div className='home-header-container'>
        <div className="home-hero-img"></div>
        <div className="start-help">
          <h1>
            <span>Zacznij pomagać!</span>
            <span>Oddaj niechciane rzeczy w zaufane ręce</span>
          </h1>
          <Decoration />
          {user ? 
            <div className="home-header-links">
              <Link to={'/giveThings'}>
                <span>ODDAJ</span>
                <span>RZECZY</span>
              </Link>
              <Link to={'/giveThings'}>
                <span>ZORGANIZUJ</span>
                <span>ZBIÓRKĘ</span>
              </Link>
            </div>
          :
            <div className="home-header-links">
              <Link to={'/login'}>
                <span>ODDAJ</span>
                <span>RZECZY</span>
              </Link>
              <Link to={'/login'}>
                <span>ZORGANIZUJ</span>
                <span>ZBIÓRKĘ</span>
              </Link>
          </div>
          }
        </div>
      </div>
    </>
  )
}

export default HomeHeader;