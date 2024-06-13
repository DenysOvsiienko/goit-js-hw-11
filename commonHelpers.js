import{S as m,i as n}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const f=a=>{const r=new URLSearchParams({key:"44175237-f9b9fdf7256a15d8718cda915",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${r}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})};function p(a){return a.hits.map(t=>`<li class="gallery-item">
        <a class="image-link" href="${t.largeImageURL}"
          ><img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}"
        /></a>
        <div class="image-stats">
          <div class="image-stat">
            <b>Likes</b>
            <p>${t.likes}</p>
          </div>
          <div class="image-stat">
            <b>Views</b>
            <p>${t.views}</p>
          </div>
          <div class="image-stat">
            <b>Comments</b>
            <p>${t.comments}</p>
          </div>
          <div class="image-stat">
            <b>Downloads</b>
            <p>${t.downloads}</p>
          </div>
        </div>
      </li>`).join("")}const g="/goit-js-hw-11/assets/errorSvg-843d4981.svg",h="/goit-js-hw-11/assets/cautionSvg-75a3a476.svg",c=document.querySelector(".search-form"),l=document.querySelector(".search-input"),y=document.querySelector(".search-btn"),u=document.querySelector(".loader"),d=document.querySelector(".gallery");let v=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});y.addEventListener("click",a=>{if(a.preventDefault(),!l.value.trim()){c.reset();return}d.innerHTML="",u.classList.remove("visually-hidden"),f(l.value.trim()).then(r=>{r.total||n.error({iconUrl:g,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),d.insertAdjacentHTML("afterbegin",p(r)),v.refresh(),u.classList.add("visually-hidden")}).catch(r=>{n.warning({iconUrl:h,position:"topRight",message:`${r}`})}),c.reset()});
//# sourceMappingURL=commonHelpers.js.map
