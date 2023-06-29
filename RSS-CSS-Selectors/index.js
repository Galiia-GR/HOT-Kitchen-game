!function(){"use strict";var e={899:function(e,t,l){l.r(t)},971:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});const l=document.querySelector(".editor-html__markup"),i=document.querySelector(".levels-show"),s=document.querySelectorAll(".bun"),o=document.querySelectorAll(".levels__item");t.default=class{constructor(e,t,l,i,s,o,n,c){this.level=e,this.title=t,this.history=l,this.help=i,this.tag=s,this.id=o,this.html=n,this.child=c}createAppendLevel(){const e=document.createElement("h2"),t=document.createElement("p"),l=document.createElement("p");e.textContent=this.title,null==i||i.appendChild(e),null==i||i.appendChild(t),t.textContent=this.history,l.textContent=this.help,null==i||i.appendChild(l)}createHtmlMarkUp(){const[...e]=this.html;e.forEach(((e,t)=>{const i=document.createElement("div");switch(i.classList.add("markup__item"),t){case 0:case 1:i.setAttribute("data",`${e}First`),null==l||l.appendChild(i);break;case 2:case 3:i.setAttribute("data",`${e}Second`),null==l||l.appendChild(i);break;default:console.log("Opps")}const s=document.createElement("span");null==i||i.appendChild(s),"string"==typeof e&&""!==this.id&&1===t?(s.textContent=`<${e} id=${this.id}>\n                </${e}>`,i.classList.add(`${e}`)):(s.textContent=`<${e}>\n                </${e}>`,i.classList.add(`${e}`))}))}createHintsShakeElements(){console.log("this шейк"),s.forEach((e=>{e.classList.contains(this.tag)&&e.classList.add("shake")}))}win(){const e=document.querySelector(".editor-css__button"),t=document.querySelector(".editor-css__input"),l=()=>{t&&this.tag===t.value&&o.forEach((e=>{Number(e.getAttribute("id"))===this.level&&e.classList.add("win")}))};null==e||e.addEventListener("click",l),null==t||t.addEventListener("keydown",(e=>{"Enter"===e.key&&l()}))}}},607:function(e,t,l){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),l(899);const s=l(381),o=i(l(971)),n=document.querySelector(".editor-html__markup"),c=document.querySelector(".levels-show"),a=document.querySelectorAll(".bun"),r=document.querySelector(".editor-html__markup"),d=document.querySelectorAll(".levels__item"),h=document.querySelectorAll(".levels-container"),u=document.querySelector(".editor-css__input"),m=document.querySelector(".editor-css__resetLev"),v=[];let p=s.levelsList[0].level;function y(e){const t=new o.default(s.levelsList[e].level,s.levelsList[e].title,s.levelsList[e].history,s.levelsList[e].help,s.levelsList[e].tag,s.levelsList[e].id,s.levelsList[e].html,s.levelsList[e].child);t.createAppendLevel(),t.createHtmlMarkUp(),t.createHintsShakeElements(),t.win()}function b(){n&&c&&a&&(n.innerHTML="",c.innerHTML="",a.forEach((e=>{e.classList.contains("shake")&&e.classList.remove("shake")})))}y(p),console.log("я попадаю сюда пам пам пам и нажимаю уровни"),h.forEach((e=>e.addEventListener("click",(e=>{const t=e.target;(null==t?void 0:t.getAttribute("id"))&&(p=Number(null==t?void 0:t.getAttribute("id")),u.value="",b(),y(p))})))),console.log(r),null==r||r.addEventListener("mouseover",(e=>{const t=e.target;if(t.parentNode){const e=t.parentNode.getAttribute("data");console.log(e),a.forEach((t=>{var l,i;e&&(null===(l=t.parentElement)||void 0===l?void 0:l.classList.contains(e))&&(null===(i=t.parentElement)||void 0===i||i.classList.add("hover"))}))}})),null==r||r.addEventListener("mouseout",(e=>{const t=e.target;if(t.parentNode){const e=t.parentNode.getAttribute("data");console.log(e),a.forEach((t=>{var l,i;e&&(null===(l=t.parentElement)||void 0===l?void 0:l.classList.contains(e))&&(null===(i=t.parentElement)||void 0===i||i.classList.remove("hover"))}))}}));const g=new MutationObserver((e=>{e.forEach((e=>{if("class"===e.attributeName){const t=e.target;t.classList.contains("win")&&(v.push(Number(t.getAttribute("id"))),localStorage.setItem("dataLevel",JSON.stringify(v)),b(),u.value="",p=Number(t.getAttribute("id"))+1,console.log(p),y(p))}}))}));d.forEach((e=>{g.observe(e,{attributes:!0})})),null==m||m.addEventListener("click",(()=>{localStorage.clear(),console.log("РЕСЕД"),location.reload()})),function(){const e=localStorage.getItem("dataLevel");if(e){const t=JSON.parse(e);console.log(t),d.forEach((e=>{t.forEach((t=>{Number(e.getAttribute("id"))===t&&e.classList.add("win")}))}))}}()},381:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.levelsList=void 0,t.levelsList=[{level:0,title:"Type Selector",history:"You're about to learn CSS Selectors!\n            Selectors are how you pick which element to apply styles to.\n             Select to apply styles to every <div> element.\n              You can do this with the selector div.\n             This is called a type selector.\n             What selector will select all white buns elements?",help:"***ПОМОЖИТЕ***",tag:"white",id:"",html:["black","white","black","white"],child:[]},{level:1,title:"Type Selector",history:"What selector will select all black buns elements?",help:"***ПОМОЖИТЕ***",tag:"black",id:"",html:["black","white","black","white"],child:[]},{level:2,title:"ID Selector",history:"Selects the element with a specific #id",help:"***ПОМОЖИТЕ***",tag:"#select",id:"select",html:["black","white","black","white"],child:[]},{level:3,title:"Descendant Selector",history:"Select an element inside another element. You can use a descendant combinator, which is simply a space, to combine the buns (white/black) selector with the meet selector to achieve this.",help:"***ПОМОЖИТЕ***",tag:"white meet",id:"",html:["black","white","black","white"],child:["white","meet"]},{level:4,title:"",history:"",help:"",tag:"",id:"",html:[],child:[]},{level:5,title:"",history:"",help:"",tag:"",id:"",html:[],child:[]},{level:6,title:"",history:"",help:"",tag:"",id:"",html:[],child:[]},{level:7,title:"",history:"",help:"",tag:"",id:"",html:[],child:[]},{level:8,title:"",history:"",help:"",tag:"",id:"",html:[],child:[]},{level:9,title:"",history:"",help:"",tag:"",id:"",html:[],child:[]},{level:10,title:"Select all the things!",history:"The Universal Selector! You can select everything! You can select all elements with the universal selector * !",help:"***ПОМОЖИТЕ***",tag:"*",id:"",html:[],child:[]}]}},t={};function l(i){var s=t[i];if(void 0!==s)return s.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,l),o.exports}l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l(607)}();