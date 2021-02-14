import React from 'react';

const  scss = require ('./cargo-card.module.scss');

const CargoCard = (props: { children: React.ReactNode; }) => {

  return (
    <div className = {scss.cardWrapper}>
    {props.children}
  </div>
)
}


export default CargoCard;