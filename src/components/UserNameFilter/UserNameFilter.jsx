import { sprite } from '../../assets/icons/index.js';
import Button from '../shared/Button/Button.jsx';
import Input from '../shared/Input/Input.jsx';
import s from './UserNameFilter.module.scss';

const UserNameFilter = () => {
  return (
    <form className={s.form}>
      <label>
        <Input className={s.input} placeholder="User Name" />
      </label>
      <Button className={s.btn}>
        <svg className={s.icon} width="14" height="14">
          <use xlinkHref={`${sprite}#icon-filter`}></use>
        </svg>
        <span>Filter</span>
      </Button>
    </form>
  );
};

export default UserNameFilter;
