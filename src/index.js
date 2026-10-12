import "./style.css"
import image from "./images/intro.png";

import { loadContact } from "./about.js";
import { loadMenu } from "./menu.js";
import { loadHome } from "./home.js";

const cnt = document.querySelector("#content");
const btns = document.querySelectorAll("button");

btns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    console.log(e.target.textContent);
    if (e.target.textContent === 'Home') {
      cnt.replaceChildren();
      cnt.appendChild(loadHome);
    } else if (e.target.textContent === 'Menu') {
      cnt.replaceChildren();
      loadMenu();
    } else {
      cnt.replaceChildren();
      cnt.appendChild(loadContact);
    }
  })
})

const img = document.createElement("img");
img.src = image;

const head = document.querySelector("header");

head.appendChild(img);

console.log("plan2");


// cnt.appendChild(loadContact);
// cnt.appendChild(loadMenu);
// cnt.appendChild(loadHome);


