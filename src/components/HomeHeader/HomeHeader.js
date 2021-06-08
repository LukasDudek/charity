import React from 'react';
import {Link} from "react-router-dom";
import Decoration from '../Decoration/Decoration';

const HomeHeader = () => {

  return (
    <>
      <div className='home-header-container'>
        <div className="home-hero-img"></div>
        <div className="start-help">
          <h1>Zacznij pomagać! <br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
          <Decoration />
          <div className="home-header-links">
            <Link to={'/logIn'}> ODDAJ <br/> RZECZY </Link>
            <Link to={'/logIn'}> ZORGANIZUJ <br/> ZBIÓRKĘ </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeHeader;