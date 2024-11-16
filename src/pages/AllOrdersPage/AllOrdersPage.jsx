import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getOrders } from '../../redux/orders/operations.js';
import { selectOrdersTotalPages } from '../../redux/orders/selectors.js';
import AllOrders from '../../components/AllOrders/AllOrders.jsx';
import Container from '../../components/shared/Container/Container.jsx';
import NameFilter from '../../components/NameFilter/NameFilter.jsx';
import Pagination from '../../components/shared/Pagination/Pagination.jsx';
import s from './AllOrdersPage.module.scss';

const AllOrdersPage = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectOrdersTotalPages);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterName, setFilterName] = useState('');

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const handleFilterChange = value => {
    setFilterName(value);
    setCurrentPage(1);
  };

  useEffect(() => {
    dispatch(getOrders({ page: currentPage, perPage: 5, name: filterName }));
  }, [dispatch, currentPage, filterName]);

  return (
    <main>
      <Container className={s.container}>
        <NameFilter onFilterChange={handleFilterChange} placeholder="User Name" />
        <AllOrders />
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </Container>
    </main>
  );
};

export default AllOrdersPage;
