import React from 'react';
import HomeContact from '../HomeConatct';
import GiveThingsHeader from '../GiveThingsHeader';
import GiveThingsForm from '../GiveThingsForm';

const GiveThings = () => {
  return (
    <div className='give-things-main-cont'>
      <GiveThingsHeader />
      <GiveThingsForm />
      <HomeContact />
    </div>
  )
};

export default GiveThings;