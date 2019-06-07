
// 1. set up HTTP request
// 2. setup listener to process request state changes
//     1. check if request is complete
//     2. check if status code is in the 200
// 3. open the request
// 4. send it

let xhr = new XMLHttpRequest(); 

xhr.onreadystatechange = function () {
    
    if(xhr.readyState !== 4) return;

    if(xhr.status >= 200 && xhr.status < 300) {
        console.log(JSON.parse(xhr.responseText));
    } else {
        console.log("the request failed");
    }

};

xhr.open("GET", "http://ron-swanson-quotes.herokuapp.com/v2/quotes");
xhr.send();