"use strict";
let imgHover1 = document.querySelector("img.img-script1");
imgHover1.addEventListener("mouseover", function () {
  let pText = document.querySelector("p.text1");
  pText.innerHTML = "<p> بلنچینگ دندان </p>";
  pText.style.background = "blue";
  pText.style.color = "white";
  pText.style.textAlign = "center";
  pText.style.borderRadius = "20px";
  pText.style.marginTop = "20px";
  pText.style.transition = ".5s";
});

let imgHover2 = document.querySelector("img.img-script2");
imgHover2.addEventListener("mouseover", function () {
  let pText = document.querySelector("p.text2");
  pText.innerHTML = "<p> اصلاح طرح لبخند</p>";
  pText.style.background = "#6610f2";
  pText.style.color = "white";
  pText.style.textAlign = "center";
  pText.style.borderRadius = "20px";
  pText.style.marginTop = "20px";
  pText.style.transition = ".5s";
});

let imgHover3 = document.querySelector("img.img-script3");
imgHover3.addEventListener("mouseover", function () {
  let pText = document.querySelector("p.text3");
  pText.innerHTML = "<p>ایمپلنت دندان</p>";
  pText.style.background = "blue";
  pText.style.color = "white";
  pText.style.textAlign = "center";
  pText.style.borderRadius = "20px";
  pText.style.marginTop = "20px";
  pText.style.transition = ".5s";
});
let imgHover4 = document.querySelector("img.img-script4");
imgHover4.addEventListener("mouseover", function () {
  let pText = document.querySelector("p.text4");
  pText.innerHTML = "<p>جرم گیری دندان </p>";
  pText.style.background = "#6610f2";
  pText.style.color = "white";
  pText.style.textAlign = "center";
  pText.style.borderRadius = "20px";
  pText.style.marginTop = "20px";
  pText.style.transition = ".5s";
});