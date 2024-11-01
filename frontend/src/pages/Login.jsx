/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'


function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    //destructuring - tagi2
    const {email, password} = formData

    //input setter
    const handleChangeFormData = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.email]: e.target.value,
        }))
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault()
    }

    return <>
        <section className='heading'>
            <h1>
                <FaSignInAlt />Register
            </h1>
            <p>Login</p>
        </section>
        <section className='form'>
            <form onSubmit={handleLoginSubmit}>

                <div className='form-group'>
                    <input 
                        type='email'
                        className='form-control'
                        id='email'
                        name='email'
                        value={email}
                        placeholder='Enter your email'
                        onChange={handleChangeFormData}
                    />
                </div>
                <div className='form-group'>
                    <input 
                        type='password'
                        className='form-control'
                        id='password'
                        name='password'
                        value={password}
                        placeholder='Enter password'
                        onChange={handleChangeFormData}
                    />
                </div>

               <div className="form-group">
                <button className='btn btn-block' type="submit">Login</button>
               </div>
            </form>
        </section>
    </>

}

export default Login
