import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Next_btn from './Next_btn';

function Rightside_Div(props) {
    const navigate = useNavigate();
    const [comp, setComp] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    const handleStudentClick = () => {
		setComp('/student/');
        setSelectedOption('student');
    };
    const handleStaffClick = () => {
        setComp('/staff/');
        setSelectedOption('staff');
    };
    const handleOther1Click = () => {
        setComp('/management/');
        setSelectedOption('management');
    };
    const handleOther2Click = () => {
        setComp('/guest/');
        setSelectedOption('guest');
    };
    const handleVolunteerClick = () => {
        setComp('/volunteer/');
        setSelectedOption('volunteer');
    };
    const handleImagesClick = () => {
        setComp('/getimages/');
        setSelectedOption('gallery');
    };

    return (
        <div className="right_side_div">
            <h1>Select Donor</h1>
            <div className="option_container">
                <div
                    className={`option_div op1 student ${selectedOption === 'student' ? 'selected' : ''}`}
                    onClick={handleStudentClick}
                >
                    <h1>Student</h1>
                </div>
                <div
                    className={`option_div op2 staff ${selectedOption === 'staff' ? 'selected' : ''}`}
                    onClick={handleStaffClick}
                >
                    <h1>Staff</h1>
                </div>
                <div
                    className={`option_div op3 others ${selectedOption === 'management' ? 'selected' : ''}`}
                    onClick={handleOther1Click}
                >
                    <h1>Management</h1>
                </div>
                <div
                    className={`option_div op4 others ${selectedOption === 'guest' ? 'selected' : ''}`}
                    onClick={handleOther2Click}
                >
                    <h1>Guest</h1>
                </div>
            </div>
            <h1>Select Operation</h1>
            <div className="option_container">
                <div
                    className={`option_div op5 volunteer ${selectedOption === 'volunteer' ? 'selected' : ''}`}
                    onClick={handleVolunteerClick}
                >
                    <h1>Volunteer</h1>
                </div>
                <div
                    className={`option_div op6 gallery ${selectedOption === 'gallery' ? 'selected' : ''}`}
                    onClick={handleImagesClick}
                >
                    <h1>Gallery</h1>
                </div>
            </div>
            <Next_btn comp={comp} fun={props.fun}/>
        </div>
    );
}

export default Rightside_Div;
