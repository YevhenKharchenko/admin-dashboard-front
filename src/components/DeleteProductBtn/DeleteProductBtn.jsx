import { useDispatch } from 'react-redux';
import { deleteProduct, getProducts } from '../../redux/products/operations.js';
import { sprite } from '../../assets/icons/index.js';
import s from './DeleteProductBtn.module.scss';

const DeleteProductBtn = ({ item, currentPage }) => {
  const dispatch = useDispatch();

  const handleDeleteBtnClick = async () => {
    await dispatch(deleteProduct(item._id));
    await dispatch(getProducts({ page: currentPage, perPage: 5, name: '' }));
  };

  return (
    <button type="button" className={s.deleteBtn} onClick={handleDeleteBtnClick}>
      <svg className={s.icon} width="16" height="16">
        <use xlinkHref={`${sprite}#icon-trash`}></use>
      </svg>
    </button>
  );
};

export default DeleteProductBtn;
