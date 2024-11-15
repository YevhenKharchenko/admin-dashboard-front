import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { sprite } from '../../assets/icons/index.js';
import CloseBtn from '../shared/CloseBtn/CloseBtn.jsx';
import LogoutBtn from '../LogoutBtn/LogoutBtn.jsx';
import s from './BurgerMenu.module.scss';

const BurgerMenu = ({ closeModal }) => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <div className={s.container}>
      <CloseBtn handleClick={closeModal} />
      <nav className={s.nav}>
        <NavLink to="dashboard" className={buildLinkClass}>
          <svg className={s.navIcon} width="14" height="14">
            <use xlinkHref={`${sprite}#icon-dashboard`}></use>
          </svg>
        </NavLink>
        <NavLink to="orders" className={buildLinkClass}>
          <svg className={s.navIcon} width="14" height="14">
            <use xlinkHref={`${sprite}#icon-shopping-cart`}></use>
          </svg>
        </NavLink>
        <NavLink to="products" className={buildLinkClass}>
          <svg className={s.navIcon} width="14" height="14">
            <use xlinkHref={`${sprite}#icon-flask-fill`}></use>
          </svg>
        </NavLink>
        <NavLink to="suppliers" className={buildLinkClass}>
          <svg className={s.navIcon} width="14" height="14">
            <use xlinkHref={`${sprite}#icon-pharmacy`}></use>
          </svg>
        </NavLink>
        <NavLink to="customers" className={buildLinkClass}>
          <svg className={s.navIcon} width="14" height="14">
            <use xlinkHref={`${sprite}#icon-mdi_users`}></use>
          </svg>
        </NavLink>
      </nav>
      <LogoutBtn />
    </div>
  );
};

export default BurgerMenu;
