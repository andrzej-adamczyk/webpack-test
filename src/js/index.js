import "../scss/main.scss";

import moment from "moment";

const fromNow = moment().startOf("day").fromNow();

const stringFromNow = String(fromNow);

console.log(typeof stringFromNow);

console.log(stringFromNow);

document.getElementById("moment").innerHTML =
  "New day started " + stringFromNow;
// document.getElementById("moment").innerHTML = FromNow;

// document.getElementById("moment").innerHTML = 1 + 2;

// import "scripts.js";

// import "scripts_links.js";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("HELLO 🚀");
