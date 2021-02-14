import React from 'react';
import binImg from '..//../assets/img/bin.svg';
import ModalStore from '../../store/modal';
import { useCallback } from 'react';

const  scss = require ('./button-trash.module.scss');


const ButtonTrash = (props: { id: number}) => {

const toggleModal =  useCallback(() => {

 ModalStore.toggleModal(props.id);
}, [props.id])

return (
  <button className = {scss.buttonTrash} onClick = {toggleModal}>
    <img className = {scss.btnTrashImg} src = {binImg} alt = 'trash'></img>
  </button> 
)
}

export default ButtonTrash;