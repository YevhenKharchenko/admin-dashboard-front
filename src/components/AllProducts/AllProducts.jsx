import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../redux/products/selectors.js';
import s from './AllProducts.module.scss';

const AllProducts = () => {
  const products = useSelector(selectProducts);
  console.log(products);

  return (
    <section className={s.section}>
      <table className={s.table}>
        <caption className={s.title}>All products</caption>
        <thead className={s.thead}>
          <tr>
            <th className={clsx(s.columnTitle, s.td)}>Product Info</th>
            <th className={clsx(s.columnTitle, s.td)}>Category</th>
            <th className={clsx(s.columnTitle, s.td)}>Stock</th>
            <th className={clsx(s.columnTitle, s.td)}>Suppliers</th>
            <th className={clsx(s.columnTitle, s.td)}>Price</th>
            <th className={clsx(s.columnTitle, s.td)}>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 &&
            products.map((el, idx) => {
              return (
                <tr
                  key={el._id}
                  className={clsx(s.tableRow, s.td, idx === products.length - 1 && s.lastRow)}
                >
                  <td className={clsx(s.cellWrapper, s.td)}>{el.name}</td>
                  <td className={clsx(s.cellWrapper, s.td)}>{el.category}</td>
                  <td className={clsx(s.cellWrapper, s.td)}>{el.stock}</td>
                  <td className={clsx(s.cellWrapper, s.td)}>{el.suppliers}</td>
                  <td className={clsx(s.cellWrapper, s.td)}>{el.price}</td>
                  <td className={clsx(s.cellWrapper, s.td)}>{el.price}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </section>
  );
};

export default AllProducts;
