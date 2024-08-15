/* thanks Dave Burton */

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

let manifest = loadFile("../music-files/manifest.txt");
let manifest_entries = manifest.split("\n");
for (let i = 0; i < manifest_entries.length; i++) {
    let row = document.createElement('li');
    let row_insert = document.createElement('ul');
    let name = document.createElement('li');
    let download = document.createElement('li');
    let name_insert = document.createElement('p');
    let download_insert = document.createElement('p');
    let download_link = document.createElement('a');

    download_link.setAttribute("download", "");
    download_link.innerText = "DOWNLOAD";
    download_link.href = "music-files/" + manifest_entries[i].split(", ")[1]
    name_insert.innerText = manifest_entries[i].split(",")[0];

    download_insert.appendChild(download_link);
    name.appendChild(name_insert);
    download.appendChild(download_insert);
    row_insert.appendChild(name);
    row_insert.appendChild(download);
    row.appendChild(row_insert);

    document.getElementsByClassName('music_list').item(0).appendChild(row);
}