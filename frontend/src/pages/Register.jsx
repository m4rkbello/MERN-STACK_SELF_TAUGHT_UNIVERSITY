/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import {FaUser} from 'react-icons/fa'


function Register() {
    const [formData, setFOrmData] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: '',
    })

    const { name, email, password, confirm_password} = formData

    return <>
           <section className='heading'>
            <h1>
                <FaUser />Register
            </h1>
            <p>Please create an account</p>
           </section>
           <section className='form'>
            <form>
                <input type='text' className='form-control' id='name' name='name' value={name} placeholder='Enter your name' />
            </form>
           </section>
        </>
    
}

export default Register
