import { useCallback } from 'react';
import { useModal } from '../../hooks/index.js';
import { sprite } from '../../assets/icons/index.js';
import EditProductData from '../EditProductData/EditProductData.jsx';
import s from './EditProductBtn.module.scss';

const EditProductBtn = ({ item, currentPage }) => {
  const setModal = useModal();

  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);

  const handleEditBtnClick = useCallback(() => {
    setModal(<EditProductData closeModal={closeModal} item={item} currentPage={currentPage} />);
  }, [setModal, closeModal, item, currentPage]);

  return (
    <button type="button" className={s.editBtn} onClick={handleEditBtnClick}>
      <svg className={s.icon} width="16" height="16">
        <use xlinkHref={`${sprite}#icon-edit`}></use>
      </svg>
    </button>
  );
};

export default EditProductBtn;
