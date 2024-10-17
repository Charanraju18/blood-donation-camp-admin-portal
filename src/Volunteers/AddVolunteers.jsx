import React from 'react'
import Volunteer from '../Volunteer'
import Leftside_Div from '../components/Leftside_Div'
// We will be having a form and we
// need to collect the data in JSON format

export default function AddVolunteers() {
  return (
    <>
      <div className='vol_container'>
        <Leftside_Div className='vol_left'/>
        <Volunteer className='vol_right'/>
      </div>
    </>
  )
}
