import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/auth/operations.js';
import { sprite } from '../../assets/icons/index.js';
import s from './LogoutBtn.module.scss';

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const handleLogoutBtnClick = () => {
    dispatch(logoutUser());
  };

  return (
    <button type="button" className={s.btn} onClick={handleLogoutBtnClick}>
      <svg className={s.icon} width="14" height="14">
        <use xlinkHref={`${sprite}#icon-logout`}></use>
      </svg>
    </button>
  );
};

export default LogoutBtn;
