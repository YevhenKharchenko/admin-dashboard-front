import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { RestrictedRoute } from './components/RestrictedRoute.jsx';
import { PrivateRoute } from './components/PrivateRoute.jsx';

import SharedLayout from './components/SharedLayout/SharedLayout.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import DashboardPage from './pages/DashboardPage/DashboardPage.jsx';
import AllOrdersPage from './pages/AllOrdersPage/AllOrdersPage.jsx';
import AllProductsPage from './pages/AllProductsPage/AllProductsPage.jsx';
import AllSuppliersPage from './pages/AllSuppliersPage/AllSuppliersPage.jsx';
import CustomersDataPage from './pages/CustomersDataPage/CustomersDataPage.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from './redux/auth/selectors.js';
import { getCurrentUser } from './redux/auth/operations.js';

// const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage.jsx'));

function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, isLoggedIn]);

  return (
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
  );
}

export default App;
