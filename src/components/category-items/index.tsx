import React from 'react';
import styles from './category.module.css';

interface CategoryListProps {
  category: string;
  hideIcon?: boolean;
}

const CategoryItems: React.FC<CategoryListProps> = (props) => {
  return (
    <div className={styles.category}>
      {!props.hideIcon && (
        <div>
          <img
            className={styles.icon}
            src="https://img.icons8.com/material-outlined/24/000000/multiply--v1.png"
          />
        </div>
      )}

      <div>
        <span>{props.category}</span>
      </div>
    </div>
  );
};

export default CategoryItems;
