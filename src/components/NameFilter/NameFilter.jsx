import { sprite } from '../../assets/icons/index.js';
import Button from '../shared/Button/Button.jsx';
import Input from '../shared/Input/Input.jsx';
import s from './NameFilter.module.scss';

const NameFilter = ({ handleFilterChange, placeholder }) => {
  return (
    <form className={s.form} onSubmit={handleFilterChange}>
      <label>
        <Input className={s.input} name="name" placeholder={placeholder} />
      </label>
      <Button type="submit" className={s.btn}>
        <svg className={s.icon} width="14" height="14">
          <use xlinkHref={`${sprite}#icon-filter`}></use>
        </svg>
        <span>Filter</span>
      </Button>
    </form>
  );
};

export default NameFilter;
