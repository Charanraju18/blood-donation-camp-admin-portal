import React from "react";
import Images from "./components/Images";
import Leftside_Div from './components/Leftside_Div';
import './GetImages.css'
export default function GetImages() {
  return (
    <>
      <div className="outer_container">
        <Leftside_Div/>
        <div className="images_container">
          {
            Images.map((img, ind) => (
              <div key={ind} className="img_div">
                <img src={img} alt={`Image-${ind + 1}`} className="images"/>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}
