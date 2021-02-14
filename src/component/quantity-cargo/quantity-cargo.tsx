import React, { useCallback } from "react";
import store from "../../store";

import Input from "../input";

const scss = require("./quantity-cargo.module.scss");

const QuantityCargo = (props: { id: number }) => {
  const decrement = useCallback(() => {
    store.decrementQuantity(props.id);
  }, [props.id]);

  const increment = useCallback(() => {
    store.incrmentQuantity(props.id);
  }, [props.id]);

  return (
    <div className={scss.quantityWrapper}>
      <span className={scss.quantityTitle}>Количество</span>
      <div className={scss.quantityButtonWrapper}>
        <button className={scss.quantityButtonMinus} onClick={decrement}>
          -
        </button>
        <Input id={props.id} />
        <button className={scss.quantityButtonPlus} onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

export default QuantityCargo;
