import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getSuppliers } from '../../redux/suppliers/operations.js';
import { selectSuppliersTotalPages } from '../../redux/suppliers/selectors.js';
import Container from '../../components/shared/Container/Container.jsx';
import AllSuppliers from '../../components/AllSuppliers/AllSuppliers.jsx';
import NameFilter from '../../components/NameFilter/NameFilter.jsx';
import Pagination from '../../components/shared/Pagination/Pagination.jsx';
import s from './AllSuppliersPage.module.scss';

const AllSuppliersPage = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectSuppliersTotalPages);
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
    dispatch(getSuppliers({ page: currentPage, perPage: 5, name: filterName }));
  }, [dispatch, currentPage, filterName]);

  return (
    <main>
      <Container className={s.container}>
        <NameFilter onFilterChange={handleFilterChange} placeholder="User Name" />
        <AllSuppliers />
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </Container>
    </main>
  );
};

export default AllSuppliersPage;
