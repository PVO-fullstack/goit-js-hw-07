import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', onGalleryItemClick);

  const galleryList = galleryItems.map(({ original, preview, description }) => {
    return `
   <div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source="${original}"
      alt=${description}
    />
  </a>
</div>
 ` ;
  }
  ).join('');

gallery.insertAdjacentHTML('afterbegin', galleryList)

function onGalleryItemClick(event) {
  event.preventDefault();  
  
  const isGalleryImage = event.target.classList.contains('gallery__image')
  if (!isGalleryImage) {
    return;
  } 
  
  const src = event.target.dataset.source;
      const instance = basicLightbox.create(`
    <img src=${src} width="800" height="600">
  `)
  instance.show(onPressEsc());
  
  function onPressEsc() {
  window.addEventListener('keydown', pressEsc);
}
  
  function pressEsc(event) {
    if (event.code === "Escape") {
      window.removeEventListener('keydown', pressEsc);
      instance.close();
  }    
  }
  }