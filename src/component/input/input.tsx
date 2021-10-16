import React, { useCallback, useState } from "react";
import store from "../../store";

const scss = require("./input.module.scss");

interface IProps {
  id: number;
}
const Input: React.FC<IProps> = ({id}) => {
  const [state, setValue] = useState({ textValue: 1 });

  const setCurrentVal = useCallback(
    (e: any) => {
      const quantity = Number(e.target.value);
      if (Number.isInteger(quantity)) {
        state.textValue = quantity;
        store.setCurrentValue(id, state.textValue);
      }
    },
    [id]
  );

  const defaultQuantity = useCallback(
    (e: any) => {
      if (e.target.value === "") {
        store.defaultQuantity(id);
      }
    },
    [id]
  );

  const clearInput = useCallback(() => {
    store.clearInput(id);
  }, [id]);

  return (
    <input
      className={scss.quantityInput}
      value={
        store.dataCards[store.dataCards.findIndex((x) => x.id === id)]
          .quantity
      }
      onFocus={clearInput}
      onChange={setCurrentVal}
      onBlur={defaultQuantity}
    ></input>
  );
};

export default Input;
