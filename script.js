"use strict";

let navigation = document.getElementById("navBar");
let burger = document.getElementById("burgerBar");

burger.addEventListener("click", function () {
  navigation.classList.toggle("activeNav");
});

// . . .

function ajax() {
  let request = new XMLHttpRequest();
  request.open("GEt", "https://reqres.in/api/unknown");

  request.addEventListener("load", function () {
    let response = this.responseText;
    let responseJS = JSON.parse(response);
    console.log(responseJS);

    let ul = document.createElement("ul");
    let li = document.createElement("li");
    li.textContent = responseJS.data[2].name;
    li.textContent = responseJS.data[0].color;

    ul.appendChild(li);

    document.getElementById("info").appendChild(ul);
  });

  request.send();
}

ajax();
