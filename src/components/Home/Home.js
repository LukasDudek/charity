import React from 'react';
import HomeHeader from '../HomeHeader'
import HomeThreeColumns from '../HomeThreeColumns';
import HomeSimpleSteps from '../HomeSimpleSteps';
import HomeAboutUs from '../HomeAboutUs';
import HomeWhoWeHelp from '../HomeWhoWeHelp';
import HomeContact from '../HomeConatct';

const Home = ({user}) => {
  
  return (
    <>
      <HomeHeader user={user}/>
      <HomeThreeColumns/>
      <HomeSimpleSteps user={user}/>
      <HomeAboutUs/>
      <HomeWhoWeHelp/>
      <HomeContact/>
    </>
  )
}

export default Home;