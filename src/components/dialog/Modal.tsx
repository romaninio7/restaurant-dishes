import React from 'react';
import ReactDOM from 'react-dom';
import { ModalProps } from 'interfaces';
import * as consts from 'consts';
import ModalContent from 'components/dialog/ModalContent';

const Modal: React.FunctionComponent<ModalProps> = ({
  onDismiss,
  openModal,
  onFormSubmit,
}): React.ReactPortal | JSX.Element | null => {
  if (!consts.modalNode || !openModal) return null;
  return ReactDOM.createPortal(
    <ModalContent onDismiss={onDismiss} onFormSubmit={onFormSubmit} />,
    consts.modalNode
  );
};

export default Modal;
