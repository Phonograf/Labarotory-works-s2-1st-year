//Техническая зона
(function () {console.log = function (message) {postMessage(message);}})(); async function prompt(msg) {postMessage(`|prompt|${msg}`);let value;var promise = new Promise((resolve, reject) => {onmessage = function nagaf(e) {if (e.data) {resolve(e.data);}};});return promise.then(result => value = result);}
//Основная зона
function getProgressionMember(init, step, member) {
	if (member == 1) {
		return init
	} else {
		return getProgressionMember(init, step, member - 1) + step
	}
}


async function main() {
    let tA = String(await prompt("Введите стартовое число, разность и N-й элемент. Разделите запятой, например: 12,2,3"));
    try {
        let res = getProgressionMember(Number(tA.split(",")[0]),Number(tA.split(",")[1]),Number(tA.split(",")[2]));
        console.log(`N-ный элемент: ${res}`)
        console.log((`sum: ${((Number(tA.split(",")[0]))+res)/2 * Number(tA.split(",")[2])}`));
    } catch (error) {
        console.log(error);
    }
}
main();