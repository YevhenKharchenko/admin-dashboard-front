import { useCallback } from 'react';
import { useModal } from '../../hooks/index.js';
import AddNewSupplier from '../AddNewSupplier/AddNewSupplier.jsx';
import s from './AddSupplierBtn.module.scss';

const AddSupplierBtn = ({ currentPage }) => {
  const setModal = useModal();

  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);

  const handleBtnClick = useCallback(() => {
    setModal(<AddNewSupplier closeModal={closeModal} currentPage={currentPage} />);
  }, [setModal, closeModal, currentPage]);

  return (
    <button type="button" className={s.btn} onClick={handleBtnClick}>
      Add a new suppliers
    </button>
  );
};

export default AddSupplierBtn;
