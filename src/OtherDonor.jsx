
import React, { useState } from 'react';
import Leftside_Div from './components/Leftside_Div';

export default function OtherDonor() {
  const [formData, setFormData] = useState({
    name: '',
    rollNo: '',
    mobile: '',
    email: '',
    college: '',
    department: '',
    year: '',
    section: '',
    venue: '',
    bloodGroup: '',
    gender: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const mobileRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.mobile || !mobileRegex.test(formData.mobile)) {
      alert('Please enter a valid 10-digit mobile number.');
      return false;
    }

    if (!formData.email || !emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      console.log('Form submitted:', formData);

      setFormData({
        name: '',
        rollNo: '',
        mobile: '',
        email: '',
        college: '',
        department: '',
        year: '',
        section: '',
        venue: '',
        bloodGroup: '',
        gender: '',
      });
    }
  };

  return (
    <>
      <div className='options'>
        <Leftside_Div/>
        <div className='form'>
        <form onSubmit={handleSubmit} className='donor'>
          <h2>Donor Details</h2>
          <br />
          <div>
            <label>
              Name of the Donor: <br />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Enter Roll No: <br />
              <input
                type="text"
                name="rollNo"
                value={formData.rollNo}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div>
            <label>
              Mobile Number: <br />
              <input
                type="number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div>
            <label>
              Email Id: <br />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div>
            <label>
              College: <br />
              <select name="college" value={formData.college} onChange={handleChange} required>
                <option value="">--Select College--</option>
                <option value="AEC">Aditya Engineering College</option>
                <option value="ACET">Aditya College of Engineering &amp; Technology </option>
                <option value="ACOE">Aditya College of Engineering</option>
                <option value="APTC">Aditya Polytechnic Colleges</option>
                <option value="AGBS">Aditya Global Business Schools</option>
                <option value="APC">Aditya Pharmacy College</option>
                <option value="ACP">Aditya College of Pharmacy</option>
                <option value="AFSC">Aditya Forensic Science</option>
                <option value="BPED">Physical Education</option>
              </select>
            </label>
          </div>

          <div>
            <label>
              Department: <br />
              <select name="department" value={formData.department} onChange={handleChange} required>
                <option value="">--Select Department--</option>
                <option value="AE">AE</option>
                <option value="AMBA"> AMBA</option>
                <option value="B.PHARMACY"> B.PHARMACY</option>
                <option value="BBA"> BBA</option>
                <option value="BM"> BM</option>
                <option value="CIVIL"> CIVIL</option>
                <option value="CME"> CME</option>
                <option value="CSE"> CSE</option>
                <option value="ECE"> ECE</option>
                <option value="EEE"> EEE</option>
                <option value="forensic"> forensic</option>
                <option value="GMBA"> GMBA</option>
                <option value="IMBA"> IMBA</option>
                <option value="IT"> IT</option>
                <option value="M.PHARACY(ANALYSIS)"> M.PHARACY(ANALYSIS)</option>
                <option value="M.PHARACY(PHARMACEUTICS)"> M.PHARACY(PHARMACEUTICS)</option>
                <option value="M.PHARM"> M.PHARM</option>
                <option value="MBA"> MBA</option>
                <option value="ME"> ME</option>
                <option value="MECH"> MECH</option>
                <option value="PET"> PET</option>
                <option value="PGDM"> PGDM</option>
                <option value="PHARM.D"> PHARM.D</option>
                <option value="PHARM.D (PB)"> PHARM.D (PB)</option>
                <option value="PT"> PT</option>
                <option value="MCA"> MCA</option>
                <option value="BPED"> BPED</option>
                <option value="AI&amp;ML">AI&amp;ML</option>
                <option value="IoT">IoT</option>
              </select>
            </label>
          </div>

          <div>
            <label>
              Year: <br />
              <select name="year" value={formData.year} onChange={handleChange} required>
                <option value="">--Select Year--</option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
                <option value="V">V</option>
                <option value="VI">VI</option>
              </select>
            </label>
          </div>

          <div>
            <label>
              Section: <br />
              <select name="section" value={formData.section} onChange={handleChange} required>
                <option value="">--Select Section--</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </label>
          </div>

          <div>
            <label>
              Venue: <br />
              <select name="venue" value={formData.venue} onChange={handleChange} required>
                <option value="">--Select Venue--</option>
                <option value="CB">Cotton Bhavan</option>
                <option value="KLRB">KL Rao Bhavan</option>
                <option value="BGB">Billgates Bhavan</option>
                <option value="VSB">Visweswaraya Bhavan</option>
                <option value="CVRB">CV Raman Bhavan</option>
                <option value="RB">Ramanujan Bhavan </option>
                <option value="NB">Newton Bhavan </option>
                <option value="AKB">Abdul Kalam Bhavan </option>
                <option value="ACP"> Aditya College of Pharmacy</option>
              </select>
            </label>
          </div>

          <div>
            <label>
              Blood Group: <br />
              <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required>
                <option value="">--Select Blood Group--</option>
                <option value="A+">A+</option>
                <option value="O+">O+</option>
                <option value="B+">B+</option>
                <option value="AB+">AB+</option>
                <option value="A-">A-</option>
                <option value="O-">O-</option>
                <option value="B-">B-</option>
                <option value="AB-">AB-</option>
                <option value="UnKnown">UnKnown</option>
              </select>
            </label>
          </div>

          <div>
            <label>Gender:</label>
            <label>
              <br />
              <input
                className='gender'
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
                required
              />
              Male
            </label>
            <label> <br />
              <input
                className='gender'
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
                required
              />
              Female
            </label>
          </div>

          <div className='sub'>
            <button type="submit" className='submit_btn'>Submit</button>
          </div>
        </form>
        </div>
      </div>
    </>
  );
}
