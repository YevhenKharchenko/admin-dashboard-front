import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { sprite } from '../../assets/icons/index.js';
import s from './Sidebar.module.scss';

const Sidebar = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <aside className={s.container}>
      <nav className={s.nav}>
        <NavLink to="dashboard" className={buildLinkClass}>
          <svg className={s.navIcon} width="16" height="16">
            <use xlinkHref={`${sprite}#icon-dashboard`}></use>
          </svg>
        </NavLink>
        <NavLink to="orders" className={buildLinkClass}>
          <svg className={s.navIcon} width="16" height="16">
            <use xlinkHref={`${sprite}#icon-shopping-cart`}></use>
          </svg>
        </NavLink>
        <NavLink to="products" className={buildLinkClass}>
          <svg className={s.navIcon} width="16" height="16">
            <use xlinkHref={`${sprite}#icon-flask-fill`}></use>
          </svg>
        </NavLink>
        <NavLink to="suppliers" className={buildLinkClass}>
          <svg className={s.navIcon} width="16" height="16">
            <use xlinkHref={`${sprite}#icon-pharmacy`}></use>
          </svg>
        </NavLink>
        <NavLink to="customers" className={buildLinkClass}>
          <svg className={s.navIcon} width="16" height="16">
            <use xlinkHref={`${sprite}#icon-mdi_users`}></use>
          </svg>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
