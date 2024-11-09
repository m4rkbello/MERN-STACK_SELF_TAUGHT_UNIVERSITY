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
import { getGoals, resetGoals } from '../features/goals/goalSlice'

function Dashboard() {

  const redirectTo = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const {goals, isLoading, isError, message} = useSelector((state) => state.goals)

  useEffect(() => {
    //check if naay mga errors
    if(isError) {
      console.log(message);
    }

    //e check if dili user ebalik sa route - /login
    if(!user) {
      redirectTo('/login')
    }
    console.log(user);

    dispatch(getGoals())

    return () => {
      dispatch(reset)
    }
  },[user, redirectTo, isError, message, dispatch])

  //awaits - pending - loading
  if(isLoading) {
    return <Spinner />
  }

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
