import React, {useCallback} from "react";
import API from "../../services/request";
const scss = require("./button-submit.module.scss");

const ButtonSubmit = () => {
  const getData = useCallback(() =>{
    API.getData()
  }, [])

  return (
    <button type="submit" className={scss.basketButton} onClick={getData}>
      ОФОРМИТЬ
    </button>
  );
};

export default ButtonSubmit;
