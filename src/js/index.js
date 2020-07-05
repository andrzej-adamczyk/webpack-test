import "../scss/main.scss";

import moment from "moment";

const fromNow = moment().startOf("day").fromNow();

const stringFromNow = String(fromNow);

console.log(typeof stringFromNow);

console.log(stringFromNow);

document.getElementById("moment").innerHTML = stringFromNow;
// document.getElementById("moment").innerHTML = FromNow;

// document.getElementById("moment").innerHTML = 1 + 2;

// import "scripts.js";

// import "scripts_links.js";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("HELLO 🚀");

document.cookie = name = "andrzej";

console.log(localStorage.getItem("human"));

// console.log(localStorage.removeItem("human"));

localStorage.setItem("human", { name: "adam" });

console.log(JSON.stringify({ name: "adam" }));

localStorage.setItem("nowyKlucz", JSON.stringify({ name: "adam" }));

const myResult = localStorage.getItem("nowyKlucz");

console.log(JSON.parse(myResult));

const myNewObject = JSON.parse(myResult);

myNewObject.newProperty = "hi";

console.log(myNewObject);

sessionStorage.setItem("nowyKluczSS", JSON.stringify({ nazwa: "SS" }));

const mySS = sessionStorage.getItem("nowyKluczSS");

console.log(mySS);

const entry = localStorage.getItem("entry");

console.log(entry);

let result = "";

if (entry) {
  console.log(`wartość entry: ${entry}`);
  result = entry;
}

const entryInput = document.querySelector(".entry--js");
entryInput.value = result;

const button = document.querySelector(".button--js");

console.log(button);

button.addEventListener("click", () => {
  localStorage.setItem("entry", entryInput.value);
});
