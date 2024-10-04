import { useState } from 'react'
import './App.css'
import Login from './Login';
import SelectOption from './SelectOption';
import { BrowserRouter, Route, Router, Routes,  } from 'react-router-dom';
import StudentDonor from './StudentDonor';
import StaffDonor from './StaffDonor';
import OtherDonor from './OtherDonor';
import Volunteer from './Volunteer';
import GetImages from './GetImages';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/blood-donation-camp-admin-portal/' element={<Login/>}/>
          <Route path='/blood-donation-camp-admin-portal/selectoptions/' element={<SelectOption/>}/>
          <Route path='/blood-donation-camp-admin-portal/student/' element={<StudentDonor/>}/>
          <Route path='/blood-donation-camp-admin-portal/staff/' element={<StaffDonor/>}/>
          <Route path='/blood-donation-camp-admin-portal/management/' element={<OtherDonor/>}/>
          <Route path='/blood-donation-camp-admin-portal/guest/' element={<OtherDonor/>}/>
          <Route path='/blood-donation-camp-admin-portal/volunteer/' element={<Volunteer/>}/>
          <Route path='/blood-donation-camp-admin-portal/getimages/' element={<GetImages/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;