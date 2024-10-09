import React from 'react'

function Leftside_Div(steps){
	return(
		<div className="left_side_div">
			<div className="progress-bar">
			<div className={`step ${steps === 2 ? 'completed' : ''}`}>
                    {steps < 2 ? '&#10003;' : "1"}
                </div>
                <div className={`step ${steps === 3 ? 'completed' : ''}`}>
                    {steps < 3 ? '&#10003;' : "2"}
                </div>
			</div>
		</div>
	)
}

export default Leftside_Div