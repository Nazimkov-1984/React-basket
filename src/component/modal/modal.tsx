import React, { useCallback } from "react";
import ModalStore from "../../store/modal";
import Store from "../../store";
import { observer } from "mobx-react-lite";

const scss = require("./modal.module.scss");

const Modal = observer(() => {
  const deleteCard = useCallback(() => {
    Store.deleteCard(ModalStore.idCard!);
    ModalStore.toggleModal();
  }, []);

  const onOutsideClick = useCallback((e) => {
    const modal = document.querySelector(scss.modal);
    if (e.target === modal) {
      ModalStore.toggleModal();
    }
  }, []);

  const closeModal = useCallback(() => {
    ModalStore.toggleModal();
  }, []);

  if (ModalStore.isOpenModal) {
    return (
      <div className={scss.modal} onClick={onOutsideClick}>
        <div className={scss.modalBody}>
          <span className={scss.modalTitle}>
            Вы действительно хотите удалить товар из корзины?
          </span>
          <div className={scss.buttonWrapper}>
            <button className={scss.buttonDelete} onClick={deleteCard}>
              Удалить
            </button>
            <button className={scss.buttonCancel} onClick={closeModal}>
              Отмена
            </button>
          </div>
        </div>
      </div>
    );
  } else return null;
});
export default Modal;
