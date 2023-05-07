import React from 'react';
import { useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import css from './App.module.css';
import getPictures from 'services/getPictures';

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadMoreState, setLoadMoreState] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);

  const newQuery = async e => {
    e.preventDefault();

    const new_query = e.currentTarget.elements.query.value;

    if (!new_query) {
      return;
    }

    setIsLoading(true);
    setLoadMoreState(false);
    setPage(1);
    setQuery(new_query);

    const data = await getPictures(new_query, 1);
    const totalHits = data.totalHits;
    const images_array = data.hits;

    setImages(images_array);
    setIsLoading(false);

    if (totalHits > 12) {
      setLoadMoreState(true);
    }
  };

  const loadMore = async () => {
    setIsLoading(true);
    setLoadMoreState(false);

    const currentPage = page + 1;
    setPage(currentPage);

    const data = await getPictures(query, currentPage);
    const totalHits = data.totalHits;
    const images_array = data.hits;

    const new_image_array = images.concat(images_array);

    setImages(new_image_array);
    setIsLoading(true);

    if (new_image_array.length < totalHits) {
      setLoadMoreState(true);
    }
  };

  return (
    <div className={css.App}>
      <Searchbar onSubmit={newQuery} />
      <ImageGallery images={images} />
      {isLoading ? <Loader /> : ''}
      {loadMoreState ? <Button onClick={loadMore} /> : ''}
    </div>
  );
};
