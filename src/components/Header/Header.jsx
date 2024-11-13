import { useCallback, useEffect } from 'react';
import { useIsDesktop, useModal } from '../../hooks/index.js';
import { sprite } from '../../assets/icons/index.js';
import Logo from '../Logo/Logo.jsx';
import Container from '../shared/Container/Container.jsx';
import SubTitle from '../SubTitle/SubTitle.jsx';
import Title from '../Title/Title.jsx';
import BurgerMenu from '../BurgerMenu/BurgerMenu.jsx';
import s from './Header.module.scss';

const Header = () => {
  const isDesktop = useIsDesktop();
  const setModal = useModal();

  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);

  const handleMenuBtnClick = useCallback(() => {
    setModal(<BurgerMenu closeModal={closeModal} />);
  }, [setModal, closeModal]);

  useEffect(() => {
    if (isDesktop) {
      closeModal();
    }
  }, [isDesktop, closeModal]);

  return (
    <header className={s.header}>
      <Container className={s.container}>
        <button
          type="button"
          className={s.menuBtn}
          onClick={handleMenuBtnClick}
          aria-label="Open menu"
        >
          <svg className={s.menuIcon} width="32" height="32">
            <use xlinkHref={`${sprite}#icon-menu-burger`}></use>
          </svg>
        </button>
        <Logo />
        <div className={s.titleWrapper}>
          <Title />
          <SubTitle />
        </div>
      </Container>
    </header>
  );
};

export default Header;
