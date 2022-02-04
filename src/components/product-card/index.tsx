import React from 'react';
import styles from './product.module.css';

interface ProductListProps {
  image?: string;
  name: string;
  price: string;
  category: string;
}

const ProductCard: React.FC<ProductListProps> = (props) => {
  return (
    <div>
      <div className={styles.cardContainer}>
        <img className={styles.image} src={props.image} alt="image" />
        <div className={styles.detail}>
          {props.name}
          <div>{props.price}</div>
        </div>
        <div className={styles.category}>{props.category}</div>
      </div>
    </div>
  );
};

export default ProductCard;
