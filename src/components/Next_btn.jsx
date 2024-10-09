import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Leftside_Div from './Leftside_Div';
function Next_btn({ comp }) {
    const [step, setstep] = useState(1)
	const navigate = useNavigate();

    const handleNext = () => {
        setstep(step+1);
        <Leftside_Div steps={step}/>
        navigate(comp)
        console.log(step)
    };

    return (
        <div className='next_btn_div'>
            <button onClick={handleNext}>Next</button>
        </div>
    );
}

export default Next_btn;
