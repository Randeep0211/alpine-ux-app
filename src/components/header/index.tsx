import React from 'react';
import styles from './header.module.css';
import { MdMenu, MdArrowLeft, MdArrowDropDown } from 'react-icons/md';

interface HeaderProps {
  back: string;
  cart: string;
  en: string;
  title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.menu}>
        <div>
          <MdMenu />
        </div>

        <div className={styles.back}>
          <MdArrowLeft />
          <span>{props.back}</span>
        </div>
      </div>
      <div className={styles.title}>
        <span>{props.title}</span>
      </div>
      <div className={styles.cartContainer}>
        <div className={styles.cart}>
          <span>{props.cart}</span>
        </div>
        <div className={styles.En}>
          <span>{props.en}</span>
          <MdArrowDropDown />
        </div>
      </div>
    </div>
  );
};

export default Header;
