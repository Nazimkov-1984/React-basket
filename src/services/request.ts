import { fetchGoods, getData } from "../repo/api";
import store from "../store";

class API {
  static getData = () => {
    getData()
      .then(function (response) {
        if (response.status === 200 && response != null) {
          let data = response.data;
          //store.dataCards;
          return data;
        } else {
          throw new Error("Empty data");
        }
      })
      .catch(function (error) {
        console.log(error);
        return [];
      });
  };
  static fetchGoods = () => {
   fetchGoods().then(data => {
     store.setGoods(data)
   })
  };
}
export default API;
