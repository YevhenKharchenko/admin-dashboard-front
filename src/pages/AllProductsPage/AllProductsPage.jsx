import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getProducts } from '../../redux/products/operations.js';
import { selectProductsTotalPages } from '../../redux/products/selectors.js';
import Container from '../../components/shared/Container/Container.jsx';
import AllProducts from '../../components/AllProducts/AllProducts.jsx';
import NameFilter from '../../components/NameFilter/NameFilter.jsx';
import Pagination from '../../components/shared/Pagination/Pagination.jsx';
import AddProductBtn from '../../components/AddProductBtn/AddProductBtn.jsx';
import DocumentTitle from '../../components/DocumentTitle.jsx';
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
      <DocumentTitle>All Products</DocumentTitle>
      <Container className={s.container}>
        <div className={s.filterWrapper}>
          <NameFilter onFilterChange={handleFilterChange} placeholder="Product  Name" />
          <AddProductBtn currentPage={currentPage} />
        </div>
        <AllProducts currentPage={currentPage} />
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
