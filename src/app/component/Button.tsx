import "./Section.css";
import Section from "./Section";
export default function Button({ rightBtnText, leftBtnText }) {
  return (
    <div className="mainButton">
      
      <div className="rightButton">
        {rightBtnText }
        </div>
     
      {leftBtnText &&
       <div className="leftButton">
       {leftBtnText}
     </div>
      }
    </div>
  );
}
