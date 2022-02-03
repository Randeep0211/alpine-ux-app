import React from 'react';
import styles from './slider.module.css';
import Header from '../components/header';
import ProductSlider from '../components/product-slider';
import ProductDetails from '../components/product-details';

const ProductSliderSection = () => {
  return (
    <div className={styles.sliderContainer}>
      <Header Back="Back" Cart="Cart" En="En" title="ALPINE" />
      <ProductSlider
        title="/ Sunglasses"
        description="French Know-how with high-technology 
        lenses in order to never be taken by 
        surprise when there is a sharp 
        sunny turn in the road"
        name="Buy"
      />
      <ProductDetails title="Product details" />
    </div>
  );
};

export default ProductSliderSection;
