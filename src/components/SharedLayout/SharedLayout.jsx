import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useIsDesktop } from '../../hooks/index.js';
import Header from '../Header/Header.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import s from './SharedLayout.module.scss';

const SharedLayout = () => {
  const isDesktop = useIsDesktop();

  return (
    <>
      <Suspense fallback={null}>
        <Header />
        <div className={s.wrapper}>
          {isDesktop && <Sidebar />}
          <Outlet />
        </div>
      </Suspense>
    </>
  );
};

export default SharedLayout;
