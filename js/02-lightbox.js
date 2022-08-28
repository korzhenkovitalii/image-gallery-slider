import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  cardContainer: document.querySelector('.gallery'),
};

//Создание разметки галереи картинок
const cardMarkup = galleryItems.reduce((acc, item) => {
  const { preview, original, description } = item;

  return (
    acc +
    `  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`
  );
}, '');

//Рендер разметки в контейнер
refs.cardContainer.insertAdjacentHTML('beforeend', cardMarkup);
console.log(refs.cardContainer);

var lightbox = new SimpleLightbox('.gallery a', {
  animationSpeed: 150,
  captionsData: 'alt',
  captionsDelay: 250,
  overlayOpacity: 0.9,
  alertError: false,
});
