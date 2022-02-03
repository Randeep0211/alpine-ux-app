import React from 'react';
import styles from './detail.module.css';
import { MdArrowDropDown } from 'react-icons/md';

interface ProductDetailprops {
  title: string;
}

const ProductDetails: React.FC<ProductDetailprops> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {props.title} <MdArrowDropDown />
      </div>
      <div className={styles.number}>
        <h3>01</h3>
        <hr className={styles.hr}></hr>
        <h3>04</h3>
      </div>
    </div>
  );
};

export default ProductDetails;
