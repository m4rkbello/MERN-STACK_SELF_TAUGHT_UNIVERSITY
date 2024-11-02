/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function GoalForm() {

    const handleFormSubmit = e => {
        e.preventDefault()
    }


  return <section className='form'>
    <form onSubmit='handleFormSubmit'>

    </form>

  </section>
  
}

export default GoalForm
