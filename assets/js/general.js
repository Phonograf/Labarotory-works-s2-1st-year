let task = document.getElementById("number");
let lab = document.getElementById("lab");
let launch = document.getElementById("launch");
let stackJS = "";

window.onload = function() { 
    //alert('Страница загружена');
    //Загрузить количество лабораторных работ
    async function httpGet(theUrl) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", theUrl, false); // false for synchronous request
        xmlHttp.send(null);
        return JSON.parse(xmlHttp.responseText);
    }
    async function psemain(path) {
        let reestr = {};
        reestr = await httpGet("assets/labs/reestr.json");
        document.getElementById("lab").innerHTML = "";
        for (let index = 0; index < reestr.labs.length; index++) {
            document.getElementById("lab").innerHTML += `<option value="${reestr.labs[index].number}">${reestr.labs[index].number}</option>`;
            let labreestr = await httpGet(`assets/labs/${reestr.labs[index].path}`);
            if (index == 0) {
                document.getElementById("number").innerHTML = "";
                for (let j = 0; j < labreestr.modules.length; j++) {
                    document.getElementById("number").innerHTML += `<optgroup id="${labreestr.modules[j].mname}" label="${labreestr.modules[j].mname}">`;
                    for (let i = 0; i < labreestr.modules[j].tasks.length; i++) {
                        document.getElementById("number").innerHTML += `<option value="${labreestr.modules[j].module}-${labreestr.modules[j].tasks[i].tnumber}" path="${labreestr.modules[j].tasks[i].path}">${labreestr.modules[j].tasks[i].tnumber}</option>`

                    }
                    document.getElementById("number").innerHTML += `</optgroup>`;
                }
            }
            
        }
    }
    psemain();
  };

async function loadtask(params) {
    (function () {
        var old = console.log;
        var logger = document.getElementById('log');
        console.log = function (message) {
            if (typeof message == 'object') {
                logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '\n';
            } else {
                logger.innerHTML += message + '\n';
            }
        }
    })();

    console.log(`Loading ${lab.value} - ${task.value}`);
    async function httpGet(theUrl) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", theUrl, false); // false for synchronous request
        xmlHttp.send(null);
        return JSON.parse(xmlHttp.responseText);
    }
    async function httpGetJS(theUrl) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", theUrl, false); // false for synchronous request
        xmlHttp.send(null);
        return xmlHttp.responseText;
    }
    //Выгрузка метаданных
    let reestr = {};
    reestr = await httpGet("assets/labs/reestr.json");
    let labreestr = await httpGet(`assets/labs/${reestr.labs[lab.value-1].path}`);
    let taska = labreestr.modules[task.value.split("-")[0]-1].tasks[task.value.split("-")[1]-1];
    //ссылки
    let link = `assets/labs/${reestr.labs[lab.value-1].pathshort}/${taska.path}`;
    document.getElementById("aa1").href = link;
    document.getElementById("aa2").href = link;
    //metainfo
    document.getElementById("metadata").value = `Лабораторная # ${lab.value} \n Модуль ${task.value.split("-")[0]} \n Задача ${task.value.split("-")[1]} \r\n Описание \n ${taska.taskdescription} \r\n Комментарий ${taska.status} -- ${taska.comment}`
    document.getElementById("task").innerHTML = taska.taskdescription + "<br>"+"<hr>" + taska.comment;
    //выгрузка скрипта
    stackJS = await httpGetJS(link);
    document.getElementById("code").innerHTML = stackJS;

    hljs.highlightAll();

    
}

lab.onclick = async function () {
    let w = lab.value;
    async function httpGet(theUrl) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", theUrl, false); // false for synchronous request
        xmlHttp.send(null);
        return JSON.parse(xmlHttp.responseText);
    }
        let reestr = {};
        reestr = await httpGet("assets/labs/reestr.json");
            let labreestr = await httpGet(`assets/labs/${reestr.labs[w-1].path}`);
            document.getElementById("number").innerHTML = "";
            for (let j = 0; j < labreestr.modules.length; j++) {
                document.getElementById("number").innerHTML +=`<optgroup id="${labreestr.modules[j].mname}" label="${labreestr.modules[j].mname}">`;
                for (let i = 0; i < labreestr.modules[j].tasks.length; i++) {
                    document.getElementById("number").innerHTML += `<option value="${labreestr.modules[j].module}-${labreestr.modules[j].tasks[i].tnumber}" path="${labreestr.modules[j].tasks[i].path}">${labreestr.modules[j].tasks[i].tnumber}</option>`
                    
                }
                document.getElementById("number").innerHTML +=`</optgroup>`;
            }


}

launch.onclick = async function () {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    var code = stackJS;
    try {
      s.appendChild(document.createTextNode(code));
      document.body.appendChild(s);
    } catch (e) {
      s.text = code;
      document.body.appendChild(s);
    }
}