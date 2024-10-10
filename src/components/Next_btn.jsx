import {React} from 'react';
import { useNavigate } from 'react-router-dom';
function Next_btn({ comp , fun}) {
	const navigate = useNavigate();

    const handleNext = () => {
        fun();
        navigate(comp)
    };

    return (
        <div className='next_btn_div'>
            <button onClick={handleNext}>Next</button>
        </div>
    );
}

export default Next_btn;
