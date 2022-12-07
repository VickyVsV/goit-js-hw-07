import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const imagesContainer = document.querySelector(`.gallery`);
let imagesArray = [];
let instanse;

galleryItems.forEach(({preview, original, description}) => {
  const containerEl = document.createElement("div");
  containerEl.className = "gallery__item";

  const linkEl = document.createElement("a");
  linkEl.className = "gallery__link";
  linkEl.href = original;
  
  const imgEl = document.createElement("img");
  imgEl.className = "gallery__image";
  imgEl.src = preview;
  imgEl.dataset.source = original;
  imgEl.alt = description;
  
  imagesContainer.append(containerEl);
  containerEl.append(linkEl);
  linkEl.append(imgEl);
  imagesArray.push(imagesContainer);
});

imagesContainer.addEventListener("click", imgOpen);
imagesContainer.addEventListener('keydown', imgClose);//Закрытие по нажатию на кнопку 'Escape'

function imgOpen(event) {
  event.preventDefault();
  const nodeNameEl = event.target.nodeName;
  console.log(nodeNameEl);

  if (nodeNameEl === "IMG") {
    const selectedImg = event.target.dataset.source;
    instanse = basicLightbox.create(`<img src=${selectedImg}>`);
    instanse.show();
  }
  return;
}

//функция акрытие по нажатию на кнопку 'Escape'
function imgClose (event) {
  if (event.key === 'Escape') {
    instanse.close();
  }
}

