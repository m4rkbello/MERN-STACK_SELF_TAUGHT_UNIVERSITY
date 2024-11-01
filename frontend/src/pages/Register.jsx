/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'


function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: '',
    })

    const { name, email, password, confirm_password } = formData

    const handleChangeFormData = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const handleRegisterSubmit = (e) => {
        e.preventDefault()

    }

    return <>
        <section className='heading'>
            <h1>
                <FaUser />Register
            </h1>
            <p>Please create an account</p>
        </section>
        <section className='form'>
            <form onSubmit={handleRegisterSubmit}>
                <div className='form-group'>
                    <input 
                        type='text'
                        className='form-control'
                        id='name'
                        name='name'
                        value={name}
                        placeholder='Enter your name'
                        onChange={handleChangeFormData}
                    />
                </div>
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
                <div className='form-group'>
                    <input 
                        type='password'
                        className='form-control'
                        id='confirm_password'
                        name='confirm_password'
                        value={confirm_password}
                        placeholder='Confirm password'
                        onChange={handleChangeFormData}
                    />
                </div>
               <div className="form-group">
                <button className='btn btn-block' type="submit">Register</button>
               </div>
            </form>
        </section>
    </>

}

export default Register
