import "./style.css"

import { loadContact } from "./about.js";
import { loadMenu } from "./menu.js";
import { loadHome } from "./home.js";
// alert('hello');
const cnt = document.querySelector("#content");
const btns = document.querySelectorAll("button");

btns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    console.log(e.target.textContent);
    if (e.target.textContent === 'Home') {
      loadMenu.remove();
      loadContact.remove()
      cnt.appendChild(loadHome);
    } else if (e.target.textContent === 'Menu') {
      loadHome.remove()
      loadContact.remove()
      cnt.appendChild(loadMenu);
    } else {
      loadHome.remove();
      loadMenu.remove();
      cnt.appendChild(loadContact);
    }
  })
})

console.log("plan2");

// cnt.appendChild(loadContact);
// cnt.appendChild(loadMenu);
// cnt.appendChild(loadHome);


