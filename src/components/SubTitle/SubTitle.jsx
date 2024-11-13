import { useLocation } from 'react-router-dom';
import s from './SubTitle.module.scss';
import { getLocationTitle } from '../../utils/getLocationTitle.js';
import { useSelector } from 'react-redux';
import { selectEmail } from '../../redux/auth/selectors.js';

const SubTitle = () => {
  const location = useLocation();
  const email = useSelector(selectEmail);

  return (
    <p className={s.text}>
      {getLocationTitle(location.pathname)} | {email}
    </p>
  );
};

export default SubTitle;
