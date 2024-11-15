import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getDashboard } from '../../redux/dashboard/operations.js';
import Container from '../../components/shared/Container/Container.jsx';
import Statistics from '../../components/Statistics/Statistics.jsx';
import RecentCustomers from '../../components/RecentCustomers/RecentCustomers.jsx';
import IncomeExpenses from '../../components/IncomeExpenses/IncomeExpenses.jsx';
import s from './DashboardPage.module.scss';

const DashboardPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashboard());
  }, [dispatch]);

  return (
    <main className={s.main}>
      <Container className={s.container}>
        <Statistics />
        <div className={s.dashboardWrapper}>
          <RecentCustomers />
          <IncomeExpenses />
        </div>
      </Container>
    </main>
  );
};

export default DashboardPage;
