import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { RestrictedRoute } from './components/RestrictedRoute.jsx';
import { PrivateRoute } from './components/PrivateRoute.jsx';

import SharedLayout from './components/SharedLayout/SharedLayout.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from './redux/auth/selectors.js';
import { getCurrentUser } from './redux/auth/operations.js';
import { ToastContainer } from 'react-toastify';

const DashboardPage = lazy(() => import('./pages/DashboardPage/DashboardPage.jsx'));
const AllOrdersPage = lazy(() => import('./pages/AllOrdersPage/AllOrdersPage.jsx'));
const AllProductsPage = lazy(() => import('./pages/AllProductsPage/AllProductsPage.jsx'));
const AllSuppliersPage = lazy(() => import('./pages/AllSuppliersPage/AllSuppliersPage.jsx'));
const CustomersDataPage = lazy(() => import('./pages/CustomersDataPage/CustomersDataPage.jsx'));

function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/dashboard" component={<LoginPage />} />}
        />
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Navigate to="/dashboard" />} />
          <Route
            path="dashboard"
            element={<PrivateRoute redirectTo="/login" component={<DashboardPage />} />}
          />
          <Route
            path="orders"
            element={<PrivateRoute redirectTo="/login" component={<AllOrdersPage />} />}
          />
          <Route
            path="products"
            element={<PrivateRoute redirectTo="/login" component={<AllProductsPage />} />}
          />
          <Route
            path="suppliers"
            element={<PrivateRoute redirectTo="/login" component={<AllSuppliersPage />} />}
          />
          <Route
            path="customers"
            element={<PrivateRoute redirectTo="/login" component={<CustomersDataPage />} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
