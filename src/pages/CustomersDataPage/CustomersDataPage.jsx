import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCustomers } from '../../redux/customers/operations.js';
import { selectCustomersTotalPages } from '../../redux/customers/selectors.js';
import Container from '../../components/shared/Container/Container.jsx';
import CustomersData from '../../components/CustomersData/CustomersData.jsx';
import NameFilter from '../../components/NameFilter/NameFilter.jsx';
import Pagination from '../../components/shared/Pagination/Pagination.jsx';
import DocumentTitle from '../../components/DocumentTitle.jsx';
import s from './CustomersDataPage.module.scss';

const CustomersDataPage = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectCustomersTotalPages);
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
    dispatch(getCustomers({ page: currentPage, perPage: 5, name: filterName }));
  }, [dispatch, currentPage, filterName]);

  return (
    <main>
      <DocumentTitle>Customers Data</DocumentTitle>
      <Container className={s.container}>
        <NameFilter onFilterChange={handleFilterChange} placeholder="User Name" />
        <CustomersData />
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </Container>
    </main>
  );
};

export default CustomersDataPage;
