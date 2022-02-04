import React from 'react';
import styles from './slider.module.css';
import Header from '../header';
import ProductSlider from '../product-hero';
import ProductDetails from '../product-details';

const ProductSliderSection = () => {
  return (
    <div className={styles.sliderContainer}>
      <Header back="Back" cart="Cart" en="En" title="ALPINE" />
      <ProductSlider
        title="/ Sunglasses"
        description="French Know-how with high-technology 
        lenses in order to never be taken by 
        surprise when there is a sharp 
        sunny turn in the road"
        detail="Product Details"
      />
      {/* <ProductDetails title="Product details" /> */}
    </div>
  );
};

export default ProductSliderSection;
