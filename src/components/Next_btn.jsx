import React from 'react';
import { useNavigate } from 'react-router-dom';
function Next_btn({ comp }) {
	const navigate = useNavigate();
    const handleNext = () => {
        navigate(comp)
    };

    return (
        <div className='next_btn_div'>
            <button onClick={handleNext}>Next</button>
        </div>
    );
}

export default Next_btn;
