!function(){"use strict";var e={899:function(e,t,l){l.r(t)},971:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});const l=document.querySelector(".editor-html__markup"),s=document.querySelector(".levels-show"),a=document.querySelectorAll(".bun"),i=document.querySelectorAll(".levels__item"),c=document.querySelector(".editor-css__help");t.default=class{constructor(e,t,l,s,a,i,c,n,o,d,r){this.level=e,this.title=t,this.history=l,this.tag=s,this.id=a,this.html=i,this.childFirst=c,this.childSecond=n,this.childThird=o,this.childFourth=d,this.childFifth=r}createAppendLevel(){const e=document.createElement("h2"),t=document.createElement("p");e.textContent=this.title,null==s||s.appendChild(e),null==s||s.appendChild(t),t.textContent=this.history}createHtmlMarkUp(){const[...e]=this.html;if(e.forEach(((e,t)=>{const s=document.createElement("div"),a=document.createElement("span");switch(s.classList.add("markup__item"),s.classList.add("general"),t){case 0:case 1:s.setAttribute("data",`${e}First`),null==l||l.appendChild(s);break;case 2:case 3:s.setAttribute("data",`${e}Second`),null==l||l.appendChild(s);break;default:console.log("Opps")}null==s||s.appendChild(a),"string"==typeof e&&""!==this.id&&1===t?(a.textContent=`<${e} id=${this.id}>`,s.classList.add(`${e}`)):(a.textContent=`<${e}>`,s.classList.add(`${e}`))})),0!==this.childFirst.length){const[...e]=this.childFirst,t=document.querySelector(".board-buns__level1");t&&(t.style.display="flex");const s=document.querySelectorAll(".general");e.forEach(((e,t)=>{const a=document.createElement("span"),i=document.createElement("div");switch(i.classList.add("markup__item"),i.classList.add("level1"),t){case 0:i.setAttribute("data",`${e}BlackFirst`),null==l||l.appendChild(i),s[t].appendChild(i);break;case 1:i.setAttribute("data",`${e}WhiteFirst`),null==l||l.appendChild(i),s[t].appendChild(i);break;case 2:i.setAttribute("data",`${e}BlackSecond`),null==l||l.appendChild(i),s[t].appendChild(i);break;case 3:i.setAttribute("data",`${e}WhiteSecond`),null==l||l.appendChild(i),s[t].appendChild(i);break;default:console.log("Opps")}null==i||i.appendChild(a),a.textContent=`<${e}>`,i.classList.add(`${e}`)}))}if(0!==this.childSecond.length){const[...e]=this.childSecond,t=document.querySelector(".board-buns__level2");t&&(t.style.display="flex");const s=document.querySelectorAll(".general");e.forEach(((e,t)=>{const a=document.createElement("span"),i=document.createElement("div");switch(i.classList.add("markup__item"),i.classList.add("level2"),t){case 0:i.setAttribute("data",`${e}BlackFirst`),null==l||l.appendChild(i),s[t].appendChild(i);break;case 1:i.setAttribute("data",`${e}WhiteFirst`),null==l||l.appendChild(i),s[t].appendChild(i);break;case 2:i.setAttribute("data",`${e}BlackSecond`),null==l||l.appendChild(i),s[t].appendChild(i);break;case 3:i.setAttribute("data",`${e}WhiteSecond`),null==l||l.appendChild(i),s[t].appendChild(i);break;default:console.log("Opps")}null==i||i.appendChild(a),a.textContent=`<${e} class = "slice" >`,i.classList.add(`${e}`)}))}if(0!==this.childThird.length){const[...e]=this.childThird,t=document.querySelector(".board-buns__level3");t&&(t.style.display="flex");const s=document.querySelectorAll(".general");e.forEach(((e,t)=>{const a=document.createElement("span"),i=document.createElement("div");switch(i.classList.add("markup__item"),i.classList.add("level3"),t){case 0:i.setAttribute("data",`${e}BlackFirst`),null==l||l.appendChild(i),s[t].appendChild(i);break;case 1:i.setAttribute("data",`${e}WhiteFirst`),null==l||l.appendChild(i),s[t].appendChild(i);break;case 2:i.setAttribute("data",`${e}BlackSecond`),null==l||l.appendChild(i),s[t].appendChild(i);break;case 3:i.setAttribute("data",`${e}WhiteSecond`),null==l||l.appendChild(i),s[t].appendChild(i);break;default:console.log("Opps")}null==i||i.appendChild(a),a.textContent=`<${e} class = "tomato" >`,i.classList.add(`${e}`)}))}if(0!==this.childFourth.length){const[...e]=this.childFourth,t=document.querySelector(".board-buns__level4");t&&(t.style.display="flex");const s=document.querySelectorAll(".general");e.forEach(((e,t)=>{const a=document.createElement("span"),i=document.createElement("div");switch(i.classList.add("markup__item"),i.classList.add("level3"),t){case 0:i.setAttribute("data",`${e}BlackFirst`),null==l||l.appendChild(i),s[t].appendChild(i);break;case 1:i.setAttribute("data",`${e}WhiteFirst`),null==l||l.appendChild(i),s[t].appendChild(i);break;case 2:i.setAttribute("data",`${e}BlackSecond`),null==l||l.appendChild(i),s[t].appendChild(i);break;case 3:i.setAttribute("data",`${e}WhiteSecond`),null==l||l.appendChild(i),s[t].appendChild(i);break;default:console.log("Opps")}1===t?(null==i||i.appendChild(a),a.textContent=`<${e} id = "select_salat">`,i.classList.add(`${e}`)):(null==i||i.appendChild(a),a.textContent=`<${e}>`,i.classList.add(`${e}`))}))}if(0!==this.childFifth.length){const[...e]=this.childFifth,t=document.querySelector(".board-buns__level5");t&&(t.style.display="flex");const s=document.querySelectorAll(".general");e.forEach(((e,t)=>{const a=document.createElement("span"),i=document.createElement("div");switch(i.classList.add("markup__item"),i.classList.add("level3"),t){case 0:i.setAttribute("data","headBlackFirst"),null==l||l.appendChild(i),s[t].appendChild(i);break;case 1:i.setAttribute("data","headWhiteFirst"),null==l||l.appendChild(i),s[t].appendChild(i);break;case 2:i.setAttribute("data","headBlackSecond"),null==l||l.appendChild(i),s[t].appendChild(i);break;case 3:i.setAttribute("data","headWhiteSecond"),null==l||l.appendChild(i),s[t].appendChild(i);break;default:console.log("Opps")}null==i||i.appendChild(a),a.textContent=`</${e}>`,i.classList.add(`${e}`)}))}}createHintsShakeElements(){a.forEach((e=>{var t,l,s,a,i,c,n;if(e.classList.contains(this.tag)&&e.classList.add("shake"),2===Number(this.level)&&"whiteFirst"===e.getAttribute("data")&&e.classList.add("shake"),4===Number(this.level)&&e.classList.contains("white")&&e.classList.contains("meat")&&e.classList.add("shake"),5===Number(this.level)&&e.classList.contains("cheese")&&e.classList.add("shake"),6===Number(this.level)&&e.classList.contains("tomat")&&(null===(t=e.parentElement)||void 0===t?void 0:t.classList.contains("tomatBlackFirst"))){e.classList.add("shake");const t=document.querySelector(".cheeseBlackFirst");null===(l=null==t?void 0:t.querySelector(".cheese"))||void 0===l||l.classList.add("shake");const s=document.querySelector('[data ="cheeseWhiteFirst"]');if(s){const e=s.querySelector("span");e&&(e.innerText="<cheese>")}}if(6===Number(this.level)&&e.classList.contains("tomat")&&(null===(s=e.parentElement)||void 0===s?void 0:s.classList.contains("tomatBlackSecond"))){e.classList.add("shake");const t=document.querySelector(".cheeseBlackSecond");null===(a=null==t?void 0:t.querySelector(".cheese"))||void 0===a||a.classList.add("shake");const l=document.querySelector('[data ="cheeseWhiteSecond"]');if(l){const e=l.querySelector("span");e&&(e.innerText="<cheese>")}}if(7===Number(this.level)&&e.classList.contains("salat")&&(null===(i=e.parentElement)||void 0===i?void 0:i.classList.contains("salatWhiteFirst"))){e.classList.add("shake");const t=document.querySelector(".whiteFirst");null===(c=null==t?void 0:t.querySelector(".white"))||void 0===c||c.classList.add("shake");const l=document.querySelector(".whiteSecond");null===(n=null==l?void 0:l.querySelector(".white"))||void 0===n||n.classList.add("shake")}if(8===Number(this.level)&&e.classList.contains("salat")){e.classList.add("shake"),document.querySelectorAll(".cheese").forEach((e=>{e.classList.contains("bun")&&e.classList.add("shake")})),document.querySelectorAll(".tomat").forEach((e=>{e.classList.contains("bun")&&e.classList.add("shake")}));const t=document.querySelector('[data ="cheeseWhiteFirst"]');if(t){const e=t.querySelector("span");e&&(e.innerText="<cheese>")}const l=document.querySelector('[data ="cheeseWhiteSecond"]');if(l){const e=l.querySelector("span");e&&(e.innerText="<cheese>")}const s=document.querySelector('[data ="cheeseBlackFirst"]');if(s){const e=s.querySelector("span");e&&(e.innerText="<cheese>")}const a=document.querySelector('[data ="cheeseBlackSecond"]');if(a){const e=a.querySelector("span");e&&(e.innerText="<cheese>")}}9===Number(this.level)&&e.classList.contains("head")&&e.classList.contains("black")&&(e.classList.add("shake"),document.querySelectorAll('[data ="blackFirst"]').forEach((e=>{if(e.classList.contains("general")){const t=e.querySelector("span");t&&(t.innerText='<black class = "my__order">')}}))),9===Number(this.level)&&e.classList.contains("black")&&e.classList.contains("salat")&&(e.classList.add("shake"),document.querySelectorAll('[data ="blackSecond"]').forEach((e=>{if(e.classList.contains("general")){const t=e.querySelector("span");t&&(t.innerText='<black class = "my__order">')}}))),9===Number(this.level)&&e.classList.contains("black")&&e.classList.contains("tomat")&&e.classList.add("shake"),9===Number(this.level)&&e.classList.contains("black")&&e.classList.contains("cheese")&&e.classList.add("shake"),9===Number(this.level)&&e.classList.contains("black")&&e.classList.contains("meat")&&e.classList.add("shake"),9===Number(this.level)&&e.classList.contains("black")&&e.classList.contains("bun")&&e.classList.add("shake"),10===Number(this.level)&&e.classList.contains("bun")&&e.classList.add("shake")}))}win(){const e=document.querySelector(".editor-css__button"),t=document.querySelector(".editor-css__input"),l=document.querySelector(".board-img"),s=()=>{this.tag!==t.value?(l.style.border="5px solid red",l.style.animation="shake 0.5s infinite",setTimeout((()=>{l.style.border="5px solid rgba(73, 36, 158, 0.61)",l.style.animation="",console.log("You wrong")}),500)):this.tag===t.value&&(i.forEach((e=>{Number(e.getAttribute("id"))===this.level&&e.classList.add("win")})),console.log("You right"))};null==e||e.addEventListener("click",s),null==t||t.addEventListener("keydown",(e=>{"Enter"===e.key&&s()}))}pressHelp(){null==c||c.addEventListener("click",(()=>{const e=document.querySelector(".editor-css__input");e&&(e.value=this.tag)}))}}},607:function(e,t,l){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),l(899);const a=l(381),i=s(l(971)),c=document.querySelector(".editor-html__markup"),n=document.querySelector(".levels-show"),o=document.querySelectorAll(".bun"),d=document.querySelector(".editor-html__markup"),r=document.querySelectorAll(".levels__item"),h=document.querySelectorAll(".levels-container"),u=document.querySelector(".editor-css__input"),m=document.querySelector(".editor-css__resetLev"),p=[],b=document.querySelector(".board-buns__level0"),y=document.querySelector(".board-buns__level1"),v=document.querySelector(".board-buns__level2"),S=document.querySelector(".board-buns__level3"),k=document.querySelector(".board-buns__level4"),L=document.querySelector(".board-buns__level5"),f=document.querySelector(".board-img"),_=document.querySelector(".board-win"),w=document.querySelector(".editor-win"),g=document.querySelector(".editor-title");let C=a.levelsList[0].level;function F(e){const t=new i.default(a.levelsList[e].level,a.levelsList[e].title,a.levelsList[e].history,a.levelsList[e].tag,a.levelsList[e].id,a.levelsList[e].html,a.levelsList[e].childFist,a.levelsList[e].childSecond,a.levelsList[e].childThird,a.levelsList[e].childFourth,a.levelsList[e].childFifth);y&&y.style&&(y.style.display="none"),v&&v.style&&(v.style.display="none"),S&&S.style&&(S.style.display="none"),k&&k.style&&(k.style.display="none"),L&&L.style&&(L.style.display="none"),r.forEach((e=>{Number(e.getAttribute("id"))===C&&e.classList.add("hover")})),t.createAppendLevel(),t.createHtmlMarkUp(),t.createHintsShakeElements(),t.win(),t.pressHelp()}function q(){c&&n&&o&&(c.innerHTML="",n.innerHTML="",o.forEach((e=>{e.classList.contains("shake")&&e.classList.remove("shake")})),r.forEach((e=>{e.classList.contains("hover")&&e.classList.remove("hover")})))}F(C),h.forEach((e=>e.addEventListener("click",(e=>{const t=e.target;(null==t?void 0:t.getAttribute("id"))&&(C=Number(null==t?void 0:t.getAttribute("id")),u.value="",q(),F(C))})))),null==d||d.addEventListener("mouseover",(e=>{const t=e.target;if(t.parentNode){const e=t.parentNode.getAttribute("data");o.forEach((t=>{var l,s;e&&(null===(l=t.parentElement)||void 0===l?void 0:l.classList.contains(e))&&(null===(s=t.parentElement)||void 0===s||s.classList.add("hover"))}))}})),null==d||d.addEventListener("mouseout",(e=>{const t=e.target;if(t.parentNode){const e=t.parentNode.getAttribute("data");o.forEach((t=>{var l,s;e&&(null===(l=t.parentElement)||void 0===l?void 0:l.classList.contains(e))&&(null===(s=t.parentElement)||void 0===s||s.classList.remove("hover"))}))}}));const E=new MutationObserver((e=>{e.forEach((e=>{if("class"===e.attributeName){const t=e.target;t.classList.contains("win")&&(p.push(Number(t.getAttribute("id"))),localStorage.setItem("dataLevel",JSON.stringify(p)),q(),u.value="",console.log(p),function(e=[]){return Array.from(Array(11).keys()).every((t=>e.includes(t)))}(p)?(b&&b.style&&(b.style.display="none"),y&&y.style&&(y.style.display="none"),v&&v.style&&(v.style.display="none"),S&&S.style&&(S.style.display="none"),k&&k.style&&(k.style.display="none"),L&&L.style&&(L.style.display="none"),f&&f.style&&(f.style.display="none"),g&&g.style&&(g.style.display="none"),w&&w.style&&(w.style.display="block"),_&&_.style&&(_.style.display="block"),console.log("!!!!You win !!!!")):(10!==C&&(C=Number(t.getAttribute("id"))+1),F(C)))}}))}));r.forEach((e=>{E.observe(e,{attributes:!0})})),null==m||m.addEventListener("click",(()=>{localStorage.clear(),location.reload()})),function(){const e=localStorage.getItem("dataLevel");if(e){const t=JSON.parse(e);console.log(t),r.forEach((e=>{t.forEach((t=>{Number(e.getAttribute("id"))===t&&e.classList.add("win")}))}))}}()},381:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.levelsList=void 0,t.levelsList=[{level:0,title:"Type Selector",history:"You're about to learn CSS Selectors!\n            Selectors are how you pick which element to apply styles to.\n             Select to apply styles to every <div> element.\n              You can do this with the selector div.\n             This is called a type selector.\n             What selector will select all <white> buns elements?",tag:"white",id:"",html:["black","white","black","white"],childFist:[],childSecond:[],childThird:[],childFourth:[],childFifth:[]},{level:1,title:"Type Selector",history:"What selector will select all <black> buns elements?",tag:"black",id:"",html:["black","white","black","white"],childFist:[],childSecond:[],childThird:[],childFourth:[],childFifth:[]},{level:2,title:"ID Selector",history:"Selects the element with a specific #id",tag:"#select",id:"select",html:["black","white","black","white"],childFist:[],childSecond:[],childThird:[],childFourth:[],childFifth:[]},{level:3,title:"Type Selector",history:"Select an element inside another element. What selector will select all <meat> elements?",tag:"meat",id:"",html:["black","white","black","white"],childFist:["meat","meat","meat","meat"],childSecond:[],childThird:[],childFourth:[],childFifth:[]},{level:4,title:"Descendant Selector",history:"Select an element inside another element. You can use a descendant combinator, which is simply a space, to combine the buns (<white>/<black>) selector with the <meat> selector to achieve this.",tag:"white meat",id:"",html:["black","white","black","white"],childFist:["meat","meat","meat","meat"],childSecond:[],childThird:[],childFourth:[],childFifth:[]},{level:5,title:"Class Selector",history:'Select elements by their class ".classname" The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',tag:".slice",id:"",html:["black","white","black","white"],childFist:["meat","meat","meat","meat"],childSecond:["cheese","cheese","cheese","cheese"],childThird:[],childFourth:[],childFifth:[]},{level:6,title:"Combine the Class Selector",history:"You can combine the class selector with other selectors, like the type selector. For example, select cheese with tomatoes.",tag:".slice .tomato",id:"",html:["black","white","black","white"],childFist:["meat","meat","meat","meat"],childSecond:["cheese","cheese","cheese","cheese"],childThird:["tomat","tomat","tomat","tomat"],childFourth:[],childFifth:[]},{level:7,title:"Combine the Tag Selector and ID",history:"You have to select white buns, but one of buns choose salat with id selector",tag:"white #select_salat",id:"",html:["black","white","black","white"],childFist:["meat","meat","meat","meat"],childSecond:["cheese","cheese","cheese","cheese"],childThird:["tomat","tomat","tomat","tomat"],childFourth:["salat","salat","salat","salat"],childFifth:[]},{level:8,title:"Comma Combinator",history:"Combine, selectors, with... commas! You can combine any selectors this way, and you can specify more than two. Select cheese, tomato and salat.",tag:"cheese, .tomato, salat",id:"",html:["black","white","black","white"],childFist:["meat","meat","meat","meat"],childSecond:["cheese","cheese","cheese","cheese"],childThird:["tomat","tomat","tomat","tomat"],childFourth:["salat","salat","salat","salat"],childFifth:[]},{level:9,title:"Combine the skills  :)",history:"Let's selected only black hamburgers.",tag:".my__order",id:"",html:["black","white","black","white"],childFist:["meat","meat","meat","meat"],childSecond:["cheese","cheese","cheese","cheese"],childThird:["tomat","tomat","tomat","tomat"],childFourth:["salat","salat","salat","salat"],childFifth:["black","white","black","white"]},{level:10,title:"Select all!",history:"The Universal Selector! You can select everything! You can select all elements with the universal selector * !",tag:"*",id:"",html:["black","white","black","white"],childFist:["meat","meat","meat","meat"],childSecond:["cheese","cheese","cheese","cheese"],childThird:["tomat","tomat","tomat","tomat"],childFourth:["salat","salat","salat","salat"],childFifth:["black","white","black","white"]}]}},t={};function l(s){var a=t[s];if(void 0!==a)return a.exports;var i=t[s]={exports:{}};return e[s].call(i.exports,i,i.exports,l),i.exports}l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l(607)}();