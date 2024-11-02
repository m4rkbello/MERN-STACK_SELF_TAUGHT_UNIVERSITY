/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
//REDUXISM
import { register, reset } from '../features/auth/authSlice'
//COMPONENTS
import Spinner from '../components/Spinner'
import GoalForm from '../components/GoalForm'
//ICONS
import { FaUser } from 'react-icons/fa'

function Dashboard() {

  const redirectTo = useNavigate()

  const {user} = useSelector((state) => state.auth)


  useEffect(() => {
    if(!user) {
      redirectTo('/login')
    }

    console.log(user);
  },[user, redirectTo])

  return (
    <>
    <section className="heading">
      <h1>Welcome {user ? user.name : ''}</h1>
      <h4>{user ? user.email : ''}</h4>
      <p>TODO-MERN Dashboard</p>
    </section>
    <GoalForm />
    </>
  )
}

export default Dashboard
