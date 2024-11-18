import { ToastContainer } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import { logo } from '../../assets/images/index.js';
import Container from '../../components/shared/Container/Container.jsx';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';
import DocumentTitle from '../../components/DocumentTitle.jsx';
import s from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <main className={s.main}>
      <DocumentTitle>Login</DocumentTitle>
      <ToastContainer />
      <div className={s.backgroundWrapper}>
        <Container className={s.container}>
          <NavLink to="/login" className={s.logoWrapper} aria-label="Go to the Home page">
            <img src={logo} alt="Logo" />
            <span className={s.title}>E-Pharmacy</span>
          </NavLink>
          <div className={s.heroWrapper}>
            <section className={s.hero}>
              <p className={s.heroText}>
                Your medication, delivered Say goodbye to all{' '}
                <span className={s.heroSpan}>your healthcare</span> worries with us
              </p>
            </section>
            <LoginForm />
          </div>
        </Container>
      </div>
    </main>
  );
};

export default LoginPage;
