// search
function search() {
  let search = document.getElementById("shurukuang");
  window.open("https://cn.bing.com/search?q=" + search.value);
}
function entersearch() {
  var event = window.event || arguments.callee.caller.arguments[0];
  if (event.keyCode == 13) {
    search();
  }
}

// navgation
const navgation = document.querySelector("#navgation");
const options_list = document.querySelector(".options-list");

navgation.addEventListener("click", function () {
  options_list.classList.toggle("active");
  navgation.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
});

// jishi
const jishiBtn = document.querySelector("#jishi");
const jishibox = document.querySelector(".jishibox");

// input
const input = document.querySelector("input");

// sousuo
const sousuo = document.querySelector("#sousuo");

// qingchu
const qingchu = document.querySelector("#qingchu");

jishiBtn.addEventListener("click", function () {
  jishibox.classList.toggle("active");
  jishiBtn.classList.toggle("active");
  input.classList.toggle("active");
  sousuo.classList.toggle("active");
  navgation.classList.toggle("active");
  qingchu.classList.toggle("active");
  jishibox.querySelector("a").addEventListener("click", function () {
    input.classList.remove("active");
    sousuo.classList.remove("active");
    navgation.classList.remove("active");
    qingchu.classList.remove("active");
  });
});

function jishi() {
  input.readOnly = true;
  input.placeholder = "";
}

function tosearch() {
  jishibox.querySelector("a").addEventListener("click", function () {
    input.classList.toggle("active");
    sousuo.classList.toggle("active");
    navgation.classList.toggle("active");
    qingchu.classList.toggle("active");
  });
}

function qing() {
  input.value = "";
  input.readOnly = false;
  input.classList.toggle("active");
  jishibox.classList.remove("active");
  jishiBtn.classList.toggle("active");
  sousuo.classList.toggle("active");
  navgation.classList.toggle("active");
  qingchu.classList.toggle("active");
}
