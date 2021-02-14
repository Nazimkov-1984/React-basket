import React from 'react';
import Basket from './component/basket';
const scss = require ( './App.module.scss');


const  App: React.FunctionComponent = () => {

  return (
    <div className={scss.basket}>
     <Basket/>
    </div>
  )
}

export default App;
