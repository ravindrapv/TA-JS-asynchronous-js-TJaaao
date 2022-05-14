let userName = document.querySelector("h2");
let avathar = document.querySelector("img");
let fallower = document.querySelector("p");
let fallowing = document.querySelector("h3");
let input = document.querySelector("input");

function CreatUi(data) {
  avathar.src = data.avatar_url;
  userName.innerText = data.userName;
  fallower.innerText = `following: ${data.fallower}`;
  fallowing.innerText = `falloewr: ${data.fallowing}`;
}

function handelChange() {
  if (event.keyCode === 13) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET",`https://api.github.com/user/${event.target.value}`);
    xhr.onload = function () {
      let userData = JSON.parse(xhr.response);
      CreatUi(userData);
    };
    xhr.onerror = function () {
      console.log("somthing went wrong");
    };
    xhr.send();
    event.target.value = '';
  }
}


input.addEventListener("keyup", handelChange);
