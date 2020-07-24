import React, { useState } from "react";
import axiosWithAuth from '../utils/axiosWithAuth'

export default function Login(props) {
  const [user, setUser] = useState({
    username: '',
    password: ''
  })
  const [errors, setErrors] = useState({ login: '' })

  function inputChangeHandler(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  function loginHandler(e) {
    e.preventDefault()
    axiosWithAuth()
      .post('/login', user)
      .then(res => {
        // set token to localstorage
        localStorage.setItem('token', res.data.payload)
        // redirect
        props.history.push('/bubbles')
      })
      .catch(err => {
        console.log({ err })
      })
  }

  return (
    <div className='component-root'>
      <div>
        <h2>
          User Login
        </h2>
      </div>

      <form onSubmit={loginHandler}>
        <div className='input-group'>
          <label htmlFor='username'>
            Username
            <input type='text' name='username' id='username' onChange={inputChangeHandler} />
          </label>
        </div>
        <div className='input-group'>
          <label htmlFor='password'>
            Password
            <input type='text' name='password' id='password' onChange={inputChangeHandler} />
          </label>
        </div>
        <div>{errors.login}</div>
        <button>Login</button>
      </form>

    </div>
  )
}

