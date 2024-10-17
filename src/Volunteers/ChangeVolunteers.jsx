import { React, useState } from 'react'
import '../App.css'
import Leftside_Div from '../components/Leftside_Div'
import AddVolunteers from './AddVolunteers'
import EditVolunteers from './EditVolunteers'
import Next_btn from '../components/Next_btn'
// This component shows two options -> Add and edit volunteers
// And redirects to that component if selected

export default function ChangeVolunteers(props) {
  const [comp, setcomp] = useState('')
  const [selectedOption, setSelectedOption] = useState('');

  const add = () =>{
    setcomp('/add_volunteer/')
    setSelectedOption('add')
  }

  const update = () =>{
    setcomp('/update_volunteer/')
    setSelectedOption('edit')
  }

  return (
    <>
      <div className='vol_container'>
        <Leftside_Div className='vol_left'/>
        <div className='vol_right'>
          <div className={`add_volunteer ${selectedOption === 'add' ? 'selected' : ''}`} onClick={add}>
              <h2>Add Volunteer</h2>
          </div>

          <div className={`edit_volunteer ${selectedOption === 'edit' ? 'selected' : ''}`} onClick={update} >
              <h2>Update Volunteer</h2>
          </div>
          <div className='vol_nxt_btn'>
            <Next_btn comp={comp} fun={props.fun}/>
          </div>
        </div>
      </div>
    </>
  )
}
