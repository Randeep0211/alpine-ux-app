import React from 'react';
import ProductSliderSection from '../../components/product-slider-section';
import ProductList from '../../components/products-list';
import CategorySection from '../../components/category-section';
import { productData } from '../../data';

const Homepage = () => {
  return (
    <div>
      <ProductSliderSection />
      <CategorySection />
      <ProductList productData={productData} />
    </div>
  );
};

export default Homepage;
