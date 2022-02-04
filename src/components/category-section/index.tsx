import React from 'react';
import CategoryItems from '../category-items';
import styles from './category.module.css';

const CategorySection = () => {
  return (
    <div className={styles.container}>
      <CategoryItems category="FASHION" />
      <CategoryItems category="ELECTRONICS" />
      <CategoryItems category="TRAVEL" />
      <CategoryItems category="MINIATURES" hideIcon />
    </div>
  );
};

export default CategorySection;
