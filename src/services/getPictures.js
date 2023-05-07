import 'regenerator-runtime/runtime';
import axios from 'axios';

export default getPictures;

const API_KEY = '33326758-3f776db476411dd79607b9f62';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 12;
const parameters = {
  key: API_KEY,
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: PER_PAGE,
  page: 1,
};

async function getPictures(query, page) {
  try {
    parameters.q = query;
    parameters.page = page;

    const images = await axios.get(BASE_URL, { params: parameters });
    return images.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
