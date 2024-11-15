import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getOrders } from '../../redux/orders/operations.js';
import AllOrders from '../../components/AllOrders/AllOrders.jsx';
import Container from '../../components/shared/Container/Container.jsx';
import UserNameFilter from '../../components/UserNameFilter/UserNameFilter.jsx';
import s from './AllOrdersPage.module.scss';

const AllOrdersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders({ page: 1, perPage: 5, name: '' }));
  }, [dispatch]);

  return (
    <main>
      <Container className={s.container}>
        <UserNameFilter />
        <AllOrders />
      </Container>
    </main>
  );
};

export default AllOrdersPage;
