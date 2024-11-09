/* eslint-disable no-unused-vars */
import React from 'react'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'


function Header() {


    const redirectTo = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const handleLogout = () => {
        dispatch(logout())
        dispatch(reset())
        redirectTo('/login')
    }

    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'>
                    <h1>
                    POMODORO-MERN
                    </h1>
                </Link>
            </div>
            <ul>
                {user ? (
                    <>
                        <li>
                            <button className='btn' onClick={handleLogout}>
                                <FaSignOutAlt />Logout
                            </button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to='/login'>
                                <FaSignInAlt />Login
                            </Link>
                        </li>
                        <li>
                            <Link to='/register'>
                                <FaSignOutAlt />Register
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </header>
    )
};

export default Header;