import { Link } from 'react-router-dom';
import { logo } from '../../assets/images/index.js';
import s from './Logo.module.scss';

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="Logo" />
    </Link>
  );
};

export default Logo;
