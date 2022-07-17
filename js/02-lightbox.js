import { galleryItems } from './gallery-items.js';
// Change code below this line

function criateEl(array) {
  return array.reduce(
    (acc, item) =>
      acc +
      `<a class="gallery__item" 
      href="${item.original}">
  <img class="gallery__image"
  src="${item.preview}" 
  alt="${item.description}" />
</a>`,
    ''
  );
}
criateEl(galleryItems);
const list = document.querySelector('.gallery');
const result = criateEl(galleryItems);
list.insertAdjacentHTML('beforeend', result);

list.addEventListener('click', listHendler);
function listHendler(event) {
  event.preventDefault();
  const target = event.target;

  const isGalary = target.classList.contains('gallery__image');
  if (!isGalary) {
    return;
  }
  return new SimpleLightbox('.gallery__item', { captionsData: 'alt', animationSpeed: 250 });
}
