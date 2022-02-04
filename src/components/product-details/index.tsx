import React from 'react';
import styles from './detail.module.css';
import { MdArrowDropDown, MdArrowRight, MdArrowForward } from 'react-icons/md';

interface ProductDetailprops {
  title: string;
}

const ProductDetails: React.FC<ProductDetailprops> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>{props.title}</span> <MdArrowDropDown />
      </div>
      <div className={styles.number}>
        <span>01</span>
        <hr />
        <span>02</span>
        <div className={styles.arrowIcon}>
          <MdArrowForward />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
