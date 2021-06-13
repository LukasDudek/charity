import React from 'react'
import Decoration from '../Decoration'
import {Link} from "react-router-dom";

const Logout = () => {
  return (
    <>
      <div className='logout-cont'>
        <h1>
          <span>Wylogowanie nastąpiło</span>
          <span>pomyślnie!</span>
        </h1>
        <Decoration />
        <Link to={'/#'}>Strona Główna</Link>
      </div>
    </>
  )
}

export default Logout;
