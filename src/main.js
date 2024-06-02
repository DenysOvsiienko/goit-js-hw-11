// custom import
import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
// SimpleLightBox library
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// iziToast library
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchFormElem = document.querySelector('.search-form');
const searchInputElem = document.querySelector('.search-input');
const searchBtnElem = document.querySelector('.search-btn');
const standBySpanElem = document.querySelector('.loader');
const galleryElem = document.querySelector('.gallery');
let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

searchBtnElem.addEventListener('click', event => {
  event.preventDefault();
  if (!searchInputElem.value.trim()) {
    searchFormElem.reset();
    return;
  }
  galleryElem.innerHTML = '';
  standBySpanElem.classList.remove('visually-hidden');
  fetchImages(searchInputElem.value.trim())
    .then(data => {
      if (!data.total) {
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      galleryElem.insertAdjacentHTML('afterbegin', renderImages(data));
      gallery.refresh();
      standBySpanElem.classList.add('visually-hidden');
    })
    .catch(error => {
      console.log(error);
    });
  searchFormElem.reset();
});
