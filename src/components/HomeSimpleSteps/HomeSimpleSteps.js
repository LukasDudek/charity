import React from 'react';
import {Link} from "react-router-dom";
import Decoration from '../Decoration/Decoration'

const HomeSimpleSteps = () => {

  return (
    <>
      <div className='HomeSimpleSteps-container' id='simple-steps'>
        <h1>Wystarczą 4 proste kroki</h1>
        <Decoration />
        <div className='steps-container'>
          <div className='step'>
            <div className='t-shirt icon-step'></div>
            <h2>Wybierz rzeczy</h2>
            <div className='line-decoration'></div>
            <h3>ubrania, zabawki,<br/> sprzęt i inne</h3>
          </div>
          <div className='step'>
            <div className='bag  icon-step'></div>
            <h2>Spakuj je</h2>
            <div className='line-decoration'></div>
            <h3>skorzystaj z<br/> worków na śmieci</h3>
          </div>
          <div className='step'>
            <div className='loupe  icon-step'></div>
            <h2>Zdecyduj komu <br/> chcesz pomóc</h2>
            <div className='line-decoration'></div>
            <h3>wybierz zaufane<br/> miejsce</h3>
          </div>
          <div className='step'>
            <div className='order  icon-step'></div>
            <h2>Zamów kuriera</h2>
            <div className='line-decoration'></div>
            <h3>kurier przyjedzie<br/> w dogodnym terminie</h3>
          </div>
        </div>
        <Link to={'/logIn'}> ODDAJ <br/> RZECZY </Link>
      </div>
    </>
  )
}

export default HomeSimpleSteps;