!function(){"use strict";var s,t=0;function n(t){if(console.log(c),s=Number(t.getAttribute("id")),!(t.classList.contains("open")||t.classList.contains("flag")||m||t.classList.contains("bomb")||t.classList.contains("bomb-medium")||t.classList.contains("bomb-hard"))){var e=t.getAttribute("data");if(0!=e)switch(t.innerText=e,t.classList.add("open"),t.classList.add("number"),e){case"1":t.classList.add("one");break;case"2":t.classList.add("two");break;case"3":t.classList.add("three");break;case"4":t.classList.add("four")}document.querySelector(".active-easy")&&(function(s){var t=s%a==0,e=s%a==a-1;setTimeout((function(){if(s+1<=a*a-1&&!e&&!L[s].classList.contains("number")&&!L[s+1].classList.contains("open")&&!L[s+1].classList.contains("flag")&&!L[s+1].classList.contains("bomb")){var i=L[s+1].id;n(document.getElementById(i))}if(s-1>=0&&!t&&!L[s].classList.contains("number")&&!L[s-1].classList.contains("open")&&!L[s-1].classList.contains("flag")&&!L[s-1].classList.contains("bomb")){var c=L[s-1].id;n(document.getElementById(c))}if(s+a<=a*a-1&&!L[s].classList.contains("number")&&!L[s+a].classList.contains("open")&&!L[s+a].classList.contains("flag")&&!L[s+a].classList.contains("bomb")){var o=L[s+a].id;n(document.getElementById(o))}if(s+(a+1)<=a*a-1&&!e&&!L[s].classList.contains("number")&&!L[s+(a+1)].classList.contains("open")&&!L[s+(a+1)].classList.contains("flag")&&!L[s+(a+1)].classList.contains("bomb")){var d=L[s+(a+1)].id;n(document.getElementById(d))}if(s+(a-1)<=a*a-1&&!t&&!L[s].classList.contains("number")&&!L[s+(a-1)].classList.contains("open")&&!L[s+(a-1)].classList.contains("flag")&&!L[s+(a-1)].classList.contains("bomb")){var l=L[s+(a-1)].id;n(document.getElementById(l))}if(s-(a-1)>=0&&!e&&!L[s].classList.contains("number")&&!L[s-(a-1)].classList.contains("open")&&!L[s-(a-1)].classList.contains("flag")&&!L[s-(a-1)].classList.contains("bomb")){var r=L[s-(a-1)].id;n(document.getElementById(r))}if(s-a>=0&&!L[s].classList.contains("number")&&!L[s-a].classList.contains("open")&&!L[s-a].classList.contains("flag")&&!L[s-a].classList.contains("bomb")){var m=L[s-a].id;n(document.getElementById(m))}if(s-(a+1)>=0&&!t&&!L[s].classList.contains("number")&&!L[s-(a+1)].classList.contains("open")&&!L[s-(a+1)].classList.contains("flag")&&!L[s-(a+1)].classList.contains("bomb")){var u=L[s-(a+1)].id;n(document.getElementById(u))}}),50)}(s),console.log(s),L[s].classList.add("open")),document.querySelector(".active-medium")&&(function(s){var t=s%a==0,e=s%a==a-1;setTimeout((function(){if(s+1<=a*a-1&&!e&&!u[s].classList.contains("number")&&!u[s+1].classList.contains("open")&&!u[s+1].classList.contains("flag")&&!u[s+1].classList.contains("bomb-medium")){var i=u[s+1].id;n(document.getElementById(i))}if(s-1>=0&&!t&&!u[s].classList.contains("number")&&!u[s-1].classList.contains("open")&&!u[s-1].classList.contains("flag")&&!u[s-1].classList.contains("bomb-medium")){var c=u[s-1].id;n(document.getElementById(c))}if(s+a<=a*a-1&&!u[s].classList.contains("number")&&!u[s+a].classList.contains("open")&&!u[s+a].classList.contains("flag")&&!u[s+a].classList.contains("bomb-medium")){var o=u[s+a].id;n(document.getElementById(o))}if(s+(a+1)<=a*a-1&&!e&&!u[s].classList.contains("number")&&!u[s+(a+1)].classList.contains("open")&&!u[s+(a+1)].classList.contains("flag")&&!u[s+(a+1)].classList.contains("bomb-medium")){var d=u[s+(a+1)].id;n(document.getElementById(d))}if(s+(a-1)<=a*a-1&&!t&&!u[s].classList.contains("number")&&!u[s+(a-1)].classList.contains("open")&&!u[s+(a-1)].classList.contains("flag")&&!u[s+(a-1)].classList.contains("bomb-medium")){var l=u[s+(a-1)].id;n(document.getElementById(l))}if(s-(a-1)>=0&&!e&&!u[s].classList.contains("number")&&!u[s-(a-1)].classList.contains("open")&&!u[s-(a-1)].classList.contains("flag")&&!u[s-(a-1)].classList.contains("bomb-medium")){var r=u[s-(a-1)].id;n(document.getElementById(r))}if(s-a>=0&&!u[s].classList.contains("number")&&!u[s-a].classList.contains("open")&&!u[s-a].classList.contains("flag")&&!u[s-a].classList.contains("bomb-medium")){var m=u[s-a].id;n(document.getElementById(m))}if(s-(a+1)>=0&&!t&&!u[s].classList.contains("number")&&!u[s-(a+1)].classList.contains("open")&&!u[s-(a+1)].classList.contains("flag")&&!u[s-(a+1)].classList.contains("bomb-medium")){var L=u[s-(a+1)].id;n(document.getElementById(L))}}),50)}(s),console.log(s),u[s].classList.add("open")),document.querySelector(".active-hard")&&(function(s){var t=s%a==0,e=s%a==a-1;setTimeout((function(){if(s+1<=a*a-1&&!e&&!b[s].classList.contains("number")&&!b[s+1].classList.contains("open")&&!b[s+1].classList.contains("flag")&&!b[s+1].classList.contains("bomb-hard")){var i=b[s+1].id;n(document.getElementById(i))}if(s-1>=0&&!t&&!b[s].classList.contains("number")&&!b[s-1].classList.contains("open")&&!b[s-1].classList.contains("flag")&&!b[s-1].classList.contains("bomb-hard")){var c=b[s-1].id;n(document.getElementById(c))}if(s+a<=a*a-1&&!b[s].classList.contains("number")&&!b[s+a].classList.contains("open")&&!b[s+a].classList.contains("flag")&&!b[s+a].classList.contains("bomb-hard")){var o=b[s+a].id;n(document.getElementById(o))}if(s+(a+1)<=a*a-1&&!e&&!b[s].classList.contains("number")&&!b[s+(a+1)].classList.contains("open")&&!b[s+(a+1)].classList.contains("flag")&&!b[s+(a+1)].classList.contains("bomb-hard")){var d=b[s+(a+1)].id;n(document.getElementById(d))}if(s+(a-1)<=a*a-1&&!t&&!b[s].classList.contains("number")&&!b[s+(a-1)].classList.contains("open")&&!b[s+(a-1)].classList.contains("flag")&&!b[s+(a-1)].classList.contains("bomb-hard")){var l=b[s+(a-1)].id;n(document.getElementById(l))}if(s-(a-1)>=0&&!e&&!b[s].classList.contains("number")&&!b[s-(a-1)].classList.contains("open")&&!b[s-(a-1)].classList.contains("flag")&&!b[s-(a-1)].classList.contains("bomb-hard")){var r=b[s-(a-1)].id;n(document.getElementById(r))}if(s-a>=0&&!b[s].classList.contains("number")&&!b[s-a].classList.contains("open")&&!b[s-a].classList.contains("flag")&&!b[s-a].classList.contains("bomb-hard")){var m=b[s-a].id;n(document.getElementById(m))}if(s-(a+1)>=0&&!t&&!b[s].classList.contains("number")&&!b[s-(a+1)].classList.contains("open")&&!b[s-(a+1)].classList.contains("flag")&&!b[s-(a+1)].classList.contains("bomb-hard")){var L=b[s-(a+1)].id;n(document.getElementById(L))}}),50)}(s),console.log(s),b[s].classList.add("open"))}}function e(s){var n=document.querySelector(".drawFlag"),e=document.querySelector(".drawBombs");m||!s.classList.contains("open")&&t<i&&(s.classList.contains("flag")?(s.classList.remove("flag"),t--,n.innerText=t,e.innerText=i-t):(s.classList.add("flag"),t++,n.innerText=t,e.innerText=i-t,function(){for(var s=0,t=0;t<L.length;t++)if(L[t].classList.contains("flag")&&L[t].classList.contains("bomb")&&s++,s===i){document.querySelector(".gameSummary").innerText="HOORAY YOU WON!!!";for(var n=0;n<L.length;n++)L[n].classList.add("open")}}()))}var a,i,c,o,d,l,r=document.body,m=!1,L=[],u=[],b=[],f=document.createElement("div"),v=document.createElement("header"),p=document.createElement("h1"),h=document.createElement("p"),g=document.createElement("div"),E=document.createElement("div"),y=document.createElement("div"),T=document.createElement("div"),x=document.createElement("div"),_=document.createElement("div"),B=document.createElement("div"),C=document.createElement("div"),I=document.createElement("div"),O=document.createElement("div"),S=document.createElement("div"),w=document.createElement("div"),k=document.createElement("div"),A=document.createElement("div"),M=document.createElement("div"),H=document.createElement("div"),q=document.createElement("div"),D=document.createElement("div"),Y=document.createElement("div"),U=document.createElement("div");function P(){f.classList.add("container"),r.appendChild(f),v.classList.add("header"),f.appendChild(v),p.classList.add("header__title"),v.appendChild(p),p.innerText="minesweeper",g.classList.add("header__wrapper"),v.appendChild(g),E.classList.add("header__flag"),g.appendChild(E),E.innerText="flags",y.classList.add("drawFlag"),E.appendChild(y),y.innerText=0,T.classList.add("header__mines"),g.appendChild(T),T.innerText="mines",x.classList.add("drawBombs"),T.appendChild(x),_.classList.add("header__sound"),g.appendChild(_),_.innerText="sound",B.classList.add("drawSounds"),_.appendChild(B),B.innerText="pull",C.classList.add("header__start"),g.appendChild(C),C.innerText="start",I.classList.add("drawStart"),C.appendChild(I),I.innerText="pull",O.classList.add("header__score"),g.appendChild(O),O.innerText="score",S.classList.add("drawList"),O.appendChild(S),S.innerText="list",Y.classList.add("header__dark"),g.appendChild(Y),Y.innerText="Theme",U.classList.add("drawTheme"),Y.appendChild(U),U.innerText="Dark",w.classList.add("header__level"),g.appendChild(w),w.innerText="level",k.classList.add("level__easy"),w.appendChild(k),k.innerText="easy",A.classList.add("level__medium"),w.appendChild(A),A.innerText="medium",M.classList.add("level__hard"),w.appendChild(M),M.innerText="hard",H.classList.add("minesweeper1"),f.appendChild(H),q.classList.add("minesweeper2"),f.appendChild(q),D.classList.add("minesweeper3"),f.appendChild(D),h.classList.add("gameSummary"),f.appendChild(h),h.innerText="",M.classList.contains("active-hard")||k.classList.contains("active-easy")||A.classList.contains("active-medium")||(k.classList.add("active-easy"),q.classList.add("hide"),D.classList.add("hide"),c=1,a=10,i=10,x.innerText=i,q.innerHTML="",D.innerHTML="",F(a,i,c),function(s){s.forEach((function(t){t.addEventListener("click",(function(e){e.preventDefault(),t.classList.contains("bomb")&&(m=!0,h.innerText="BOOM! OOPS YOU LOST!",s.forEach((function(s){s.classList.contains("bomb")&&s.classList.contains("bomb")&&s.classList.add("bomb-open")}))),t.classList.contains("flag")||n(t)}))})),s.forEach((function(s){s.addEventListener("contextmenu",(function(s){s.preventDefault(),e(s.target)}))}))}(L),console.log(L)),A.classList.contains("active-medium")&&(c=2,a=15,i=25,x.innerText=i,H.innerHTML="",D.innerHTML="",F(a,i,c),function(s){s.forEach((function(t){t.addEventListener("click",(function(e){e.preventDefault(),t.classList.contains("bomb-medium")&&(m=!0,h.innerText="BOOM! OOPS YOU LOST!",s.forEach((function(s){s.classList.contains("bomb-medium")&&s.classList.add("bomb-open")}))),t.classList.contains("flag")||n(t)}))})),s.forEach((function(s){s.addEventListener("contextmenu",(function(s){s.preventDefault(),e(s.target)}))}))}(u),console.log(u)),M.classList.contains("active-hard")&&(c=3,a=25,i=65,x.innerText=i,H.innerHTML="",q.innerHTML="",F(a,i,c),function(s){s.forEach((function(t){t.addEventListener("click",(function(e){e.preventDefault(),t.classList.contains("bomb-hard")&&(m=!0,h.innerText="BOOM! OOPS YOU LOST!",s.forEach((function(s){s.classList.contains("bomb-hard")&&s.classList.add("bomb-open")}))),t.classList.contains("flag")||n(t)}))})),s.forEach((function(s){s.addEventListener("contextmenu",(function(s){s.preventDefault(),e(s.target)}))}))}(b),console.log(b)),w.addEventListener("click",(function(s){s.preventDefault(),s.target.classList.contains("level__easy")&&(k.classList.add("active-easy"),A.classList.remove("active-medium"),M.classList.remove("active-hard"),document.innerHTML="",P(),H.classList.remove("hide"),q.classList.add("hide"),D.classList.add("hide")),s.target.classList.contains("level__medium")&&(A.classList.add("active-medium"),k.classList.remove("active-easy"),M.classList.remove("active-hard"),document.innerHTML="",P(),H.classList.add("hide"),q.classList.remove("hide"),D.classList.add("hide")),s.target.classList.contains("level__hard")&&(M.classList.add("active-hard"),k.classList.remove("active-easy"),A.classList.remove("active-medium"),document.innerHTML="",P(),H.classList.add("hide"),q.classList.add("hide"),D.classList.remove("hide"))}))}function F(s,t,n){if(1===n){o=Array(t).fill("bomb"),d=Array(s*s-t).fill("field"),l=d.concat(o).sort((function(){return Math.random()-.5}));for(var e=0;e<s*s;e++){var a=document.createElement("div");a.classList.add(l[e]),a.setAttribute("id",e),document.querySelector(".minesweeper1").appendChild(a),L.push(a)}for(var i=0;i<L.length;i++){var c=0,r=i%s==0,m=i%s==s-1;L[i].classList.contains("field")&&(i-1>=0&&!r&&L[i-1].classList.contains("bomb")&&c++,i+(s-1)<=s*s-1&&!r&&L[i+(s-1)].classList.contains("bomb")&&c++,i-s>=0&&L[i-s].classList.contains("bomb")&&c++,i-(s-1)>=0&&!m&&L[i-(s-1)].classList.contains("bomb")&&c++,i+1<=s*s-1&&!m&&L[i+1].classList.contains("bomb")&&c++,i-(s+1)>=0&&!r&&L[i-(s+1)].classList.contains("bomb")&&c++,i+(s+1)<=s*s-1&&!m&&L[i+(s+1)].classList.contains("bomb")&&c++,i+s<=s*s-1&&L[i+s].classList.contains("bomb")&&c++,L[i].setAttribute("data",c))}}if(2===n){o=Array(t).fill("bomb-medium"),d=Array(s*s-t).fill("field-medium"),l=d.concat(o).sort((function(){return Math.random()-.5}));for(var f=0;f<s*s;f++){var v=document.createElement("div");v.classList.add(l[f]),v.setAttribute("id",f),document.querySelector(".minesweeper2").appendChild(v),u.push(v)}for(var p=0;p<u.length;p++){var h=0,g=p%s==0,E=p%s==s-1;u[p].classList.contains("field-medium")&&(p-1>=0&&!g&&u[p-1].classList.contains("bomb-medium")&&h++,p+(s-1)<=s*s-1&&!g&&u[p+(s-1)].classList.contains("bomb-medium")&&h++,p-s>=0&&u[p-s].classList.contains("bomb-medium")&&h++,p-(s-1)>=0&&!E&&u[p-(s-1)].classList.contains("bomb-medium")&&h++,p+1<=s*s-1&&!E&&u[p+1].classList.contains("bomb-medium")&&h++,p-(s+1)>=0&&!g&&u[p-(s+1)].classList.contains("bomb-medium")&&h++,p+(s+1)<=s*s-1&&!E&&u[p+(s+1)].classList.contains("bomb-medium")&&h++,p+s<=s*s-1&&u[p+s].classList.contains("bomb-medium")&&h++,u[p].setAttribute("data",h))}}if(3===n){o=Array(t).fill("bomb-hard"),d=Array(s*s-t).fill("field-hard"),l=d.concat(o).sort((function(){return Math.random()-.5}));for(var y=0;y<s*s;y++){var T=document.createElement("div");T.classList.add(l[y]),T.setAttribute("id",y),document.querySelector(".minesweeper3").appendChild(T),b.push(T)}for(var x=0;x<b.length;x++){var _=0,B=x%s==0,C=x%s==s-1;b[x].classList.contains("field-hard")&&(x-1>=0&&!B&&b[x-1].classList.contains("bomb-hard")&&_++,x+(s-1)<=s*s-1&&!B&&b[x+(s-1)].classList.contains("bomb-hard")&&_++,x-s>=0&&b[x-s].classList.contains("bomb-hard")&&_++,x-(s-1)>=0&&!C&&b[x-(s-1)].classList.contains("bomb-hard")&&_++,x+1<=s*s-1&&!C&&b[x+1].classList.contains("bomb-hard")&&_++,x-(s+1)>=0&&!B&&b[x-(s+1)].classList.contains("bomb-hard")&&_++,x+(s+1)<=s*s-1&&!C&&b[x+(s+1)].classList.contains("bomb-hard")&&_++,x+s<=s*s-1&&b[x+s].classList.contains("bomb-hard")&&_++,b[x].setAttribute("data",_))}}}I.addEventListener("click",(function(s){s.preventDefault(),console.log("restart"),location.reload(),P()})),U.addEventListener("click",(function(){U.classList.contains("active-dark")?(U.classList.remove("active-dark"),document.body.classList.remove("dark")):(U.classList.add("active-dark"),document.body.classList.add("dark"))})),P()}();