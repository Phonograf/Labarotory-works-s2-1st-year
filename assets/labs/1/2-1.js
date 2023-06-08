//Техническая зона
(function () {console.log = function (message) {postMessage(message);}})(); async function prompt(msg) {postMessage(`|prompt|${msg}`);let value;var promise = new Promise((resolve, reject) => {onmessage = function nagaf(e) {if (e.data) {resolve(e.data);}};});return promise.then(result => value = result);}
//Основная зона
function sumDigits(n) {
    n = `${n}`;
    if (n.length == 1) return +n;
    return +n[0] + sumDigits(n.slice(1));
}
function numDigits(n,c) {
    n = `${n}`;
    if (n.length == 0) return 0;c++;
    if (n.length == 1) {return String(c);}else{return numDigits(n.slice(1),c)};
}
async function main() {
    console.log(sumDigits(await prompt("Введите натуральное число для подпункта а")));
    console.log(numDigits(await prompt("Введите натуральное число для подпункта б"),0));
}
main();