async function prompt(msg) { postMessage(`|prompt|${msg}`); 
let crutch = 0; 
let value; 
var promise = new Promise((resolve, reject) => { 
    onmessage = function nagaf(e) { if (crutch > 0) { resolve(e.data); } crutch++; }; }); return promise.then(result => value = result); }