import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

import css from './Modal.module.css';

export const Modal = ({ src, alt, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      const key = e.key;
      if (key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return (
    <div className={css.Overlay} onClick={() => closeModal()}>
      <div className={css.Modal} onClick={e => e.stopPropagation()}>
        <img className={css.Modal_image} src={src} alt={alt} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  closeModal: PropTypes.func,
};
