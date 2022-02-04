import React from 'react';
import styles from './index.module.css';
import ProductCard from '../product-card';
import { productData } from '../../data';

interface ProductListProps {
  productData: {
    image: string;
    name: string;
    price: string;
    category: string;
  }[];
}

const ProductList: React.FC<ProductListProps> = (props) => {
  return (
    <div className={styles.productContainer}>
      {productData.map((el, index) => {
        return (
          <ProductCard
            key={index}
            image={el.image}
            name={el.name}
            price={el.price}
            category={el.category}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
