import { observable, makeAutoObservable, action, computed } from "mobx";

class ModalStore {
  public _isOpenModal: boolean = false;
  public _idCard?: number;

  constructor() {
    makeAutoObservable(this, {
      _isOpenModal: observable,
      _idCard: observable,
      toggleModal: action,
     isOpenModal: computed, 
     idCard: computed
    });
  }

  get isOpenModal() {
    return this._isOpenModal;
  }

  get idCard() {
    return this._idCard;
  }

  toggleModal = (id?: number) => {
    this._isOpenModal = id !== undefined;
    this._idCard = id;
  };
}

export default new ModalStore();
