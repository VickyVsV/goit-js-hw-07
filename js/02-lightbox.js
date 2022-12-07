import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const imagesContainer = document.querySelector(`.gallery`);
let imagesArray = [];
let lightbox;

galleryItems.forEach(({preview, original, description}) => {
  const linkEl = document.createElement("a");
  linkEl.className = "gallery__item";
  linkEl.href = original;
  
  const imgEl = document.createElement("img");
  imgEl.className = "gallery__image";
  imgEl.src = preview;
  imgEl.alt = description;
  
  imagesContainer.append(linkEl);
  linkEl.append(imgEl);
  imagesArray.push(imagesContainer);
});

lightbox = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
	captionDelay: 250,
});