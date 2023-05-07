import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'components/Modal/Modal';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images }) => {
  const [largeImageURL, setLargeImageURL] = useState('');
  const [alt, setAlt] = useState('');

  const openModal = (largeImage, newAlt) => {
    setLargeImageURL(largeImage);
    setAlt(newAlt);
  };

  const closeModal = () => {
    setLargeImageURL('');
    setAlt('');
  };

  const renderGalleryItems = ({ id, webformatURL, largeImageURL, tags }) => {
    return (
      <ImageGalleryItem
        key={id}
        onClick={openModal}
        smallImage={webformatURL}
        alt={tags}
        largeImage={largeImageURL}
      />
    );
  };

  return (
    <div>
      <ul className={css.ImageGallery}>{images.map(renderGalleryItems)}</ul>
      {largeImageURL === '' ? (
        ''
      ) : (
        <Modal src={largeImageURL} alt={alt} closeModal={closeModal} />
      )}
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array,
};
