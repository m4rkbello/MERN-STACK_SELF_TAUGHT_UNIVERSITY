/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
//REDUXISM
import { login, reset } from '../features/auth/authSlice'
//COMPONENTS
import Spinner from '../components/Spinner'
//ICONS
import { FaUser, FaSignInAlt } from 'react-icons/fa'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    //destructuring - tagi2
    const {email, password} = formData

    const redirectTo = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} =  useSelector((state) => state.auth)

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

    //input setter
    const handleChangeFormData = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password,
        }

        dispatch(login(userData))
    }

    //spinner or loading 
    if(isLoading){
        return <Spinner />
    }
    

    return <>
        <section className='heading'>
            <h1>
                <FaSignInAlt />Login
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
