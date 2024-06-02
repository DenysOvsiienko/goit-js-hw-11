import{S as d,i as m}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f=o=>fetch("https://pixabay.com/api/?key=44175237-f9b9fdf7256a15d8718cda915&q="+encodeURIComponent(o)+"&image_type=photo&orientation=horizontal&safesearch=true").then(t=>{if(!t.ok)throw new Error(t.status);return t.json()});function p(o){return o.hits.map(s=>`<li class="gallery-item">
        <a class="image-link" href="${s.largeImageURL}"
          ><img class="gallery-image" src="${s.webformatURL}" alt="${s.tags}"
        /></a>
        <div class="image-stats">
          <div class="image-stat">
            <b>Likes</b>
            <p>${s.likes}</p>
          </div>
          <div class="image-stat">
            <b>Views</b>
            <p>${s.views}</p>
          </div>
          <div class="image-stat">
            <b>Comments</b>
            <p>${s.comments}</p>
          </div>
          <div class="image-stat">
            <b>Downloads</b>
            <p>${s.downloads}</p>
          </div>
        </div>
      </li>`).join("")}const n=document.querySelector(".search-form"),c=document.querySelector(".search-input"),h=document.querySelector(".search-btn"),l=document.querySelector(".loader"),u=document.querySelector(".gallery");let y=new d(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});h.addEventListener("click",o=>{if(o.preventDefault(),!c.value.trim()){n.reset();return}u.innerHTML="",l.classList.remove("visually-hidden"),f(c.value.trim()).then(t=>{t.total||m.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),u.insertAdjacentHTML("afterbegin",p(t)),y.refresh(),l.classList.add("visually-hidden")}).catch(t=>{console.log(t)}),n.reset()});
//# sourceMappingURL=commonHelpers.js.map
