//Техническая зона
(function () {console.log = function (message) {postMessage(message);}})(); async function prompt(msg) {postMessage(`|prompt|${msg}`);let value;var promise = new Promise((resolve, reject) => {onmessage = function nagaf(e) {if (e.data) {resolve(e.data);}};});return promise.then(result => value = result);}
//Основная зона
//в JS нет процедур, здесь LexicalEnvironment. Поэтому 2 способа: перебор массива или передача массива, удаляя посчитанное с каждым шагом
let a = Array.from({length: 20}, () => Math.floor(Math.random() * 40)); //Клетка: 1-40
console.log(a);
//1 способ - перебор (некий цикл)
function calculateDirectly(elem,sum) {
    //массив a всё равно видно отсюда
    sum = sum + Number(a[elem]); 
    if (elem == 0){console.log(sum);return sum} ;
    calculateDirectly(elem-1,sum);
}
(calculateDirectly(a.length-1,0));

//2 способ - протаскивание массива
function calcwithDedicatedMas(mas) {
    if(mas.length == 1)return +mas[0];
    return  mas[0]+calcwithDedicatedMas(mas.slice(1));
}
console.log(calcwithDedicatedMas(a));