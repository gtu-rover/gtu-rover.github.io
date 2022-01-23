import React from 'react';
import ReactDOM from 'react-dom';
import { ModalContext } from './modalContext';
import './modal.css';
import classNames from 'classnames';

const Modal = () => {
  let { modalContent, handleModal, modal } = React.useContext(ModalContext);
  if (modal) {
    return ReactDOM.createPortal(
      <div className={classNames('modal', { open: true })}>
        <div class="modal-content">
          <div class="modal-header">
            <span class="close" onClick={() => handleModal()}>
              &times;
            </span>
          </div>
          <div class="modal-body">
            <p>{modalContent}</p>
          </div>
        </div>
      </div>,
      document.querySelector('#modal-root')
    );
  } else return null;
};

export default Modal;
