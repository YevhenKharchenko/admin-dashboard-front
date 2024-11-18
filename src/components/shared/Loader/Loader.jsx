import clsx from 'clsx';
import { Oval } from 'react-loader-spinner';
import s from './Loader.module.scss';

const Loader = ({ className, ...rest }) => {
  return (
    <div className={clsx(s.loader, className && className)}>
      <Oval
        visible={true}
        height="44"
        width="44"
        color="#4fa94d"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
        {...rest}
      />
    </div>
  );
};

export default Loader;
