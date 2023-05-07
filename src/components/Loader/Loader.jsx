import React from 'react';
import { Circles } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.Loader}>
      <Circles />
    </div>
  );
};
