import React, { useState } from 'react';
// import './index.css'
import '../src/pages/bloodLogin.css'
import { useNavigate } from 'react-router-dom';
import forLoginForm from '../src/pages/Images/forLogin9.png';


export default function Login() {
  const dataBase = [
    {
      adminName : "admin",adminPassword : "1234"
    }
  ]
  const [userData, setuserData] = useState({userName : "",userPassword : ""})
  const navigate = useNavigate();

  const handleChange = (e) =>{
    const {name,value} = e.target;
    setuserData({
      ...userData, [name] : value,
    });
  }

  const handleSubmit = () =>{
    if(userData.userName===dataBase[0].adminName && userData.userPassword===dataBase[0].adminPassword){
        navigate('/selectoptions')
    }
    else{
      console.log("not admin");
      console.log(userData.userName,userData.userPassword)
      console.log("admin")
      console.log(dataBase[0].adminName,dataBase[0].adminPassword)
    }
  }

  return (
    <>
     <div className="rj_container">
      <div className="rj_login-container">
        <div className="rj_circle rj_circle-one"></div>
        <div className="rj_form-container">
          <img src={forLoginForm} alt="illustration" className="rj_illustration" />
          <h1>LOGIN</h1>
          <form>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name='userName'
              id="username"
              placeholder="Enter your username"
              onChange={handleChange}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name='userPassword'
              id="password"
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />

            <button onClick={handleSubmit}>SUBMIT</button>
          </form>
        </div>
        <div className="rj_circle rj_circle-two"></div>
      </div>
    </div>
    </>
  )
}