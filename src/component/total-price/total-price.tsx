import React from 'react';
import store  from '../../store';
import {observer} from 'mobx-react-lite';

const  scss = require ('./total-price.module.scss');

const TotalPrice = observer( () => {


  return (
    <div className = {scss.totalPriceWrapper}>
      <span className = {scss.totalPriceText}>Общая сумма:</span>
      <div className = {scss.totalPriceNumberWrapper}>
      <span className = {scss.totalPriceNumber}>{store.getTotalSum}</span> <span className = 'total-price__number'>&#8372;</span>
      </div>
      
    </div>
  )
})

export default TotalPrice;