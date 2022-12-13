import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

const galleryImages = galleryItems.map(({ preview, original, description }) => {
   return `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`;
});
galleryContainer .insertAdjacentHTML('beforeend', galleryImages.join(''));

galleryContainer .addEventListener(
   'click',
   event => {
      if (event.target.closest('.gallery__link')) {
         event.preventDefault();
         const instance = basicLightbox.create(
            `<img src="${event.target.closest('img').dataset.source}" width="800" height="600">`
         );
         instance.show();
      }
   },
   false
);

document.addEventListener('keyup', event => {
   if (!document.querySelector('.basicLightbox')) {
      return;
   }
   const basicLightboxEL = document.querySelector('.basicLightbox');
   if ((event.code === 'Escape') & (basicLightboxEL !== null)) {
      basicLightboxEL.remove();
   }
});