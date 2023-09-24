import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
//import SimpleLightbox from  "simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css" 


const gallery = document.querySelector(".gallery")

function CreateMarkup(array){
     return array.map(({ description , original , preview }) => 
     `<li class="gallery__item">
     <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
     </a>
  </li>`
     ).join("")
}


gallery.insertAdjacentHTML("beforeend" , CreateMarkup(galleryItems))

const lightbox = new SimpleLightbox('.gallery  a', { captionsData : 'alt' , captionDelay : 250 });





