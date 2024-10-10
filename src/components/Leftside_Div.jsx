import React from 'react'

function Leftside_Div(props){
	const isfirst = props.value;
	const spanStyle = {
		backgroundColor : isfirst ? 'skyblue' : 'green',
	};

	const span2Style = {
		backgroundColor : isfirst ? 'green' : 'skyblue'
	}
	return(
		<div className="left_side_div">
			<div className="progress-bar">
				<div className='step' style={spanStyle}>
					<div className='outline'>
						<span >1</span>
					</div>
				</div>
				<div className='step' style={span2Style}>
					<div className='outline'>
						<span>2</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Leftside_Div