import { galleryItems } from './gallery-items.js';

function criateEl(array) {
  return array.reduce(
    (acc, item) =>
      acc +
      `<a class="gallery__link" 
      href="large-image.jpg"> 
      <img class="gallery__image"
      src="${item.preview}" 
      data-source="${item.original}" 
      alt="${item.description}">
      </img></a>`,
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
  const instance = basicLightbox.create(`<img src='${target.dataset.source}'>`);

  instance.show();
  window.addEventListener('keydown', OnKeyPress);
  function OnKeyPress(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
}
