import React from 'react';
import styles from './header.module.css';
import { MdMenu, MdArrowLeft, MdArrowDropDown } from 'react-icons/md';

interface HeaderProps {
  Back: string;
  Cart: string;
  En: string;
  title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.menu}>
        <div>
          <MdMenu />
        </div>

        <div>
          <MdArrowLeft />
          {props.Back}
        </div>
      </div>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.cartContainer}>
        <div className={styles.cart}>{props.Cart}</div>
        <div className={styles.En}>
          {props.En}
          <MdArrowDropDown />
        </div>
      </div>
    </div>
  );
};

export default Header;
