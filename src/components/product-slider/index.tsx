import React from 'react';
import styles from './slider.module.css';
import image from '../images/sunglass1.png';

interface ProductSliderProps {
  title: string;
  description: string;
  name: string;
}

const ProductSlider: React.FC<ProductSliderProps> = (props) => {
  return (
    <div className={styles.sliderContainer}>
      <div>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.description}>{props.description}</p>
        <button className={styles.button}>{props.name}</button>
      </div>
      <div>
        <img src={image} alt="image" />
      </div>
    </div>
  );
};

export default ProductSlider;
