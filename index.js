"use strict";

const postBtn = document.querySelector(".post-btn");
const header = document.querySelector("header");
const main = document.querySelector(".main");

function generateCode(codeText, codeClassesName = ["default"]) {
  let code = document.createElement("code");
  code.innerHTML = `<div>${codeText}</div>`;
  code.classList.add(...codeClassesName);
  code.classList.add("default");
  main.appendChild(code);
}

generateCode("hey asdf and chase and snake are cool", ["blue", "large"]);
