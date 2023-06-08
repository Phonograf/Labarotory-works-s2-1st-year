//Техническая зона
(function () {console.log = function (message) {postMessage(message);}})(); async function prompt(msg) {postMessage(`|prompt|${msg}`);let value;var promise = new Promise((resolve, reject) => {onmessage = function nagaf(e) {if (e.data) {resolve(e.data);}};});return promise.then(result => value = result);}
//Основная зона
function Rec(a,b) {
    //в Pascal "i := 1 to 5 будет означать выполнение 5 раз, поэтому знак <=" 
    let temp = "";
    for (let index = 1; index <= a; index++) {
        temp += "*"
    }
    console.log(temp);
    if (b>0) {
        Rec(b,Math.floor(a/b));
    }
    console.log(a+b);
}
Rec(24,5);