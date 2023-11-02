"use client"

import DownArrow from "./DownArrow";
import "./Section.css";
import Fade from 'react-reveal/Fade';

import Button from "./Button";
export default function Section({title, description, backgroundImg, leftBtnText, rightBtnText}) {
  console.log(backgroundImg)
  return (
    <div  className={`sectionContainer `+backgroundImg + ` bg-cover bg-center`} >
      
          
          <div className="itemText">
            <Fade bottom>
          <h1>{title}</h1>
        <p className="description">{description}</p>
        </Fade>
      </div>
      
        <div className="buttonGroup">
        <Fade bottom>
          <Button rightBtnText={rightBtnText} leftBtnText={leftBtnText} />
        <DownArrow />
         </Fade>
      </div>
      
      </div>
      
      
        
  );
}
