// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"; 

const listEl = document.querySelector(".gallery");

const galleryMarkup = galleryItems.map(({description, preview, original}) => {
    return `<li class="gallery__item" data-name="${description}">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"/>
    </a>
  </li>`
}).join("");

listEl.insertAdjacentHTML('beforeend', galleryMarkup);

const lightboxModal = new SimpleLightbox('.gallery a', 
{
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
