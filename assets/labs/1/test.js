async function f1(){ 
    try {
        var worker = new Worker("/assets/labs/1/1-2.js");
        setTimeout(function () {
  try {
    throw new Error('error!');
  } catch (e) {
    console.error(e);
      worker.terminate();
  }
}, 1000)
        worker.postMessage("");
    } catch (error) {
        console.log(error)
    }finally{
        console.log('Блок финализации')
    }
}
f1();