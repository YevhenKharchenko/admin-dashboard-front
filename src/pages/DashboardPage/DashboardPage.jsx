import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getDashboard } from '../../redux/dashboard/operations.js';
import Container from '../../components/shared/Container/Container.jsx';
import Statistics from '../../components/Statistics/Statistics.jsx';
import s from './DashboardPage.module.scss';
import RecentCustomers from '../../components/RecentCustomers/RecentCustomers.jsx';

const DashboardPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashboard());
  });

  return (
    <main className={s.main}>
      <Container className={s.container}>
        <Statistics />
        <RecentCustomers />
      </Container>
    </main>
  );
};

export default DashboardPage;
