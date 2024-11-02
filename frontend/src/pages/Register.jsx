/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
//REDUXISM
import { register, reset } from '../features/auth/authSlice'
//COMPONENTS
import Spinner from '../components/Spinner'
//ICONS
import { FaUser } from 'react-icons/fa'


function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: '',
    })

    //Destructuring
    const { name, email, password, confirm_password } = formData

    const redirectTo = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} =  useSelector((state) => state.auth)

    const handleChangeFormData = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    //bantay
    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        if(isSuccess || user)  {
            redirectTo('/')
        }

        dispatch(reset())

    },[user, isError, isSuccess, message, redirectTo, dispatch])

    const handleRegisterSubmit = (e) => {
        e.preventDefault()

        //check if match ang password
        if(password !== confirm_password){
            toast.error('Password do not match!')
        }else{
            const userData = {
                name,
                email,
                password
            }

            dispatch(register(userData))
        }
    }

    //spinner or loading 
    if(isLoading){
        return <Spinner />
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
