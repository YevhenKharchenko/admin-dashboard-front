import { Link } from 'react-router-dom';
import { logo } from '../../assets/images/index.js';
import s from './Logo.module.scss';

const Logo = () => {
  return (
    <Link to="/">
      <img className={s.img} src={logo} alt="Logo" width="32" height="32" />
    </Link>
  );
};

export default Logo;
