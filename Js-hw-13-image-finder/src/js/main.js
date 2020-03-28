import refs from './refs.js';
import apiService from '../API/apiService';
import imgCardTemplate from '../Template/imgTemplate.hbs';
import InfiniteScroll from 'infinite-scroll';
import * as basicLightbox from 'basiclightbox'
import 'basiclightbox/dist/basicLightbox.min.js';




refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
refs.btn.addEventListener('click', btnLoadMoreHandler);

function searchFormSubmitHandler(e) {
  e.preventDefault();
  //   console.dir(e.target.elements.query.value)
  const form = e.target;
  const input = form.elements.query;
  const inputValue = input.value;

  updateHTML();

  apiService.resetPage();

  apiService.searchQuery = inputValue;

  fetchImages();

  input.value = '';
}

function fetchImages() {
  apiService
    .fetchImages()
    .then(galleryList => {
      drowToHTML(galleryList);
    })

    .catch(err => console.warn('------->THIS ERROR', err));
}

function drowToHTML(items) {
  const markup = imgCardTemplate(items);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

function updateHTML() {
  refs.gallery.innerHTML = '';
}

function btnLoadMoreHandler() {
  fetchImages();
}
