import { useSelector } from 'react-redux';
import { selectOrders } from '../../redux/orders/selectors.js';
import s from './AllOrders.module.scss';

const AllOrders = () => {
  const orders = useSelector(selectOrders);
  console.log(orders);

  return (
    <section className={s.section}>
      <table className={s.table}>
        <caption>All orders</caption>
        <thead>
          <tr>
            <th>User Info</th>
            <th>Address</th>
            <th>Products</th>
            <th>Order date</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
      </table>
    </section>
  );
};

export default AllOrders;
