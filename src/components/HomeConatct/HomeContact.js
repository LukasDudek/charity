import React, {useState} from 'react';
import Decoration from '../Decoration';

const HomeContact = () => {
  const [message, setMessage] = useState(
    {
      name:'',
      mail:'',
      information: ''
    }
  )
  const [validateErrName, setValidateErrName] = useState('')
  const [validateErrMail, setValidateErrMail] = useState('')
  const [validateErrInfo, setValidateErrInfo] = useState('')
  const [succes, setSucces] =useState('');

  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const reOneWord = /^[A-Za-z]+$/

  const handleSendMessage = (e) => {
    e.preventDefault();
    const inputMail = document.getElementById("inpMail");
    const inputName = document.getElementById("inpName");
    const inputInf = document.getElementById("inpInf");
    
    if(!reOneWord.test(message.name)) {
      setValidateErrName('Puste pole lub nieprawidłowe imię.')
      inputName.style.borderBottomColor = "red";
      setSucces('')
    } else {
      inputName.style.borderBottomColor = "#3C3C3C";
      setValidateErrName('');
    }

    if (!re.test(message.mail)) {
      setValidateErrMail('Puste pole lub nieprawidłowy mail.');
      inputMail.style.borderBottomColor = "red";
      setSucces('')
    } else {
    inputMail.style.borderBottomColor = "#3C3C3C";
    setValidateErrMail('');
    }

    if (message.information.length < 120) {
      setValidateErrInfo('Wiadomość musi mieć minimum 120 znaków.');
      inputInf.style.borderBottomColor = "red";
      setSucces('')
    } else {
    inputInf.style.borderBottomColor = "#3C3C3C";
    setValidateErrInfo('');
    }

    if (message.information.length < 120 || !re.test(message.mail) || !reOneWord.test(message.name)) {
      return null;
    } else {
      fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
        method: "post",
        body: JSON.stringify(message),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(response => console.log(response))
        .then(setSucces('Wysłano'))
        .catch(error => {
          console.log(error);
        });
    } 
  }

  return (
    <>
      <div className='home-contact-container' id='contact'> 
        <div className='background-opacity'/>
        <div className='form-container'>
          <h1>Skontaktuj się z nami</h1>
          <Decoration />
          <form onSubmit={handleSendMessage}>
            <div className='name-mail-cont'>
              <div className='half-name-mail'>
                <label>Wpisz swoje imię</label>
                <input id='inpName' placeholder='Lukas' onChange={e => setMessage({...message, name: e.target.value })}></input>
                <h2 className='mail-err'>{validateErrName}</h2>
              </div>
              <div className='half-name-mail'>
                <label>Wpisz swój email</label>
                <input 
                  type='email' 
                  id='inpMail' placeholder='abc@xyz.pl' onChange={e => setMessage({...message, mail: e.target.value })}></input>
                <h2 className='mail-err'>{validateErrMail}</h2>
              </div>
            </div>
            <label>Wpisz swoją wiadomość</label>
            <textarea 
              id='inpInf'
              placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              onChange={e => setMessage({...message, information: e.target.value })}
            >
            </textarea>
            <h2 className='mail-err'>{validateErrInfo}</h2>
            <h2 className='succes'>{succes}</h2>
            <button type='submit'>Wyślij</button>
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