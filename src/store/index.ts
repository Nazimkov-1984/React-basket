import { observable, computed, makeAutoObservable, action } from "mobx";

export interface IDataCard {
  id: number;
  name: string;
  imgSrc: string;
  price: number;
  quantity: number | any
}

class Store {
  _dataCards: Array<IDataCard> = [];

  constructor() {
    makeAutoObservable(this, {
      dataCards: computed,
      getTotalSum: computed,
      incrmentQuantity: action,
      decrementQuantity: action,
      deleteCard: action,
      _dataCards: observable,
      setGoods: action
    });
  }

  get getTotalSum() {
    return this.dataCards.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.quantity,
      0
    );
  }

  incrmentQuantity = (index: number) => {
    this._dataCards[index].quantity++;
  };

  decrementQuantity = (index: number) => {
    if (this.dataCards[index].quantity > 1) {
      this.dataCards[index].quantity--;
    }
  };

  deleteCard = (id: number) => {
    this._dataCards = this.dataCards.filter((item) => item.id !== id);
  };

  get dataCards() {
    return this._dataCards;
  }

  setGoods = (data: Array<IDataCard>) => {
    this._dataCards = data;

  }
   
  setCurrentValue = (index: number, value: any) => {
    this._dataCards[index].quantity = value;
  }
   
  clearInput = (index: number) => {
    this._dataCards[index].quantity = '';
  }

  defaultQuantity = (index: number) => {
    this._dataCards[index].quantity = 1;
  }
}

export default new Store();
