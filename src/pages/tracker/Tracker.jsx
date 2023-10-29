import React , {useState} from 'react'
import Bmi from '../../components/Bmi'
import ExerciseForm from '../../components/ExerciseForm'
const Tracker = () => {
    
  return (
    <div className=' mt-36 flex justify-center'>
      <a className=' font-bold underline uppercase pt-20 w-[70vh]' href="https://diet-recommendation-system.streamlit.app/Diet_Recommendation">Click here to see your personalised food plan
      <img className='h-[30vh] w-[62vh] mt-10' src="https://plus.unsplash.com/premium_photo-1671379528112-7b19c77a1d58?auto=format&fit=crop&q=80&w=1881&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </a>
      <div className='flex flex-col mx-10'>
         <Bmi/>
         <ExerciseForm/>
      </div>
    </div>
  )
}

export default Tracker
