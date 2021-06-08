import React from 'react';
import Decoration from '../Decoration';

const HomeContact = () => {

  return (
    <>
      <div className='home-contact-container' id='contact'> 
        <div className='background-opacity'/>
        <div className='form-container'>
          <h1>Skontaktuj się z nami</h1>
          <Decoration />
          <form>
            <div className='name-mail-cont'>
              <div className='half-name-mail'>
                <label>Wpisz swoje imię</label>
                <input placeholder='Lukas'></input>
              </div>
              <div className='half-name-mail'>
                <label>Wpisz swój email</label>
                <input placeholder='abc@xyz.pl'></input>
              </div>
            </div>
            <label>Wpisz swoją wiadomość</label>
            <textarea placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'></textarea>
            <button>Wyślij</button>
          </form>
        </div>
        <footer>
          <div className='copyright'>
            <h1>Copyright by Coders Lab</h1>
          </div>
          <div className='social-icon'>
            <div className='facebook-icon'></div>
            <div className='instagram-icon'></div>
          </div>
        </footer>
      </div>
      
    </>
  )
}

export default HomeContact;