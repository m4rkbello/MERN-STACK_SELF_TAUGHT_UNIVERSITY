/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function GoalForm() {
  const [text, setText] = useState('')
  

  const handleFormSubmit = e => {
    e.preventDefault()
  }


  return <section className='form'>
    <form onSubmit='handleFormSubmit'>

      <label htmlFor='text'>Goal</label>
      <input type='text' />
    </form>

  </section>

}

export default GoalForm
