import clsx from 'clsx';
import s from './Pagination.module.scss';

const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
  return (
    totalPages > 1 && (
      <div className={clsx(s.wrapper, totalPages > 15 && s.minGap)}>
        {Array.from({ length: totalPages }, (_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              className={clsx(s.btn, page === currentPage && s.active)}
              onClick={() => handlePageChange(page)}
            ></button>
          );
        })}
      </div>
    )
  );
};

export default Pagination;
