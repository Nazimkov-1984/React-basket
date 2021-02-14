import React from 'react';
const  scss = require ('./price-cargo.module.scss');

 const  PriceCargo = (props: { price: number }) =>  {

  return (
    <div className = {scss.cardPriceWrapper}>
      <span className = {scss.cardPrice}>{props.price}</span>
      <span className = {scss.cardPriceCurrency}> &#8372; </span>
    </div>
    )
}

export default PriceCargo;