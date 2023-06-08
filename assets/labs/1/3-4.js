//Техническая зона
(function () {console.log = function (message) {postMessage(message);}})(); async function prompt(msg) {postMessage(`|prompt|${msg}`);let value;var promise = new Promise((resolve, reject) => {onmessage = function nagaf(e) {if (e.data) {resolve(e.data);}};});return promise.then(result => value = result);}
//Основная зона
//какой-то массив предметов
let a = Array.from({length: 20}, () => Math.floor(Math.random() * 40 +1)); //Клетка: 0-40 
/*Основная идея:
1) Так как количество предметов в обеих кучах одинаково, +-уравновесить какой-то тяжёлый камень набором лёгких - не получится
2) Оптимальная стратегия: начать сортировку с малых камней и докладывать их в наименьшие кучи
3) А ещё надо использовать рекурсию хотя бы где-то*/

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
console.log(a);
a.sort(compareNumeric);

function calculateCurrent(mas) {
    if(mas.length == 1)return +mas[0];
    return  mas[0]+calculateCurrent(mas.slice(1));
}
var b =[0];
var c =[0];
function main() {
    if(a.length==0)return
    if (calculateCurrent(b)<=calculateCurrent(c)) {
        b.push(a[0]);
    }else{
        c.push(a[0])
    }
    a = a.slice(1);
    main();
}
main();
b = b.slice(1);
c = c.slice(1);

console.log(`b: ${b}`);
console.log(`c: ${c}`);
console.log(`Difference: ${Math.abs(calculateCurrent(b)-calculateCurrent(c))}`);