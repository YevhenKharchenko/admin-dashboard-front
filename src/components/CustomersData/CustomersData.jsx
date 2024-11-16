import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectCustomers } from '../../redux/customers/selectors.js';
import s from './CustomersData.module.scss';

const CustomersData = () => {
  const customers = useSelector(selectCustomers);

  return (
    <section className={s.section}>
      <table className={s.table}>
        <caption className={s.title}>Customers Data</caption>
        <thead className={s.thead}>
          <tr>
            <th className={clsx(s.columnTitle, s.td)}>User Info</th>
            <th className={clsx(s.columnTitle, s.td)}>Email</th>
            <th className={clsx(s.columnTitle, s.td)}>Address</th>
            <th className={clsx(s.columnTitle, s.td)}>Phone</th>
            <th className={clsx(s.columnTitle, s.td)}>Register date</th>
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
                      className={s.img}
                      src={el.image}
                      alt={`Photo of ${el.name}`}
                      width="24"
                      height="24"
                    />
                    <p>{el.name}</p>
                  </td>
                  <td className={clsx(s.cellWrapper, s.td)}>{el.email}</td>
                  <td className={clsx(s.cellWrapper, s.td)}>{el.address}</td>
                  <td className={clsx(s.cellWrapper, s.td)}>{el.phone}</td>
                  <td className={clsx(s.cellWrapper, s.td)}>{el.register_date}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </section>
  );
};

export default CustomersData;
