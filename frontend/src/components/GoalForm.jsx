/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {createGOal} from '../features/goals/goalSlice'

function GoalForm() {
  const [text, setText] = useState('')


  //ADD useDispatch of react-redux to pass the data on it's action
  const dispatch = useDispatch()

//function para ipasa sa redux
  const handleOnSubmitAddGoal = e => {
    e.preventDefault()
    dispatch(createGoal({text}))
    setText('')
  }


  return <section className='form'>
    <div className='form-group'>

    <form onSubmit='handleFormSubmit'>

      <label htmlFor='text'>Goal</label>
      <input type='text' name='text' id='text' value={text} onChange={(e) => setText()}  />
    </form>
    </div>
    <div className='form-group'>
      <button className='btn btn-block' type='submit'>Add Goal</button>
    </div>

  </section>

}

export default GoalForm
