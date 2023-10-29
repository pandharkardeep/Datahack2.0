import React , {useState} from 'react'
import Bmi from '../../components/Bmi'
import ExerciseForm from '../../components/ExerciseForm'
const Tracker = () => {
    
  return (
    <div className=' mt-36 flex justify-center'>
      <a className=' font-bold underline uppercase pt-20 w-[70vh]' href="https://diet-recommendation-system.streamlit.app/Diet_Recommendation">Click here to see your personalised food plan
      <img className='h-[30vh] w-[62vh] mt-10' src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bnV0cml0aW9ufGVufDB8fDB8fHww" alt="" />
      </a>
      <div className='flex flex-col mx-10'>
         <Bmi/>
         <ExerciseForm/>
      </div>
    </div>
  )
}

export default Tracker
