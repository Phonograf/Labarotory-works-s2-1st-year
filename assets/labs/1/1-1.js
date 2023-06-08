//Техническая зона
(function () {console.log = function (message) {postMessage(message);}})(); async function prompt(msg) {postMessage(`|prompt|${msg}`);let value;var promise = new Promise((resolve, reject) => {onmessage = function nagaf(e) {if (e.data) {resolve(e.data);}};});return promise.then(result => value = result);}
//Основная зона
//Трассировка может быть выполнена как на бумаге, так и банальным console.log, что и будет сделано.
    function Pow(a, n, i) {
        console.log(i + ": a = " + a + "; n = " + n);
        if (n == 0) {
            return 1
        } else {
            if (n % 2 == 0) {
                return Pow(a * a, Math.floor(n/2), i + 1);
            } else {
                return Pow(a, n - 1, i + 1) * a;
            }
        }
    }
    console.log("fin: " + Pow(2, 11, 1));