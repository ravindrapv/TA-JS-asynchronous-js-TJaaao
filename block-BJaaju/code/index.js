const input = document.querySelector("input");
const body = document.querySelector("body");
const img = document.querySelectorAll('img');
const div = document.querySelector('div');
const box = document.querySelector('.box');



function handelChange(event){
    if (event.keyCode === 13 ){
    let XHR = new XMLHttpRequest();
    let keyWord = event.target.value.toLowerCase();
XHR.open('GET',`https://api.unsplash.com/search/photos?query=${keyWord}&client_id=ilGa2_Ql0bDszy8XXGlQ8RMxdLT5ZyfU4FFx0AbtM3c`);

XHR.onload = function () {
    let imgData = JSON.parse(XHR.response);
    console.log(imgData)
    data = [imgData];
   
    console.log(data[0].results)
    let arr = [];
    data[0].results.forEach((ele) => {
        console.log(ele.urls.small);
        arr.push(ele.urls.small);   
    });
    arr.forEach((v)=>{
        box.style.padding = "30px";
        div.append(box);
        img.style.height = "300px";
        img.style.width = "300px";
        img.src = v;
        box.append(img);
    })
    console.log(arr);
};
XHR.onerror = function () {
    console.log("FUCKING!!! Wrong");
};

 XHR.send();
 event.target.value = " ";
 div.innerHTML = " ";
 }
}

input.addEventListener('keyup',handelChange);
console.log("script is working!!!")