import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectTransactions } from '../../redux/dashboard/selectors.js';
import s from './IncomeExpenses.module.scss';

const IncomeExpenses = () => {
  const transactions = useSelector(selectTransactions);

  const buildLinkClass = type => {
    return clsx(
      s.type,
      type === 'Income' && s.income,
      type === 'Expense' && s.expense,
      type === 'Error' && s.error
    );
  };

  return (
    <section>
      <table className={s.table}>
        <caption className={s.title}>Income/Expenses</caption>
        <thead className={s.thead}>
          <tr>
            <th className={clsx(s.td, s.columnTitle)}>Today</th>
            <th className={clsx(s.td, s.columnTitle)}></th>
            <th className={clsx(s.td, s.columnTitle)}></th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 &&
            transactions.map((el, idx) => {
              return (
                <tr
                  key={el._id}
                  className={clsx(s.tableRow, s.td, idx === transactions.length - 1 && s.lastRow)}
                >
                  <th className={clsx(s.typeColumn, s.td)}>
                    <p className={buildLinkClass(el.type)}>{el.type}</p>
                  </th>
                  <th className={clsx(s.td, s.nameColumn)}>{el.name}</th>
                  <th
                    className={clsx(s.td, s.amountColumn, {
                      [s.incomeText]: el.type === 'Income',
                      [s.expenseText]: el.type === 'Expense',
                      [s.errorText]: el.type === 'Error',
                    })}
                  >
                    {el.amount}
                  </th>
                </tr>
              );
            })}
        </tbody>
      </table>
    </section>
  );
};

export default IncomeExpenses;
