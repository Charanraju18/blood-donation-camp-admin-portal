import React from 'react';
import Rightside_Div from './components/Rightside_Div';
import Leftside_Div from './components/Leftside_Div';
import { useState } from 'react';



function SelectOption() {
    const [isFirst, setIsFirst] = useState(true);

    const toggleIsFirst = () => {
      setIsFirst(prev => !prev);
    };

  return (
    <>
      <div className='options'>
        <Leftside_Div value={isFirst} fun={toggleIsFirst}/>
        <Rightside_Div fun={toggleIsFirst}/>
      </div>
    </>
  );
}

export default SelectOption;