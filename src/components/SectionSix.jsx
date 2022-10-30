import React from 'react'
import PicDown from './img/down-arrow.svg';
import Fade from 'react-reveal/Fade';

function SectionSix({ title, description, leftBtnText, RightBtnText }) {
  return (
    <div className="container__section__six">
    <Fade bottom>
      <div className="section__text">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      </Fade>     
      <div>
         <Fade bottom>
        <div className="btn-group">
          <button>{leftBtnText}</button>
          <button>{RightBtnText}</button>
        </div>
        </Fade>
        <div className="down__arrow">
          <img src={PicDown} alt="" /> 
        </div>
      </div>
  </div>
  )
}

export default SectionSix