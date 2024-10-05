import React, { useState } from 'react';
import './index.css'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const dataBase = [{adminName : "admin",adminPassword : "1234"}]
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
      <div className='login_div'>
        <div className='login'>
          <h2>User Login</h2><br />
          <label>Username</label>
          <br />
          <input type="text" name='userName' placeholder='Enter username'  onChange={handleChange}/>
          <br />
          <label>Password</label>
          <br />
          <input type="password" name='userPassword' placeholder='Enter password' onChange={handleChange}/>
          <center><button onClick={handleSubmit}>Submit</button></center>
        </div>
      </div>
    </>
  )
}