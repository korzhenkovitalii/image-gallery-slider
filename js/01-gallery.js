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
    `  <a class="gallery__link" href="image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`
  );
}, '');

//Рендер разметки в контейнер
refs.cardContainer.insertAdjacentHTML('beforeend', cardMarkup);
console.log(refs.cardContainer);

//Делегирование события клика на контейнер галереи
refs.cardContainer.addEventListener('click', onModalOpen);

function onModalOpen(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) return;
  const instance = basicLightbox.create(`
         <img
      class= 'modal_image'
      src="${event.target.dataset.source}"
    />
`);
  instance.show();

  window.addEventListener('keydown', onEscape);

  function onEscape(event) {
    const ESC_KEY_CODE = 'Escape';

    if (event.code === ESC_KEY_CODE) {
      instance.close();
      window.removeEventListener('keydown', onEscape);
    }
  }
}
console.log(galleryItems);
