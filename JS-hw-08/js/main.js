import galleryItems from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  lightboxButton: document.querySelector(
    'button[data-action="close-lightbox"]',
  ),
  lightboxImage: document.querySelector('.lightbox__image'),
};

let nextPic = 0;

function createElements({ preview, original, description }) {
  const createImages = `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
  `;
  return createImages;
}

function drowToHtml(list, gallery) {
  list.insertAdjacentHTML(
    'beforeend',
    gallery.map(el => createElements(el)).join(' '),
  );
}

function openModal(evt) {
  evt.preventDefault();
  const { target } = evt;
  if (evt.target === evt.currentTarget) {
    return;
  }
  refs.lightboxImage.setAttribute('src', target.dataset.source);
  refs.lightboxImage.setAttribute('alt', target.alt);
  refs.lightbox.classList.add('is-open');
}

function closeModal(evt) {
  refs.lightboxImage.removeAttribute('src');
  refs.lightboxImage.removeAttribute('alt');
  refs.lightbox.classList.remove('is-open');
}

function clearModal(evt) {
  if (
    evt.target.className === 'lightbox__image' &&
    evt.target.className === 'lightbox__content'
  ) {
    return;
  }
  closeModal();
}

function clearModalByEsc(evt) {
  if (evt.key !== 'Escape') {
    return;
  }
  closeModal();
}

function nextAndPrevImg(e) {
  if (e.keyCode === 37 || e.keyCode === 39) {
    const currentValues = refs.lightboxImage;
    if (!currentValues.hasAttribute('src')) {
      return;
    }

    const { src } = currentValues;
    const arr = Array.from(galleryItems);
    let arrIndex = arr.findIndex(elem => elem.original === src);
    if (arrIndex !== -1) {
      if (e.keyCode === 39) arrIndex += 1;
      if (e.keyCode === 37) arrIndex -= 1;
      if (arrIndex <= 0) arrIndex = 0;
      if (arrIndex >= arr.length - 1) arrIndex = arr.length - 1;

      refs.lightboxImage.removeAttribute('src');
      refs.lightboxImage.removeAttribute('alt');

      const { original, description } = arr[arrIndex];

      refs.lightboxImage.setAttribute('src', original);
      refs.lightboxImage.setAttribute('alt', description);
    }
  }
}

drowToHtml(refs.gallery, galleryItems);
refs.gallery.addEventListener('click', openModal);
refs.lightboxButton.addEventListener('click', closeModal);
refs.lightbox.addEventListener('click', clearModal);
window.document.addEventListener('keydown', clearModalByEsc);
window.document.addEventListener('keydown', nextAndPrevImg);
