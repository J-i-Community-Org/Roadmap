"use strict";

const postBtn = document.querySelector(".post-btn");
const header = document.querySelector("header");
const main = document.querySelector(".main");

function generateCode(codeText, codeClassesName = ["default-resource"]) {
  let code = document.createElement("code");
  code.innerHTML = `<div>${codeText}</div>`;
  code.classList.add("default-resource");
  code.classList.add(...codeClassesName);
  main.appendChild(code);
}

generateCode("hey asdf and chase and snake are cool", ["blue", "large"]);
