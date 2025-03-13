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

// parse updates json
let updates = JSON.parse(loadFile("/sitedata/siteUpdates.json"));

// fetch box that holds the updates (duh)
let updatesBox = document.getElementById("updates-box");

for(let i = updates.length - 1; i >= 0; i--){

    let date = document.createElement("p");
    date.innerText = updates[i].date;
    date.setAttribute("class", "update-date");

    let content = document.createElement("p");
    content.innerText = updates[i].content;
    content.setAttribute("class", "update-content");

    updatesBox.appendChild(date);
    updatesBox.appendChild(content);
}