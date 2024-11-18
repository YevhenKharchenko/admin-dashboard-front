import { useCallback } from 'react';
import { useModal } from '../../hooks/index.js';
import { sprite } from '../../assets/icons/index.js';
import EditSupplierData from '../EditSupplierData/EditSupplierData.jsx';
import s from './EditSupplierBtn.module.scss';

const EditSupplierBtn = ({ item, currentPage }) => {
  const setModal = useModal();

  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);

  const handleEditBtnClick = useCallback(() => {
    setModal(<EditSupplierData closeModal={closeModal} item={item} currentPage={currentPage} />);
  }, [setModal, closeModal, item, currentPage]);

  return (
    <button className={s.editBtn} onClick={handleEditBtnClick}>
      <svg className={s.icon} width="14" height="14">
        <use xlinkHref={`${sprite}#icon-edit`}></use>
      </svg>
      <span>Edit</span>
    </button>
  );
};

export default EditSupplierBtn;
