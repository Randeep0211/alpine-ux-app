import React from 'react';
import styles from './index.module.css';
import watch from '../components/images/watch.png';
import gloves from '../components/images/gloves.png';
import bag from '../components/images/bag.png';
import sunglass from '../components/images/sunglass1.png';
import smartphone from '../components/images/smartphone.png';
import wallet from '../components/images/wallet.png';
import ProductList from '../components/product-list';

const Product = () => {
  return (
    <div className={styles.productContainer}>
      <ProductList
        image={watch}
        name="Wrist-Watch"
        price="40$"
        category="Fashion"
      />

      <ProductList
        image={gloves}
        name="Hand-Gloves"
        price="30$"
        category="Fashion"
      />

      <ProductList
        image={smartphone}
        name="Smartphone"
        price="1000$"
        category="Electronics"
      />

      <ProductList image={bag} name="bag" price="100$" category="Fashion" />

      {/* <ProductList
        image={wallet}
        name="Wallet"
        price="50$"
        category="Fashion"
      /> */}

      <ProductList
        image={sunglass}
        name="sunglass"
        price="200$"
        category="Fashion"
      />

      <ProductList
        image={sunglass}
        name="sunglass"
        price="200$"
        category="Fashion"
      />
    </div>
  );
};

export default Product;
