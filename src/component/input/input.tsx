import React, { useCallback, useState } from "react";
import store from "../../store";

const scss = require("./input.module.scss");

const Input = (props: { id: number }) => {
  const [state, setValue] = useState({ textValue: 1 });

  const setCurrentVal = useCallback(
    (e: any) => {
      const quantity = Number(e.target.value);
      if (Number.isInteger(quantity)) {
        state.textValue = quantity;
        store.setCurrentValue(props.id, state.textValue);
      }
    },
    [props.id]
  );

  const defaultQuantity = useCallback(
    (e: any) => {
      if (e.target.value === "") {
        store.defaultQuantity(props.id);
      }
    },
    [props.id]
  );

  const clearInput = useCallback(() => {
    store.clearInput(props.id);
  }, [props.id]);

  return (
    <input
      className={scss.quantityInput}
      value={
        store.dataCards[store.dataCards.findIndex((x) => x.id === props.id)]
          .quantity
      }
      onFocus={clearInput}
      onChange={setCurrentVal}
      onBlur={defaultQuantity}
    ></input>
  );
};

export default Input;
