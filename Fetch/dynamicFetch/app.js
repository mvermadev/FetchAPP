// log result on console panel:
function logResult(res){
    console.log(res);
}
function logError(error){
    console.log("There was a problem : ",error);
}

function responseValid(res){
    if (!res){
        throw Error(res.statusText);
    }
    return res;
}

// fetch text:
function readAsText(res){
    return res.text();
}

function showText(readAsText){
    const msg = document.getElementById('text');
    msg.querySelector('h3');
    msg.textContent = readAsText;
}

function fetchtext(){
    fetch('./examples/words.txt',{
        // method: 'HEAD'
    })
    .then(responseValid)
    .then(readAsText)
    .then(showText)
    .then(logResult)
    .catch(logError)
}

const textbtn = document.getElementById('txt');
textbtn.addEventListener('click', fetchtext);

// =============================================================

// fetch JSON:

function readAsJson(res){
    return res.json();
}

function showJson(readAsJson){
    const msg = document.getElementById('text');
    msg.querySelector('h3');
    msg.textContent = JSON.stringify(readAsJson);
}

function fetchJson(){
    fetch('./examples/animals.json',{
        // method:'HEAD'
    })
    .then(responseValid)
    .then(readAsJson)
    .then(showJson)
    .then(logResult)
    .catch(logError)
}

const jsonbtn = document.getElementById('json');
jsonbtn.addEventListener('click', fetchJson);

// ========================================================

// fetch IMAGE:
function readAsImage(res){
    return res.blob();
}

function showImage(readAsImage){
    const imgtag = document.getElementById('image');
    imgElem = document.createElement('img');
    imgtag.appendChild(imgElem);
    imgElem.style.width='50vw';
    const url = URL.createObjectURL(readAsImage);
    imgElem.src = url;
}

function fetchImg(){
    fetch('./examples/fetching.jpg')
    .then(responseValid)
    .then(readAsImage)
    .then(showImage)
    .then(logResult)
    .catch(logError)
}

const imgbtn = document.getElementById('img');
imgbtn.addEventListener('click',fetchImg);