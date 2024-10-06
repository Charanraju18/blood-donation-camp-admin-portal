import React from 'react';
import Rightside_Div from './components/Rightside_Div';
import Leftside_Div from './components/Leftside_Div';

// This component consists of 6 options
// Where 4 are Blood donor forms, 1 for change volunter data and
// 1 for getting images of conducted blood camps



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