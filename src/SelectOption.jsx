import React from 'react';
import Rightside_Div from './components/Rightside_Div';
import Leftside_Div from './components/Leftside_Div';



function SelectOption() {

  return (
    <>
      <div className='options'>
        <Leftside_Div/>
        <Rightside_Div/>
      </div>
    </>
  );
}

export default SelectOption;