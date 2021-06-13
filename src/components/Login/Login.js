import React, { useState } from 'react'
import Decoration from '../Decoration'
import {Link} from "react-router-dom";

const Login = () => {
  const [loginValue, setLoginValue] = useState(
    {
      mail: '',
      password: ''
    }
  )
  const [validateErrMail, setValidateErrMail] = useState('')
  const [validateErrPass, setValidateErrPass] = useState('')
  const [succes, setSucces] = useState('');

  const inputLogMail = document.getElementById("inp-log-mail");
  const inputLogPass = document.getElementById("inp-log-pass");

  const handleLogin = (e) => {
    e.preventDefault();
    

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if (!re.test(loginValue.mail)) {
      setValidateErrMail('Nieprawidłowy e-mail.');
      inputLogMail.style.borderBottomColor = "red";
      setSucces('')
    } else {
    inputLogMail.style.borderBottomColor = "#3C3C3C";
    setValidateErrMail('');
    }

    if (loginValue.password.length < 6) {
      setValidateErrPass('Nieprawidłowe Hasło');
      inputLogPass.style.borderBottomColor = "red";
      setSucces('')
    } else {
    inputLogPass.style.borderBottomColor = "#3C3C3C";
    setValidateErrPass('');
    }

    if (loginValue.password.length < 6 || !re.test(loginValue.mail)) {
      return null;
    } else {
      setSucces('Zalogowano');
    }

  }

  return (
    <>
      <div className='login-cont'>
        <h1>Zaloguj się</h1>
        <Decoration />
        <form onSubmit={handleLogin}>
          <div className='mailAndPassCont'>
            <label>Email</label>
            <input type='email' id='inp-log-mail' onChange={e => setLoginValue({...loginValue, mail: e.target.value })} ></input>
            <h2 className='validate-err'>{validateErrMail}</h2>
            <label>Hasło</label>
            <input id='inp-log-pass' onChange={e => setLoginValue({...loginValue, password: e.target.value })} type='password'></input>
            <h2 className='validate-err'>{validateErrPass}</h2>
          </div>
          <div className='createAndLogCont'>
            <Link to={'/register'}>Załóż konto</Link>
            <button type='submit'>Zaloguj się</button>
          </div>
          <h2 className='succes'>{succes}</h2>
        </form>
      </div>
    </>
  )
}

export default Login;
