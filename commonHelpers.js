import{S as m,i as n}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p=o=>fetch(`https://pixabay.com/api/?key=44175237-f9b9fdf7256a15d8718cda915&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()});function f(o){return o.hits.map(s=>`<li class="gallery-item">
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
      </li>`).join("")}const g="/goit-js-hw-11/assets/errorSvg-843d4981.svg",h="/goit-js-hw-11/assets/cautionSvg-75a3a476.svg",c=document.querySelector(".search-form"),l=document.querySelector(".search-input"),y=document.querySelector(".search-btn"),u=document.querySelector(".loader"),d=document.querySelector(".gallery");let v=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});y.addEventListener("click",o=>{if(o.preventDefault(),!l.value.trim()){c.reset();return}d.innerHTML="",u.classList.remove("visually-hidden"),p(l.value.trim()).then(t=>{t.total||n.error({iconUrl:g,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),d.insertAdjacentHTML("afterbegin",f(t)),v.refresh(),u.classList.add("visually-hidden")}).catch(t=>{n.warning({iconUrl:h,position:"topRight",message:`${t}`})}),c.reset()});
//# sourceMappingURL=commonHelpers.js.map
