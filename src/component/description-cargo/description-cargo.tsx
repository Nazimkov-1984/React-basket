import React from 'react';
import './description-cargo.css';


const DescriptionCargo = (props: { imgSrc: string | undefined; name: string | undefined }) => {
  return (
    <div className = 'card__description-wrapper'>
      <img src= {props.imgSrc} alt = 'some cargo' className = 'card__description--img'></img>
      <h3 className = 'card__title'>{props.name}</h3>
    </div>
  )
}
    
export default DescriptionCargo; 