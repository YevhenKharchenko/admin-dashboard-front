import { useCallback } from 'react';
import { useModal } from '../../hooks/index.js';
import { sprite } from '../../assets/icons/index.js';
import AddNewProduct from '../AddNewProduct/AddNewProduct.jsx';
import s from './AddProductBtn.module.scss';

const AddProductBtn = () => {
  const setModal = useModal();

  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);

  const handleBtnClick = useCallback(() => {
    setModal(<AddNewProduct closeModal={closeModal} />);
  }, [setModal, closeModal]);

  return (
    <button className={s.btn} onClick={handleBtnClick}>
      <span className={s.iconWrapper}>
        <svg className={s.icon} width="16" height="16">
          <use xlinkHref={`${sprite}#icon-add-outline`}></use>
        </svg>
      </span>
      <span className={s.span}>Add a new product</span>
    </button>
  );
};

export default AddProductBtn;
