const content = document.querySelector("#content");

import bir from "./images/bir.jpg";
const img = document.createElement("img");

img.src = bir;
img.classList.add("img");

function menu() {
  const hMenu = document.createElement("h1");
  hMenu.textContent = "Menu";
  hMenu.classList.add("hMenu");

  //where do we use this div ?
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menuDiv");

  content.appendChild(hMenu);

  content.appendChild(menuDiv);

  // const curry = template("curry", "chow", "maggi", "yummy", "lays");
  // const biryani = template("biryani", "beef bir", "goat bir", "plain bir");
  // const dessert = template("dessert", "white", "silver", "vanilla");
  // menuDiv.append(curry, biryani, dessert);

  const test = card();
  menuDiv.appendChild(test);

};

function template(n, n1, n2, n3, n4) {
  const c1 = document.createElement("div"); //main div

  c1.classList.add("c1");
  const cName = document.createElement("h2"); 
  cName.textContent = n;

  const subDiv = document.createElement("div"); //sub div for dishes

  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const p4 = document.createElement("p");

  const miniDiv = document.createElement("div"); // div to hold img and description of the dish

  miniDiv.classList.add("para");

  p1.classList.add("p");

  miniDiv.append(p1, img);

  p1.textContent = n1;
  p2.textContent = n2;
  p3.textContent = n3;
  p4.textContent = n4; 

  subDiv.append(miniDiv, p2, p3, p4);
  subDiv.classList.add("subDiv");
  c1.append(cName, subDiv);

  return c1;
}

function card() {
  const outerDiv = document.createElement("div");
  const innerDiv = document.createElement("div");

  const name = document.createElement("h2");
  const des = document.createElement("p");
  const image = document.createElement("img");
  const price = document.createElement("p");

  name.textContent = "Chicken Biryani";
  des.textContent = "The most loved chicken biryani, dish of the people";
  image.src = bir;
  price.textContent = "₹340"


  innerDiv.append(name, des, image, price);
  outerDiv.appendChild(innerDiv);
  return outerDiv;
}

export const loadMenu = menu;

//first we'll create a dynamic outer and inner card to hold our dish and info 

// the problem is how do i add unique images, with their respective

//append dish name, description, image and price to inner card

//well if we include only the dish name then our current template() is perfect

//an outer and inner card to hold the dish name, dish description, price and image

// maybe create 4 mini functions