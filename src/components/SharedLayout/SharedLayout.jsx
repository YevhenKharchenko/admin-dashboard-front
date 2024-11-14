import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useIsDesktop } from '../../hooks/index.js';
import Header from '../Header/Header.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';

const SharedLayout = () => {
  const isDesktop = useIsDesktop();

  return (
    <>
      <Suspense fallback={null}>
        <ToastContainer />
        <Header />
        {isDesktop && <Sidebar />}
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
