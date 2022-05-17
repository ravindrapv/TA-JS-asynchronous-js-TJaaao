const img = document.querySelector(".profile");
const userName = document.querySelector("h3");
const company = document.querySelector("p");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");
const input = document.querySelector("input");
const foll = document.querySelector("foll");
const body = document.querySelector('body');

function displayUI(data){
    img.src = data.avatar_url;
    userName.innerText = data.name;
    company.innerText = data.company;
    followers.innerText = `Followers: ${data.followers}`;
    following.innerText = `Following: ${data.following}`;
            
}

function handelChange(event){
    if (event.keyCode === 13 ){
        let XHR = new XMLHttpRequest();
       XHR.open('GET',`https://api.github.com/users/${event.target.value}`);
       XHR.onload = function(){
            let userData = JSON.parse(XHR.response);
            var arr = userData

            let fl = arr.followers_url;
            console.log(fl)
            
        let XHR1 = new XMLHttpRequest();
            XHR1.open('GET',`${fl}`);
            XHR1.onload = function(){
                let userFollow = JSON.parse(XHR1.response);
                console.log(userFollow);
                userFollow.forEach((e)=>{
                    console.log(e.login)
                    let rImg = document.createElement("img");
                    rImg.classList.add("round");
                    console.log(rImg)
                    rImg.src = e.avatar_url;
                    
                    body.append(rImg);
                })
                
        }
            XHR1.send();
            displayUI(userData);
        };
        XHR.onerror = function(){
            console.error('somthing went wrong');
        };
        XHR.send();
        event.target.value = '';
        
        
    }
}

input.addEventListener('keyup',handelChange);