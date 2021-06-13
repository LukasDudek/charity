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
          <span>Nori grape silver beet broccoli kombu beet</span>
          <span>greens fava bean potato quandong celery.</span>
          <span>Bunya nuts black-eyed pea prairie turnip leek</span>
          <span>lentil turnip greens parsnip.</span>
        </h2>
        <div className='signature'></div>
      </div>
      <div className='aboutUs-picture'></div>
    </div>
  </>
  ) 
}

export default HomeAboutUs;