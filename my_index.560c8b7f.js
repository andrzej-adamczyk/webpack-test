!function(e){var o={};function n(t){if(o[t])return o[t].exports;var c=o[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=o,n.d=function(e,o,t){n.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,o){if(1&o&&(e=n(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var c in e)n.d(t,c,function(o){return e[o]}.bind(null,c));return t},n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},n.p="",n(n.s=138)}({138:function(e,o,n){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=document.querySelector("h1");function l(e){var o=7*e;return console.log("Dostałem ".concat(e)),console.log(o),"Dostałem ".concat(e*e)}console.log(c),document.querySelector(".empty__element").innerHTML="***Tekst wygenerowany przez Java Script***",function(e,o){console.log("Cześć ".concat(e," ").concat(o,", masz ").concat(30," lat"))}("Ada","Adam"),l(7);var a=l(30);console.log(a),myElement="empty__fillContent",myContent="***Element uzupełniony przez funkcje JS fillContent()***",myElement,myContent,document.querySelector(".".concat(myElement)).innerHTML=myContent,myElement="empty__updateContent",myContent="***Element nadpisany przez funkcje JS updateContent()***";myElement,myContent,document.querySelector(".".concat(myElement)).innerHTML=myContent;var r={diameter:12e4,fire:function(e){console.log("".concat(e," destroyed 💥"))},isOperating:!0,levels:357,name:"Death Star",population:1e4,isStrong:!0,commander:{name:"Adam",age:20}};console.log(r.commander.age),console.log(console),console.log(t(r.commander.name)),r.fire("deathStar");console.log(r.name);var s;s="population",console.log("Twoja własność to ".concat(s," a jej wartość to ").concat(r[s])),console.log(r.population),console.log(r.population),console.log(r.diameter),console.log(r.diameter);var i={name:"Maciek",age:32,address:{street:"Mazowiecka",city:"Lublin"}},u={name:"Adam",age:32,address:{street:i.address.street,city:i.address.city}};console.log(u.age),i.age=31,u.age=35,console.log(u),console.log(i);var g=i;console.log(i),console.log(g),i.age=1200,console.log(i),console.log(g);var d={name:"Steve",age:i.age};switch(console.log(d),d.age=23,console.log(d),console.log(i),console.log(u),console.log(i),i.address.city="Szczecin",console.log(u.address.city),console.log(i.address.city),console.log("Java to nie Java script"),i.age>g.age?console.log("Człowiek 1 jest starszy niż człowiek 2"):(i.age=g.age)?console.log("Człowiek 2 jest w tym samym wieku co człowiek 1"):console.log("Człowiek 2 jest starszy niż człowiek 1"),i.age||console.log(t([])),i.age){case 4:console.log("4");break;case 1:console.log("1");break;default:console.log("console.log.humanOne.age")}var m={name:"Maciek"};console.log(m),console.log("Test JS");var y=[]+[];console.log("wynik operacji [] + [] to"+y),console.log("typ danych wyniku[] + [] to "+t(y));var p=[]+{};console.log("wynik operacji [] + {} to "+p),console.log("typ danych wyniku [] + {} to "+p);var f={}+[];console.log("wynik operacji {} + [] to "+f),console.log("typ danych wyniku {} + [] to "+t(f));var S={}+{};console.log("wynik operacji {} + {} to "+S),console.log("typ danych wyniku {} + {} to "+t(S));var v=document.querySelector(".action--js");console.log(v),v.addEventListener("click",(function(){var e=document.querySelector(".header__JS--events");e.innerHTML="Edytowany nagłówek 'JS:Eventy'",e.classList.add("JS--class")}));var _=document.querySelector(".action--js_restore"),b=document.getElementsByClassName("header__JS--events")[0].innerHTML;console.log(b),console.log(_),_.addEventListener("click",(function(){var e=document.querySelector(".header__JS--events");e.innerHTML=b,e.classList.remove("JS--class")})),document.querySelector(".action--js__addClass").addEventListener("click",(function(){document.querySelector(".header__JS--hamburger").classList.add("JS--class-hamburger")})),document.querySelector(".action--js__removeClass").addEventListener("click",(function(){document.querySelector(".header__JS--hamburger").classList.remove("JS--class-hamburger")}));var k=document.querySelector(".action--js__toggleClass");k.addEventListener("click",(function(){document.querySelector(".header__JS--hamburger").classList.toggle("JS--class-hamburger__toggle")}));document.querySelector(".action--js__containsClass");k.addEventListener("click",(function(){var e=document.querySelector(".header__JS--hamburger");console.log(e.classList.contains("JS--class-hamburger__toggle"))})),document.documentElement.style.setProperty("--gay","yellow");var j=document.querySelector(".hamburger--js");console.log(j),j.addEventListener("click",(function(){document.querySelector(".navigation--js").classList.toggle("navigation--open")}))}});