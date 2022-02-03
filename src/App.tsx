import React from 'react';
import ProductSliderSection from './product-slider-section';
import Product from './products';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <ProductSliderSection />
      <Product />
    </div>
  );
}

export default App;
