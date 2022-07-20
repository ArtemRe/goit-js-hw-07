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
list.insertAdjacentHTML('beforeend', criateEl(galleryItems));

list.addEventListener('click', onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains('gallery__image')) {
    return;
  }
  const instance = basicLightbox.create(
    `
    <img src="${e.target.dataset.source}">`,
    {
      onShow: instance => window.addEventListener('keydown', closeModalEscape),
      onClose: instance => window.removeEventListener('keydown', closeModalEscape),
    }
  );
  instance.show();
  function closeModalEscape(e) {
    if (e.key === 'Escape') {
      instance.close();
    }
  }
}
