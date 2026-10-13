// const h1 = document.createElement("h1");
// h1.textContent = "Home";
// export const loadHome = h1;


import image from "./images/bir.jpg";
const content = document.querySelector("#content");

function mainCard() {
  const div = document.createElement("div"); // the outer div
  const div2 = document.createElement("div"); // div for the feature dish
  div2.classList.add("homeDiv");
  // div2 will be responsible for styling the display
  // Since all the dish info sit inside it
  const h1 = document.createElement("h1"); // will append to div2
  h1.textContent = "FEATURE DISHES";
  const dish2 = innerCard();
  const dish3 = innerCard2();
  const dish4 = innerCard();

  div2.append(h1, dish2, dish3, dish4);

  content.appendChild(div2);
}

function innerCard() {
  const btn = document.createElement("button");
  btn.textContent = "ORDER";
  const price = document.createElement("h3");
  price.textContent = "₹250";
  const para = document.createElement("p");
  para.textContent = `Biryani is one of the most popular rice dishes & traditionally it is cooked adapting the process of dum pukht, menaing "steam cooked over low fire".`;
  const dish = document.createElement("h2");
  dish.textContent = "Chicken Biryani";
  const img = document.createElement("img");
  img.src = image;

  const dish1 = document.createElement("div");
  dish1.append(img, dish, para, price, btn);

  return dish1;
}

function innerCard2() {
  const btn = document.createElement("button");
  btn.textContent = "ORDER";
  const price = document.createElement("h3");
  price.textContent = "₹250";
  const para = document.createElement("p");
  para.textContent = `Biryani is one of the most popular rice dishes & traditionally it is cooked adapting the process of dum pukht, menaing "steam cooked over low fire".`;
  const dish = document.createElement("h2");
  dish.textContent = "Chicken Biryani";
  const img = document.createElement("img");
  img.src = image;

  const dish1 = document.createElement("div");
  dish1.append(img, dish, para, price, btn);

  return dish1;
}

export const loadHome = mainCard;