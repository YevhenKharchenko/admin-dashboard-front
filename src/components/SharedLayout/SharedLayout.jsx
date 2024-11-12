import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../Header/Header.jsx';
import { ToastContainer } from 'react-toastify';

const SharedLayout = () => {
  return (
    <>
      <Suspense fallback={null}>
        <ToastContainer />
        <Header />
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
