/* thanks Dave Burton :) */
function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status===200) {
        result = xmlhttp.responseText;
    }
    return result;
}

// random int generator cuz i dont want it in the main script
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


// parse splashes json
let splashes = JSON.parse(loadFile("/sitedata/splashes.json"));

let splashIndex = randInt(0, splashes.length);

let splashElement = document.getElementsByClassName("splash").item(0);

if(splashes[splashIndex].link !== ""){
    splashElement.innerText = "";

    link = document.createElement("a");
    link.setAttribute("href", splashes[splashIndex].link);
    link.setAttribute("target", "_blank");

    splashElement.appendChild(link);
    splashElement = link;
}

splashElement.innerText = splashes[splashIndex].content;

if(splashes[splashIndex].style !== ""){
    splashElement.setAttribute("style", splashes[splashIndex].style);
}

if(splashes[splashIndex].class !== ""){
    splashElement.setAttribute("class", splashes[splashIndex].class);
}

