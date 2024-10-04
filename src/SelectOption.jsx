import React from 'react'
import StudentDonor from "./StudentDonor"
import StaffDonor from "./StaffDonor"
import OtherDonor from "./OtherDonor"
import GetImages from './GetImages'
import Volunteer from './Volunteer'
import { useNavigate } from 'react-router-dom'


// This component consists of 6 options
// Where 4 are Blood donor forms, 1 for change volunter data and
// 1 for getting images of conducted blood camps

export default function SelectOption() {
  const navigate = useNavigate();

  return (
    <>
      <div className='options'>
        <div className="left_side_div">

        </div>
        <div className="right_side_div">
          <div className="option_div op1 student" onClick={()=>navigate('/blood-donation-camp-admin-portal/student/')}>
            <h1>Student</h1>
          </div>
          <div className="option_div op2 staff" onClick={()=>navigate('/blood-donation-camp-admin-portal/staff/')}>
            <h1>Staff</h1>
          </div>
          <div className="option_div op3 others" onClick={()=>navigate('/blood-donation-camp-admin-portal/management/')}>
            <h1>Management</h1>
          </div>
          <div className="option_div op4 others" onClick={()=>navigate('/blood-donation-camp-admin-portal/guest/')}>
            <h1>Guest</h1>
          </div>
          <div className="option_div op5 voluteer" onClick={()=>navigate('/blood-donation-camp-admin-portal/volunteer/')}>
            <h1>Volunteer</h1>
          </div>
          <div className="option_div op6 galary" onClick={()=>navigate('/blood-donation-camp-admin-portal/getimages/')}>
            <h1>Gallary</h1>
          </div>
        </div>
      </div>
    </>
  )
}
