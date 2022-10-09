"use strict";

const postBtn = document.querySelector(".post-btn");
const header = document.querySelector("header");
const main = document.querySelector(".main");

let resourceTitle;
let resourceInformation;

function generateCode(
  resourceTitleText,
  resourceTitleClassesName = ["default-resource"],
  resourceInfo = "Default information please fill this.",
  resourceInfoClassesName = ["default-resource-info"]
) {
  resourceTitle = document.createElement("div");
  resourceInformation = document.createElement("p");
  resourceTitle.innerHTML = `${resourceTitleText}`;
  resourceInformation.innerHTML = `${resourceInfo}`;
  resourceTitle.classList.add("default-resource");
  resourceTitle.classList.add(...resourceTitleClassesName);
  resourceInformation.classList.add("default-resource-info");
  resourceInformation.classList.add(...resourceInfoClassesName);
  main.appendChild(resourceTitle);
  main.appendChild(resourceInformation);
}

generateCode(
  "HTML (Hyper Text Markup Language)",
  [],
  "HTML is a a very popular markup language used for web development.",
  []
);

generateCode(
  "CSS (Cascading Style Sheets)",
  ["blue", "medium"],
  "CSS is a a very popular markup language used for web development."[
    ("small", "lightblue")
  ]
);

generateCode(
  "Javascript",
  [],
  "Javascript is a a very popular markup language used for web development. It can be used for frontend and backend and is often used to make websites responsives instead of static.",
  []
);
