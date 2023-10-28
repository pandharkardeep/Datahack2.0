import React , {useState} from 'react'
import Bmi from '../../components/Bmi'
const Tracker = () => {
    
  return (
    <div className=' mt-36 flex justify-center'>
      <a className=' font-bold underline uppercase pt-20' href="https://diet-recommendation-system.streamlit.app/Diet_Recommendation">Click here to see your personalised food plan</a>
       
      <div className='flex flex-col mx-10'>
         <Bmi/>
      </div>
    </div>
  )
}

export default Tracker
