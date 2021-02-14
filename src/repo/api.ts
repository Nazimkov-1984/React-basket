import axios from "axios";
import { IDataCard } from "../store/index";


export const getData = (filmName: string = 'Bullet') => {
  return axios.get(
    `http://www.omdbapi.com/?r=json&s=${filmName}&apikey=2a7d7e9f&`
  );
};
export const fetchGoods = (): Promise<Array<IDataCard>> => {
  return new Promise((resolve) => {
    resolve([
      {
        id: 0,
        name: "Кресло для геймеров Hator Sport",
        price: 4100,
        imgSrc:
          "https://user-images.githubusercontent.com/61156194/104780395-674a7100-5789-11eb-93de-bbb8f95925df.jpg",
        quantity: 1,
      },
      {
        id: 1,
        name: "Умные часы Smart Pink Forever",
        price: 1400,
        imgSrc:
          "https://user-images.githubusercontent.com/61156194/104780421-74676000-5789-11eb-894e-c31e46808bd0.png",
        quantity: 1,
      },
      {
        id: 2,
        name: "Графический планшет Wacom",
        price: 2100,
        imgSrc:
          "https://user-images.githubusercontent.com/61156194/104780467-86490300-5789-11eb-8f71-92165f88d157.jpg",
        quantity: 1,
      },
    ]);
  });
};