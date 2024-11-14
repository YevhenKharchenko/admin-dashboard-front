import { useSelector } from 'react-redux';
import { selectCustomers } from '../../redux/dashboard/selectors.js';
import EllipsisText from 'react-ellipsis-text';
import s from './RecentCustomers.module.scss';
import clsx from 'clsx';

const RecentCustomers = () => {
  const customers = useSelector(selectCustomers);
  console.log(customers);

  return (
    <section>
      <table className={s.table}>
        <caption className={s.title}>Recent Customers</caption>
        <thead>
          <tr>
            <th className={s.columnTitle}>Name</th>
            <th className={s.columnTitle}>Email</th>
            <th className={s.columnTitle}>Spent</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((el, idx) => {
            return (
              <tr key={el._id} className={clsx(s.tableRow, idx === 4 && s.lastRow)}>
                <th className={s.nameWrapper}>
                  <img src={el.photo || el.image} alt="Photo of customer" width="24" height="24" />
                  <EllipsisText text={el.name} length={14} />
                </th>
                <th className={s.emailWrapper}>{<EllipsisText text={el.email} length={20} />}</th>
                <th className={s.spentWrapper}>{el.spent}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default RecentCustomers;
