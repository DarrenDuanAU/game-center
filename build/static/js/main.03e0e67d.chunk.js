(this["webpackJsonpexam-sample"]=this["webpackJsonpexam-sample"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(7),i=c.n(a),o=c(2),s=(c(12),c(13),c(3)),u=c(0),l=function(e){var t=e.char,c=e.index,n=e.onChange;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"chip",children:"?"===t?Object(u.jsx)("input",{className:"WordGuess_input",onChange:n,id:c,maxLength:1,autoComplete:"off"}):t})})},f=function(e){var t=e.onClick,c=e.children;return Object(u.jsx)("button",{className:"button",onClick:t,children:c})},j=["the fat cats","larger frogs","banana cakes","unsw vs usyd","french toast","hawaii pizza","barack obama"],d=(c(15),function(e){var t=e.setScore,c=e.intervalIds,r=Object(n.useState)("CLICK 2START"),a=Object(o.a)(r,2),i=a[0],d=a[1],b=Object(n.useState)("CLICK 2START"),h=Object(o.a)(b,2),O=h[0],v=h[1],m=Object(n.useState)(0),p=Object(o.a)(m,2),x=p[0],g=p[1],k=Object(n.useState)([0]),S=Object(o.a)(k,2),N=S[0],C=S[1],E=Object(n.useState)(0),w=Object(o.a)(E,2),_=w[0],I=w[1];Object(n.useEffect)((function(){c.current.forEach((function(e){return clearInterval(e)}))}),[c]),Object(n.useEffect)((function(){0===N.length&&(t((function(e){return e+3})),I((function(e){return e+3})))}),[N,t]),Object(n.useEffect)((function(){if("CLICK 2START"===i)v(i);else{for(var e=i.split(""),t=0,c=[];t<3;){var n=Math.floor(12*Math.random());" "!==e[n]&&"?"!==e[n]&&(c.push(n),e[n]="?",t+=1)}C(c),v(e.join(""))}}),[i]);var T=function(e){var t=Number(e.target.id),c=e.target.value;""===c&&C((function(e){return[].concat(Object(s.a)(e),[t])})),c===i[t]&&C((function(e){return e.filter((function(e){return e!==t}))}))};return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("di",{className:"word_guess_scoreboard",children:["Word Guess Score: ",_]}),Object(u.jsx)("div",{className:"upper_container",children:O.split("").map((function(e,t){return Object(u.jsx)(l,{onChange:T,index:t,char:e},"".concat(x," - ").concat(t))}))}),Object(u.jsx)("div",{className:"low_container",children:Object(u.jsx)(f,{onClick:function(){for(var e=Math.floor(Math.random()*j.length);j[e]===i;)e=Math.floor(Math.random()*j.length);d(j[e]),g((function(e){return e+1}))},children:"CLICK 2START"===i?"Start":"Next"})})]})}),b=(c(16),function(e){var t=e.piece,c=e.onClick;return Object(u.jsx)("div",{className:"cell",onClick:c,children:Object(u.jsx)("img",{src:t,alt:"shrek_pieces"})})}),h=[c.p+"static/media/1.fc6bde86.png",c.p+"static/media/2.ed7dca6a.png",c.p+"static/media/3.aff7d8e5.png",c.p+"static/media/4.e435c05d.png",c.p+"static/media/5.428142a1.png",c.p+"static/media/6.01949773.png",c.p+"static/media/7.599fb031.png",c.p+"static/media/8.a6b684fd.png",c.p+"static/media/9.449d155a.png"],O=[{click:0,check:[1,3]},{click:1,check:[0,2,4]},{click:2,check:[1,5]},{click:3,check:[0,4,6]},{click:4,check:[1,3,5,7]},{click:5,check:[2,4,8]},{click:6,check:[3,7]},{click:7,check:[4,6,8]},{click:8,check:[5,7]}],v=function(e){var t=e.setScore,c=e.intervalIds,r=Object(n.useRef)(0),a=Object(n.useState)([0,1,2,3,4,5,6,7,8]),i=Object(o.a)(a,2),l=i[0],j=i[1],d=Object(n.useState)(!1),v=Object(o.a)(d,2),m=v[0],p=v[1],x=Object(n.useState)("mask"),g=Object(o.a)(x,2),k=g[0],S=g[1],N=function(){p((function(e){return!e}))};Object(n.useEffect)((function(){c.current.forEach((function(e){return clearInterval(e)}))}),[c]),Object(n.useEffect)((function(){var e=[0,1,2,3,4,5,6,7,8];!0===m?(j(function(e){for(var t=e.length-1;t>0;t--){var c=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[c],e[c]=n}return e}(e)),S("mask mask-active")):(j(e),S("mask"))}),[m]),Object(n.useEffect)((function(){r.current>=2&&JSON.stringify(l)===JSON.stringify([0,1,2,3,4,5,6,7,8])?(alert("you won 10 marks!"),t((function(e){return e+10}))):r.current=r.current+1}),[l,t]);return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"sliding_puzzle_scoreBoard",children:"Solve puzzle to win 10 points"}),Object(u.jsxs)("div",{className:"SlidingPuzzle_main_container",children:[Object(u.jsx)("div",{className:k}),l.map((function(e,t){return Object(u.jsx)(b,{piece:h[e],onClick:function(){return function(e){for(var t,c=null===(t=O.find((function(t){return t.click===e})))||void 0===t?void 0:t.check,n=function(){if(8===l[c[r]]){var t=c[r];j((function(c){return function(e,t,c){var n=e[t];return e[t]=e[c],e[c]=n,e}(Object(s.a)(c),e,t)}))}},r=0;r<c.length;r++)n()}(t)}},t)}))]}),Object(u.jsx)("div",{className:"low_container",children:!1===m?Object(u.jsx)(f,{onClick:N,children:"Start"}):Object(u.jsx)(f,{onClick:N,children:"Solve"})})]})},m=(c(17),15),p={0:{color:"blue"},1:{color:"grey"}},x=new Array(m).fill(new Array(10).fill(0)),g=[[[4,14]],[[4,14],[4,13]],[[4,14],[4,13],[5,14],[5,13]]],k=function(e){e.coor;var t=e.themeCode;return Object(u.jsx)("div",{className:"square square_".concat(p[t].color),children:Object(u.jsx)("div",{className:0!==t?"triangle":""})})},S=function(e){var t=e.squares;return Object(u.jsx)(u.Fragment,{children:null===t||void 0===t?void 0:t.map((function(e,t){return null===e||void 0===e?void 0:e.map((function(e,c){return Object(u.jsx)(k,{themeCode:e,coor:c+"-"+t},c+"-"+t)}))}))})},N=function(e){e.coor;var t=e.themeCode;return Object(u.jsx)("div",{className:"block block_".concat(p[t].color),children:Object(u.jsx)("div",{className:0!==t?"triangle":""})})},C=function(e){var t=e.blocks;return Object(u.jsx)(u.Fragment,{children:null===t||void 0===t?void 0:t.map((function(e,t){return null===e||void 0===e?void 0:e.map((function(e,c){return Object(u.jsx)(N,{themeCode:e,coor:c+"-"+t},c+"-"+t)}))}))})},E=function(e){var t={};return e.forEach((function(e,c){e.forEach((function(e,n){0!==e&&(n in t||(t[n]={}),t[n][c]=e)}))})),t},w=function(e,t){var c=Object(s.a)(e);switch(t){case"down":c.shift();var n=new Array(10).fill(0);return c.push(n),c;case"left":return c.map((function(e){var t=e.slice(1);return t.push(0),t}));case"right":return c.map((function(e){var t=e.slice(0,e.length-1);return t.unshift(0),t}));default:console.log("function BlockHandler: invalid direction")}},_=function(e){var t=e.setScore,c=e.intervalIds,r=Object(n.useState)(!1),a=Object(o.a)(r,2),i=a[0],l=a[1],j=Object(n.useState)("notStart"),d=Object(o.a)(j,2),b=d[0],h=d[1],O=Object(n.useState)(x),v=Object(o.a)(O,2),m=v[0],p=v[1],k=Object(n.useState)(x),N=Object(o.a)(k,2),_=N[0],I=N[1],T=Object(n.useRef)(_),z=Object(n.useRef)(m),y=Object(n.useState)(0),M=Object(o.a)(y,2),R=M[0],A=M[1];Object(n.useEffect)((function(){T.current=_}),[_]),Object(n.useEffect)((function(){z.current=m}),[m]),Object(n.useEffect)((function(){switch(b){case"newBlock":var e=(f=g)[Math.floor(Math.random()*f.length)];I((function(t){return Object(s.a)(t).map((function(t,c){return t.map((function(t,n){return e.some((function(e){var t=Object(o.a)(e,2),r=t[0],a=t[1];return r===n&&a===c}))?1:t}))}))})),h("start");break;case"start":var n=setInterval((function(){I((function(e){var t=Object(s.a)(e);return w(t,"down")}))}),1e3);c.current.push(n);break;case"collision":c.current.forEach((function(e){return clearInterval(e)}));var r=E(Object(s.a)(T.current));I(x),p((function(e){return Object(s.a)(e).map((function(e,t){return e.map((function(e,c){return c in r&&t in r[c]?r[c][t]:e}))}))})),h("removeRows");break;case"removeRows":var a=Object(s.a)(z.current),i=[];a.forEach((function(e,t){var c=0;e.forEach((function(e){0!==e&&(c+=1)})),10===c&&i.push(t)}));var u=i.reverse(),l=u.length;t((function(e){return e+l})),A((function(e){return e+l})),0!==u.length&&p((function(e){var t=Object(s.a)(e);return u.forEach((function(e){t.splice(e,1);var c=new Array(10).fill(0);t.push(c)})),t})),h("newBlock");break;default:console.log("invalid game status")}var f}),[b,t,c]),Object(n.useEffect)((function(){var e=!1;_.forEach((function(t,c){t.forEach((function(t,n){0===c&&0!==t&&(e=!0)}))})),e&&h("collision")}),[_]),Object(n.useEffect)((function(){if(_!==x){var e=!1,t=w(Object(s.a)(_),"down"),c=E(t);if(Object(s.a)(z.current).forEach((function(t,n){t.forEach((function(t,r){r in c&&n in c[r]&&0!==c[r][n]&&0!==t&&(e=!0)}))})),e)return void h("collision")}}),[_]);var B=function(e){var t=!1,c=!1;if(function(e){var t=Object(s.a)(e),c="no";return t.forEach((function(e,t){e.forEach((function(e,t){0===t&&0!==e&&(c="left"),9===t&&0!==e&&(c="right")}))})),c}(Object(s.a)(_))===e&&(t=!0),!t){var n=w(Object(s.a)(_),e),r=E(n);Object(s.a)(m).forEach((function(e,t){e.forEach((function(e,n){n in r&&t in r[n]&&0!==r[n][t]&&0!==e&&(c=!0)}))}))}t||c||I((function(t){var c=Object(s.a)(t);return w(c,e)}))};return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"Teris_score_board",children:["Tetris score: ",R]}),Object(u.jsxs)("div",{className:"Tetris_upper_container",children:[Object(u.jsx)(S,{squares:m}),Object(u.jsx)("div",{className:"above_Tetris_upper_container",children:Object(u.jsx)(C,{blocks:_})})]}),Object(u.jsx)("div",{className:"lower_container",children:i?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(f,{onClick:function(){return B("left")},children:"L"}),Object(u.jsx)(f,{onClick:function(){return B("down")},children:"D"}),Object(u.jsx)(f,{onClick:function(){return B("right")},children:"R"})]}):Object(u.jsx)(f,{onClick:function(){h("newBlock"),l(!0)},children:"start"})})]})},I=function(e){var t=e.score;return Object(u.jsxs)("div",{children:["Your total score: ",t]})},T=(c(18),function(e){var t=e.score,c=e.intervalIds;return Object(n.useEffect)((function(){c.current.forEach((function(e){return clearInterval(e)}))}),[c]),Object(u.jsxs)("div",{className:"home",children:[Object(u.jsx)("div",{children:"Please Choose a game from the Navbar!"}),Object(u.jsx)(I,{score:t})]})}),z=c.p+"static/media/logo.d8811d42.png",y=function(){return Object(u.jsx)("div",{className:"log",children:Object(u.jsx)("img",{src:z,alt:"logo",width:45,height:45})})},M=function(e){var t=e.onNavbarClick;return Object(u.jsx)("div",{children:[{page:"Home"},{page:"Tetris"},{page:"Sliding Puzzle"},{page:"Word Guess"}].map((function(e){var c=e.page;return Object(u.jsx)(f,{onClick:function(){return t(c)},children:c},c)}))})},R=function(e){var t=e.onHeaderClick;return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)(y,{}),Object(u.jsx)(M,{onNavbarClick:t})]})},A=(c(19),function(){return Object(u.jsx)("div",{className:"footer",children:Object(u.jsx)("p",{className:"copy-right",children:"\xa9 2023 DarrenDuan, Inc. All rights reserved."})})});var B=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)("Home"),i=Object(o.a)(a,2),s=i[0],l=i[1],f=Object(n.useRef)([]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(R,{onHeaderClick:function(e){l(e)}}),Object(u.jsxs)("div",{className:"page",children:["Home"===s&&Object(u.jsx)(T,{score:c,intervalIds:f}),"Sliding Puzzle"===s&&Object(u.jsx)(v,{setScore:r,intervalIds:f}),"Tetris"===s&&Object(u.jsx)(_,{setScore:r,intervalIds:f}),"Word Guess"===s&&Object(u.jsx)(d,{setScore:r,intervalIds:f})]}),Object(u.jsx)(A,{})]})};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(B,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.03e0e67d.chunk.js.map