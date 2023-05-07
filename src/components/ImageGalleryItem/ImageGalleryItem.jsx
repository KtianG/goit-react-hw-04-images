import React from 'react';
import PropTypes from 'prop-types';

import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ smallImage, largeImage, alt, onClick }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        onClick={() => onClick(largeImage, alt)}
        className={css.ImageGalleryItem_image}
        src={smallImage}
        alt={alt}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func,
  smallImage: PropTypes.string,
  largeImage: PropTypes.string,
  alt: PropTypes.string,
};
