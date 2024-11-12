import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './components/SharedLayout/SharedLayout.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';

// const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage.jsx'));

function App() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="/" component={<SharedLayout />}>
        <Route index element={<Navigate to="/login" />} />
      </Route>
    </Routes>
  );
}

export default App;
