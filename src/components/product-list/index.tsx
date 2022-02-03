import React from 'react';
import styles from './product.module.css';
import watch from '../components/images/watch.png';

interface ProductListProps {
  image?: string;
  name: string;
  price: string;
  category: string;
}

const ProductList: React.FC<ProductListProps> = (props) => {
  return (
    <div>
      <div className={styles.cardContainer}>
        <img className={styles.image} src={props.image} alt="image" />
        <div className={styles.detail}>
          <h3>{props.name}</h3>
          <h3>{props.price}</h3>
        </div>
        <p>{props.category}</p>
      </div>
    </div>
  );
};

export default ProductList;
