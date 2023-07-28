!function(){"use strict";var t,n,e,a,o={230:function(t,n,e){e.d(n,{Lo:function(){return s},Mb:function(){return i},PS:function(){return r},RB:function(){return a},VH:function(){return l},Yk:function(){return c}});const a="http://localhost:3000/garage";let o=0;const r=async(t,n=7)=>{try{const e=await fetch(`${a}?_page=${t}&_limit=${n}`,{method:"GET"});o=Number(e.headers.get("X-Total-count"));const r=e.json(),c=document.querySelector(".garage-count");return c&&(c.innerHTML=`${o}`),r}catch(t){throw console.error("Error fetching car data:",t.message),t}};r(1);const c=async t=>{try{await fetch(`${a}/${t}`,{method:"DELETE"})}catch(t){console.error("Error fetching car data:",t.message)}},s=async t=>(await fetch(`${a}/${t}`,{method:"GET"})).json(),i=async(t,n)=>{try{await fetch(`${a}/${n}`,{method:"PUT",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})}catch(t){console.error("Error fetching car data:",t.message)}},l=async t=>{try{await fetch(a,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})}catch(t){console.error("Error fetching car data:",t.message)}}},398:function(t,n,e){e.a(t,(async function(t,a){try{e.d(n,{K0:function(){return c},b3:function(){return d},tx:function(){return l}});var o=e(510),r=t([o]);o=(r.then?(await r)():r)[0];const c="http://localhost:3000/winners";let s=0,i=0;async function l(t){try{const n=document.querySelector(".win-container"),e=await fetch(t,{method:"GET"});(await e.json()).forEach((t=>{const e=document.getElementById(`${t.id}`),a=null==e?void 0:e.querySelector(".car__title"),r=null==e?void 0:e.querySelector(".car__img");i+=1;const c=(0,o.n9)("tr",`${t.id}`),s=`<td>${i}</td>\n        <td class = "win__look"></td>\n        <td>${null==a?void 0:a.textContent}</td>\n        <td>${t.wins}</td>\n        <td>${t.time}</td>`;null==n||n.append(c),c.innerHTML=s;const l=document.querySelector(".win__look");l&&(l.textContent=r.textContent)}))}catch(t){console.error("Error fetching winnersApi:",t.message)}}async function u(t,n=10){try{const e=await fetch(`${c}?_page=${t}&_limit=${n}`,{method:"GET"});s=Number(e.headers.get("X-Total-count"));const a=await e.json();console.log(a)}catch(t){console.error("Error fetching winners total count:",t.message)}const e=document.querySelector(".winners-count");e&&(e.innerHTML=`${s}`)}await l(c),u(1);const d=async t=>{try{await fetch(`${c}/${t}`,{method:"DELETE"})}catch(t){console.error("Error fetching car data:",t.message)}};a()}catch(m){a(m)}}),1)},379:function(t,n,e){e.a(t,(async function(t,n){try{var a=e(230),o=e(510),r=e(398),c=e(321),s=t([o,r]);[o,r]=s.then?(await s)():s;const i=document.querySelector(".cars-container"),l=document.querySelector(".win-container"),u=document.querySelector(".input-create__input"),d=document.querySelector(".input-create__color"),m=document.querySelector(".input-create__button"),h=document.querySelector(".input-update__input"),p=document.querySelector(".input-update__color"),f=document.querySelector(".input-update__button"),g=document.querySelector(".input-button__generate");let b;function _(){const t=document.querySelector(".garage"),n=document.querySelector(".winners"),e=document.querySelector(".switch__garage"),a=document.querySelector(".switch__winners");null==e||e.addEventListener("click",(()=>{null==t||t.classList.remove("delete"),null==i||i.classList.remove("delete"),null==n||n.classList.add("delete")})),null==a||a.addEventListener("click",(()=>{null==t||t.classList.add("delete"),null==i||i.classList.add("delete"),null==n||n.classList.remove("delete")}))}_(),document.addEventListener("click",(async t=>{const n=t.target;if(n.classList.contains("car-selectors__select")&&(b=Number(n.getAttribute("id")),(0,a.Lo)(b).then((t=>{h.value=t.name,p.value=t.color})).catch((t=>{console.error("Error getting car data:",t.message)})),null==f||f.addEventListener("click",(async()=>{""!==h.value&&(0,a.Mb)({name:h.value,color:p.value},b).then((()=>{i&&(i.innerHTML=""),(0,o.PX)(a.RB)})),h.value=""}))),n.classList.contains("car-selectors__remove")){const t=Number(n.getAttribute("id"));i&&(i.innerHTML=""),(0,a.Yk)(t).then((()=>(0,o.PX)(a.RB))),l&&(l.innerHTML=""),(0,r.b3)(t).then((()=>{(0,r.tx)(r.K0),(0,a.PS)(1)}))}})),null==m||m.addEventListener("click",(async()=>{const t=d.value,n=u.value;""!==n&&((0,a.VH)({name:n,color:t}).then((()=>{i&&(i.innerHTML=""),(0,o.PX)(a.RB),(0,a.PS)(1)})),u.value="")})),null==g||g.addEventListener("click",(async()=>{for(let t=0;t<100;t++){const t=(0,c.B)(),n=(0,c.p)();(0,a.VH)({name:`${t}`,color:`${n}`})}i&&(i.innerHTML=""),(0,o.PX)(a.RB),(0,a.PS)(1)})),n()}catch(v){n(v)}}))},510:function(t,n,e){e.a(t,(async function(t,a){try{function o(t,n){const e=document.createElement(t);return n&&(e.className=n),e}async function r(){const t=document.querySelector("body"),n=o("div","container");null==t||t.append(n),n.innerHTML='\n    <div class="wrapper">\n\n    <div class="switch">\n    <button class="switch__garage">to GARAGE</button>\n    <button class="switch__winners">to WINNERS</button>\n    </div>\n\n    <div class = "garage">\n\n    <div class="input">\n    <div class="input-create__block">\n    <input class="input-create__input">\n    <input type=\'color\' class="input-create__color">\n    <button class="input-create__button">CREATE</button>\n    </div>\n    <div class="input-update__block">\n    <input class="input-update__input">\n    <input type=\'color\' class="input-update__color">\n    <button class="input-update__button">UPDATE</button>\n    </div>\n    </div>\n\n    <div class="input-buttons">\n    <button class="input-button__race">RACE</button>\n    <button class="input-button__reset">RESET</button>\n    <button class="input-button__generate">GENERATE CARS</button>\n    </div>\n\n    <div class="garage-title">\n    <span class="garage-title__main">Garage #<span class = "garage-count"></span></span>\n    <span class="garage-title__page">Page #<span class = "garage-page-count">1</span></span>\n    <div class="pagination">\n        <button class="prev-pagination__button">Prev</button>\n        <button class="next-pagination__button">Next</button>\n        </div>\n        <span class=\'show\'></span>\n    </div>\n\n    <div class="cars-container"></div>\n</div>\n\n<div class="winners delete">\n\n<div class="winners-title">\n    <span class="winners-title__main">Winners #<span class = "winners-count"></span></span>\n    <span class="winners-title__page">Page #<span class = "winners-page-count">1</span></span>\n    <div class="pagination-win">\n    <button class="win-prev-pagination__button">Prev</button>\n    <button class="win-next-pagination__button">Next</button>\n  </div>\n    </div>\n\n    <div class="winners-table__container">\n        <table class="table">\n          <thead>\n            <tr>\n              <th>Number</th>\n              <th>Car</th>\n              <th>Name</th>\n              <th>Wins</th>\n              <th>Best time (seconds)</th>\n            </tr>\n          </thead>\n          <tbody class="win-container">\n          </tbody>\n        </table>\n      </div>\n</div>\n'}function c(){const t=document.querySelector(".container"),n=o("footer","footer");null==t||t.appendChild(n),n.innerHTML='\n  <a class="RSS" href="https://rs.school/js/" target="_blank">\n      <img src="./images/3fc4b04a9808cbde8693.svg" width="94" height="22" alt="RS School" />\n  </a>\n  <p>\n      2023 by Galiia-GR\n      <a href="https://github.com/Galiia-GR" target="_blank">\n          <img src="./images/beb09d6d137067aa9487.svg" width="28" height="28" alt="github"\n      /></a>\n  </p>\n'}e.d(n,{PX:function(){return i},n9:function(){return o}}),r(),c();const s="http://localhost:3000/garage";async function i(t){const n=document.querySelector(".cars-container");try{const e=await fetch(t);(await e.json()).forEach((t=>{const e=o("div","car");n&&e.setAttribute("id",`${t.id}`),null==n||n.append(e);const a=`\n          <div class="car-selectors">\n          <button class="car-selectors__select" id="${t.id}">SELECT</button>\n          <button class="car-selectors__remove" id="${t.id}">REMOVE</button>\n          <button class="car-selectors__start" id="${t.id}" data ="start-${t.id}">Start</button>\n          <button class="car-selectors__stop" id="${t.id}" data ="stop-${t.id}">Stop</button>\n          </div>\n          <h5 class="car__title">${t.name}</h5>\n          <div class="car__img" id=img-${t.id}>${r=t.color,`<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 666.55878 236.45138">\n  <g id="layer1" transform="translate(2708.5 468.56)">\n  <g id="g4142">\n  <g fill='${r}'>\n  <path id="path1742" d="m-2536.4-468.56 64.435 0.0538-0.1882 21.21-21.317 0.37635 0.081 21.129 21.183 0.37634 0.3764 21.237 257.77-0.0269 0.1344-21.344 21.398 0.0269 0.215 21.371 64.301 0.18817 0.215 21.317 64.301 0.18817 0.215 21.29 21.317 0.21505-0.027 42.796-21.344 0.21507-0.2151 21.317-64.355-0.0269-0.1344-42.688-21.21-0.45699-0.3763-21.21-85.645 0.0538-0.3764 21.183-21.21 0.37635-0.1344 42.769-258.01-0.0269-0.1344-42.688-21.21-0.45699-0.3763-21.21-85.645 0.0538-0.3764 21.183-21.21 0.37635-0.1344 42.769-42.876-0.0269-0.2419-21.344-21.317-0.21507 0.027-85.806 21.344-0.21506 0.215-21.317 64.301-0.18817 0.2151-21.317 85.806-0.13441 0.215-21.371z"/>\n  <path id="path1744" d="m-2472-468.51h171.91l0.2151 21.344 42.796 0.10753 0.2151 21.398 42.903 0.10753-0.1344 21.344-257.77 0.0269-0.3763-21.237-21.183-0.37634-0.081-21.129 21.317-0.37635 0.1882-21.21z" fill='#0ff'/>\n  <path id="path1812" d="m-2213.9-318.02 42.93-0.0269 0.027 42.93-42.93 0.0269-0.027-42.93zm-387.1 0 42.93-0.0269 0.027 42.93-42.93 0.0269zm365.75-42.93 85.645-0.0538 0.3764 21.21 21.21 0.45699 0.1344 42.688-0.081 42.984-21.371 0.24194-0.2151 21.317-85.806-0.0269-0.2151-21.344-21.317-0.21505-0.081-42.93 0.1344-42.769 21.21-0.37635 0.3764-21.183m21.398 21.425-0.054 21.505h-21.452l-0.027 42.876 21.505 0.0537v21.452l42.876 0.0269 0.054-21.505h21.452l0.027-42.876-21.505-0.0537v-21.452l-42.876-0.0269zm-408.49-21.425 85.645-0.0538 0.3763 21.21 21.21 0.45699 0.1344 42.688-0.081 42.984-21.371 0.24194-0.215 21.317-85.806-0.0269-0.2151-21.344-21.317-0.21505-0.081-42.93 0.1344-42.769 21.21-0.37635 0.3763-21.183m21.398 21.425-0.054 21.505h-21.452l-0.027 42.876 21.505 0.0537v21.452l42.876 0.0269 0.054-21.505h21.452l0.027-42.876-21.505-0.0537v-21.452l-42.876-0.0269z"/>\n  <path id="path1858" d="m-2213.9-275.09 42.93-0.0269-0.054 21.505-42.876-0.0269v-21.452zm-387.1 0 42.93-0.0269-0.054 21.505-42.876-0.0269v-21.452zm430-42.957 21.505 0.0537-0.027 42.876h-21.452l-0.027-42.93zm-64.382 0.0269h21.452l0.027 42.93-21.505-0.0537 0.027-42.876zm-322.71-0.0269 21.505 0.0537-0.027 42.876h-21.452l-0.027-42.93zm-64.382 0.0269h21.452l0.027 42.93-21.505-0.0537 0.027-42.876zm408.6-21.505 42.876 0.0269v21.452l-42.93 0.0269 0.054-21.505zm-387.1 0 42.876 0.0269v21.452l-42.93 0.0269 0.054-21.505z" fill="#c0c0c0"/>\n  </g>\n  </g>\n  </g>\n  </svg>`}</div>\n          <div class="flag" id="flag-${t.id}">🚩</div>`;var r;e.innerHTML=a}))}catch(t){console.error("Error fetching car data:",t.message)}}await i(s),a()}catch(l){a(l)}}),1)},330:function(t,n,e){var a=e(230);const o="http://localhost:3000/engine";let r,c,s,i,l,u=!1;const d=document.querySelector(".input-button__race"),m=document.querySelector(".input-button__reset"),h=document.querySelector(".show");const p=async t=>{try{const n=await(async t=>{try{return(await fetch(`${o}?id=${t}&status=started`,{method:"PATCH"})).json()}catch(t){throw console.error("Error starting motor:",t.message),t}})(t),e=Number(n.velocity),a=Number(n.distance);i=a/e;const s=document.getElementById(`img-${t}`);if(s instanceof HTMLElement){const n=document.body.clientWidth;!function(t,n,e){let a=0;c=r,console.log(c),c=window.requestAnimationFrame((function o(r){a||(a=r);const s=(r-a)/e,i=s*n;t.style.transform=`translateX(${i}px)`,s<1&&(c=window.requestAnimationFrame(o)),s>=1&&!m.hasAttribute("disabled")&&async function(t,n){var e,a;if(!u){u=!0,l=Number(t.dataset.car),console.log(l,t);let o=(n/1e3).toFixed(2),r=null===(a=null===(e=t.parentNode)||void 0===e?void 0:e.querySelector(".car__title"))||void 0===a?void 0:a.textContent;h.innerHTML=`${r} winner - (${o}sec) !`}}(t,e)}))}(s,n-n/200*15,i),(await async function(t){try{const n=await fetch(`${o}?id=${t}&status=drive`,{method:"PATCH"});return 200!==n.status?{success:!1}:await n.json()}catch(t){return console.error("Error driving motor:",t.message),{success:!1}}}(t)).success||window.cancelAnimationFrame(c)}}catch(t){console.error("Error starting car:",t.message)}},f=async t=>{try{(async function(t){try{const n=await fetch(`${o}?id=${t}&status=stopped`,{method:"PATCH"});await n.json()}catch(t){console.error("Error stopping motor:",t.message)}})(t).then((()=>{window.cancelAnimationFrame(t);const n=document.getElementById(`img-${t}`);n instanceof HTMLElement&&(n.style.transform="translateX(0px)")}))}catch(t){console.error("Error starting car:",t.message)}};document.addEventListener("click",(async t=>{const n=t.target;if(n.classList.contains("car-selectors__start")){const t=n,e=n.parentNode,a=null==e?void 0:e.querySelector(".car-selectors__stop");r=Number(n.getAttribute("id")),p(r),t.setAttribute("disabled","disabled"),null==a||a.removeAttribute("disabled")}if(n.classList.contains("car-selectors__stop")){const t=n,e=n.parentNode,a=null==e?void 0:e.querySelector(".car-selectors__start");s=Number(n.getAttribute("id")),f(s),t.setAttribute("disabled","disabled"),null==a||a.removeAttribute("disabled")}})),null==d||d.addEventListener("click",(async()=>{!async function(t){try{(await(0,a.PS)(1)).forEach((t=>{p(t.id)}))}catch(t){console.error("Error starting car:",t.message)}}(),d.setAttribute("disabled","disabled"),null==m||m.removeAttribute("disabled")})),null==m||m.addEventListener("click",(async()=>{!async function(t){try{(await(0,a.PS)(1)).forEach((t=>{f(t.id)}))}catch(t){console.error("Error starting car:",t.message)}}(),m.setAttribute("disabled","disabled"),null==d||d.removeAttribute("disabled"),h.innerHTML="",u=!1}))},321:function(t,n,e){function a(){const t=Math.floor(15*Math.random()),n=Math.floor(15*Math.random());return`${["Audi","Ford","Ferrari","Honda","Hyundai","Infiniti","Jeep","Kamaz","Nissan","Opel","Škoda","Suzuki","Tesla","Toyota","Volvo"][t]} ${["X5","GT4","Priora","4x4","Rio","Focus","Kalina","Nexia","Matiz","Captiva","A5","TT","Corolla","Camry","RAV4"][n]}`}function o(){const t=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];let n="";for(let e=1;e<7;e++)n+=t[Math.floor(Math.random()*t.length)];return`#${n}`}e.d(n,{B:function(){return a},p:function(){return o}})},607:function(t,n,e){e.a(t,(async function(t,n){try{var a=e(510),o=(e(230),e(398)),r=e(379),c=(e(330),t([a,o,r]));[a,o,r]=c.then?(await c)():c,n()}catch(t){n(t)}}))}},r={};function c(t){var n=r[t];if(void 0!==n)return n.exports;var e=r[t]={exports:{}};return o[t](e,e.exports,c),e.exports}t="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",n="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",e="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",a=function(t){t&&t.d<1&&(t.d=1,t.forEach((function(t){t.r--})),t.forEach((function(t){t.r--?t.r++:t()})))},c.a=function(o,r,c){var s;c&&((s=[]).d=-1);var i,l,u,d=new Set,m=o.exports,h=new Promise((function(t,n){u=n,l=t}));h[n]=m,h[t]=function(t){s&&t(s),d.forEach(t),h.catch((function(){}))},o.exports=h,r((function(o){var r;i=function(o){return o.map((function(o){if(null!==o&&"object"==typeof o){if(o[t])return o;if(o.then){var r=[];r.d=0,o.then((function(t){c[n]=t,a(r)}),(function(t){c[e]=t,a(r)}));var c={};return c[t]=function(t){t(r)},c}}var s={};return s[t]=function(){},s[n]=o,s}))}(o);var c=function(){return i.map((function(t){if(t[e])throw t[e];return t[n]}))},l=new Promise((function(n){(r=function(){n(c)}).r=0;var e=function(t){t!==s&&!d.has(t)&&(d.add(t),t&&!t.d&&(r.r++,t.push(r)))};i.map((function(n){n[t](e)}))}));return r.r?l:c()}),(function(t){t?u(h[e]=t):l(m),a(s)})),s&&s.d<0&&(s.d=0)},c.d=function(t,n){for(var e in n)c.o(n,e)&&!c.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c(607)}();