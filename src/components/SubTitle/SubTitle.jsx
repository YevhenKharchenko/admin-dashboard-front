import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLocationTitle } from '../../utils/getLocationTitle.js';
import { selectEmail } from '../../redux/auth/selectors.js';
import s from './SubTitle.module.scss';

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
