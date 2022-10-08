"use strict";

const postBtn = document.querySelector(".post-btn");
const header = document.querySelector("header");

postBtn.addEventListener("click", createPost);

function createPost() {
  let post = document.createElement("div");
  post.innerText = "This is a post";
  document.body.appendChild(post);
}
