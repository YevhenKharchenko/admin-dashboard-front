import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getProducts } from '../../redux/products/operations.js';
import { selectProductsTotalPages } from '../../redux/products/selectors.js';
import Container from '../../components/shared/Container/Container.jsx';
import AllProducts from '../../components/AllProducts/AllProducts.jsx';
import NameFilter from '../../components/NameFilter/NameFilter.jsx';
import Pagination from '../../components/shared/Pagination/Pagination.jsx';
import s from './AllProductsPage.module.scss';

const AllProductsPage = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectProductsTotalPages);
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
    dispatch(getProducts({ page: currentPage, perPage: 5, name: filterName }));
  }, [dispatch, currentPage, filterName]);

  return (
    <main>
      <Container className={s.container}>
        <NameFilter onFilterChange={handleFilterChange} placeholder="Product  Name" />
        <AllProducts />
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </Container>
    </main>
  );
};

export default AllProductsPage;
