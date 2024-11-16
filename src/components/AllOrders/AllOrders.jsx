import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectOrders } from '../../redux/orders/selectors.js';
import { formatAddress } from '../../utils/index.js';
import s from './AllOrders.module.scss';

const AllOrders = () => {
  const orders = useSelector(selectOrders);

  return (
    <section className={s.section}>
      <table className={s.table}>
        <caption className={s.title}>All orders</caption>
        <thead className={s.thead}>
          <tr>
            <th className={clsx(s.columnTitle, s.td)}>User Info</th>
            <th className={clsx(s.columnTitle, s.td)}>Address</th>
            <th className={clsx(s.columnTitle, s.td)}>Products</th>
            <th className={clsx(s.columnTitle, s.td)}>Order date</th>
            <th className={clsx(s.columnTitle, s.td)}>Price</th>
            <th className={clsx(s.columnTitle, s.td)}>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 &&
            orders.map((el, idx) => {
              return (
                <tr
                  key={el._id}
                  className={clsx(s.tableRow, s.td, idx === orders.length - 1 && s.lastRow)}
                >
                  <td className={clsx(s.nameWrapper, s.td)}>
                    <img
                      className={s.img}
                      src={el.photo}
                      alt={`Photo of ${el.name}`}
                      width="24"
                      height="24"
                    />
                    <p>{el.name}</p>
                  </td>
                  <td className={clsx(s.cellWrapper, s.td)}>{formatAddress(el.address)}</td>
                  <td className={clsx(s.cellWrapper, s.td)}>{el.products}</td>
                  <td className={clsx(s.cellWrapper, s.td)}>{el.order_date}</td>
                  <td className={clsx(s.cellWrapper, s.td)}>{el.price}</td>
                  <td className={clsx(s.cellWrapper, s.td)}>
                    <p
                      className={clsx(s.status, {
                        [s.completed]: el.status === 'Completed',
                        [s.confirmed]: el.status === 'Confirmed',
                        [s.pending]: el.status === 'Pending',
                        [s.cancelled]: el.status === 'Cancelled',
                        [s.processing]: el.status === 'Processing',
                        [s.delivered]: el.status === 'Delivered',
                        [s.shipped]: el.status === 'Shipped',
                      })}
                    >
                      {el.status}
                    </p>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </section>
  );
};

export default AllOrders;
