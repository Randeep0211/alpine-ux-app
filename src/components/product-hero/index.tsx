import React from 'react';
import styles from './slider.module.css';
import image from '../../assets/images/sunglass1.png';
import { MdArrowLeft, MdArrowDropDown, MdArrowForward } from 'react-icons/md';

interface ProductSliderProps {
  title: string;
  description: string;
  detail: string;
}

const ProductHero: React.FC<ProductSliderProps> = (props) => {
  return (
    <div>
      <div className={styles.sliderContainer}>
        <div>
          <h3 className={styles.title}>{props.title}</h3>
          <p className={styles.description}>{props.description}</p>
          <button className={styles.button}>
            <p>Buy</p>
            <MdArrowLeft />
          </button>
        </div>
        <div>
          <img className={styles.image} src={image} alt="image" />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.detail}>
          <div>
            <span>{props.detail}</span>
            <MdArrowDropDown />
          </div>
          <div>
            <div>{/* <span className={styles.one}>01</span> */}1</div>
            <div>
              {/* <span>02</span>
              <MdArrowForward /> */}
              2
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
