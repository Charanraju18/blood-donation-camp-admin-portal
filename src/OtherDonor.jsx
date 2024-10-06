import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name of the Donor:
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
          Enter Roll No:
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
          Mobile Number:
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
          Email Id:
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
          College:
          <select name="college" value={formData.college} onChange={handleChange} required>
            <option value="">--Select College--</option>
            <option value="College A">College A</option>
            <option value="College B">College B</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Department:
          <select name="department" value={formData.department} onChange={handleChange} required>
            <option value="">--Select Department--</option>
            <option value="CS">Computer Science</option>
            <option value="EE">Electrical Engineering</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Year:
          <select name="year" value={formData.year} onChange={handleChange} required>
            <option value="">--Select Year--</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Section:
          <select name="section" value={formData.section} onChange={handleChange} required>
            <option value="">--Select Section--</option>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Venue:
          <select name="venue" value={formData.venue} onChange={handleChange} required>
            <option value="">--Select Venue--</option>
            <option value="Hall 1">Hall 1</option>
            <option value="Hall 2">Hall 2</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Blood Group:
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
          </select>
        </label>
      </div>

      <div>
        <label>Gender:</label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === 'Male'}
            onChange={handleChange}
            required
          />
          Male
        </label>
        <label>
          <input
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

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
