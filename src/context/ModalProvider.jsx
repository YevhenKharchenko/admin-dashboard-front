import { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalContext } from './index.js';
import ModalBackdrop from '../components/shared/ModalBackdrop/ModalBackdrop.jsx';

const modalRoot = document.querySelector('#modal-root');

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(null);
  const handleSetModal = useCallback(modal => {
    setModal(modal);
  }, []);

  return (
    <ModalContext.Provider value={handleSetModal}>
      {children}
      {modal &&
        createPortal(<ModalBackdrop onClose={handleSetModal}>{modal}</ModalBackdrop>, modalRoot)}
    </ModalContext.Provider>
  );
};
