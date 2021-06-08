import React from 'react';
import Decoration from '../Decoration'

const HomeAboutUs = () => {

  return (
  <>
    <div className='HomeAboutUs-conatainer' id='about-us'>
      <div className='aboutUs-info'>
        <h1>O nas</h1>
        <Decoration />
        <h2>
          Nori grape silver beet broccoli kombu beet<br/>greens fava bean potato quandong celery.<br/> Bunya nuts black-eyed pea prairie turnip leek<br/> lentil turnip greens parsnip.
        </h2>
        <div className='signature'></div>
      </div>
      <div className='aboutUs-picture'></div>
    </div>
  </>
  ) 
}

export default HomeAboutUs;