function fatchData(url) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.onload = function(){
        console.log(JSON.parse(xhr.response));
    };
    xhr.onerror = function(){
        console.error("somthing went wrong");
    }
    xhr.send();
}

fatchData('https://api.github.com/users');