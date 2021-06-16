import React, { useState } from 'react'
import Decoration from '../Decoration'
import {Link} from "react-router-dom";
import fire from '../../fire';

const Register = () => {
  const [registerValue, setRegisterValue] = useState(
    {
      mail: '',
      password: '',
      password2: ''
    }
  )
  const [validateErrMail, setValidateErrMail] = useState('')
  const [validateErrPass, setValidateErrPass] = useState('')
  const [validateErrPass2, setValidateErrPass2] = useState('')
  const [succes, setSucces] = useState('');
  const inputRegMail = document.getElementById("inp-reg-mail");
  const inputRegPass = document.getElementById("inp-reg-pass");
  const inputRegPass2 = document.getElementById("inp-reg-pass2");

  const handleRegister = (e) => {
    e.preventDefault()

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(registerValue.mail)) {
      setValidateErrMail('Nieprawidłowy e-mail.');
      inputRegMail.style.borderBottomColor = "red";
      setSucces('')
    } else {
    inputRegMail.style.borderBottomColor = "#3C3C3C";
    setValidateErrMail('');
    }

    if (registerValue.password.length < 6) {
      setValidateErrPass('Nieprawidłowe Hasło');
      inputRegPass.style.borderBottomColor = "red";
      setSucces('')
    } else {
    inputRegPass.style.borderBottomColor = "#3C3C3C";
    setValidateErrPass('');
    }
    
    if (registerValue.password2.length < 6 || registerValue.password2 !== registerValue.password) {
      setValidateErrPass2('Nieprawidłowe lub różne Hasła');
      inputRegPass2.style.borderBottomColor = "red";
      setSucces('')
    } else {
    inputRegPass2.style.borderBottomColor = "#3C3C3C";
    setValidateErrPass2('');
    }

    if (!re.test(registerValue.mail) || registerValue.password.length < 6 || registerValue.password2.length < 6 || registerValue.password2 !== registerValue.password ) {
      return null;
    } else {
      fire
    .auth()
    .createUserWithEmailAndPassword(registerValue.mail, registerValue.password)
    .catch(err => console.log(err))
    }
  }

  return (
    <>
      <div className='login-cont'>
        <h1>Załóż konto</h1>
        <Decoration />
        <form onSubmit={handleRegister} className='regForm'>
          <div className='mailAndPassCont reg'>
            <label>Email</label>
            <input id='inp-reg-mail' type='email' onChange={e => setRegisterValue({...registerValue, mail: e.target.value })}></input>
            <h2 className='validate-err'>{validateErrMail}</h2>
            <label>Hasło</label>
            <input id='inp-reg-pass' type='password' onChange={e => setRegisterValue({...registerValue, password: e.target.value })}></input>
            <h2 className='validate-err'>{validateErrPass}</h2>
            <label>Powtórz Hasło</label>
            <input id='inp-reg-pass2' type='password' onChange={e => setRegisterValue({...registerValue, password2: e.target.value })}></input>
            <h2 className='validate-err'>{validateErrPass2}</h2>
          </div>
          <div className='createAndLogCont'>
            <Link to={'/login'}>Zaloguj się</Link>
            <button type='submit'>Załóż konto</button>
          </div>
        </form>
        <h2 className='succes'>{succes}</h2>
      </div>
    </>
  )
}

export default Register;
