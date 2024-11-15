import clsx from 'clsx';
import EllipsisText from 'react-ellipsis-text';
import { useSelector } from 'react-redux';
import { selectCustomers } from '../../redux/dashboard/selectors.js';
import s from './RecentCustomers.module.scss';

const RecentCustomers = () => {
  const customers = useSelector(selectCustomers);

  return (
    <section>
      <table className={s.table} aria-label="Recent Customers">
        <caption className={s.title}>Recent Customers</caption>
        <thead className={s.thead}>
          <tr>
            <th className={clsx(s.columnTitle, s.td)}>Name</th>
            <th className={clsx(s.columnTitle, s.td)}>Email</th>
            <th className={clsx(s.columnTitle, s.td)}>Spent</th>
          </tr>
        </thead>
        <tbody>
          {customers.length > 0 &&
            customers.map((el, idx) => {
              return (
                <tr
                  key={el._id}
                  className={clsx(s.tableRow, s.td, idx === customers.length - 1 && s.lastRow)}
                >
                  <td className={clsx(s.nameWrapper, s.td)}>
                    <img
                      src={el.photo || el.image}
                      alt={`Photo of ${el.name}`}
                      width="24"
                      height="24"
                    />
                    <EllipsisText text={el.name} length={14} />
                  </td>
                  <td className={clsx(s.emailWrapper, s.td)}>
                    {<EllipsisText text={el.email} length={20} />}
                  </td>
                  <td className={clsx(s.spentWrapper, s.td)}>{el.spent}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </section>
  );
};

export default RecentCustomers;
