import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectSuppliers } from '../../redux/suppliers/selectors.js';
import { sprite } from '../../assets/icons/index.js';
import s from './AllSuppliers.module.scss';

const AllSuppliers = () => {
  const suppliers = useSelector(selectSuppliers);

  return (
    <section className={s.section}>
      <table className={s.table}>
        <caption className={s.title}>All suppliers</caption>
        <thead className={s.thead}>
          <tr>
            <th className={clsx(s.columnTitle, s.td)}>Suppliers Info</th>
            <th className={clsx(s.columnTitle, s.td)}>Address</th>
            <th className={clsx(s.columnTitle, s.td)}>Company</th>
            <th className={clsx(s.columnTitle, s.td)}>Delivery date</th>
            <th className={clsx(s.columnTitle, s.td)}>Amount</th>
            <th className={clsx(s.columnTitle, s.td)}>Status</th>
            <th className={clsx(s.columnTitle, s.td)}>Action</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.length > 0 &&
            suppliers.map((el, idx) => {
              return (
                <tr
                  key={el._id}
                  className={clsx(s.tableRow, s.td, idx === suppliers.length - 1 && s.lastRow)}
                >
                  <td className={clsx(s.cellWrapper, s.td)}>{el.name}</td>
                  <td className={clsx(s.cellWrapper, s.td)}>{el.address}</td>
                  <td className={clsx(s.cellWrapper, s.td)}>{el.suppliers}</td>
                  <td className={clsx(s.cellWrapper, s.td)}>{el.date}</td>
                  <td className={clsx(s.cellWrapper, s.td)}>{el.amount}</td>
                  <td className={clsx(s.cellWrapper, s.td)}>
                    <p
                      className={clsx(s.status, {
                        [s.active]: el.status === 'Active',
                        [s.deactive]: el.status === 'Deactive',
                      })}
                    >
                      {el.status}
                    </p>
                  </td>
                  <td className={clsx(s.cellWrapper, s.td)}>
                    <button className={s.editBtn}>
                      <svg className={s.icon} width="14" height="14">
                        <use xlinkHref={`${sprite}#icon-edit`}></use>
                      </svg>
                      <span>Edit</span>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </section>
  );
};

export default AllSuppliers;
