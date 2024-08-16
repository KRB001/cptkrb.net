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

// load music files manifest from server
let manifest = loadFile("../music-files/manifest.txt");
let manifest_entries = manifest.split("\n");
for (let i = 0; i < manifest_entries.length; i++) {
    // create row and column elements for a given music file
    let row = document.createElement('li');
    let row_insert = document.createElement('ul');
    let name = document.createElement('li');
    let tags = document.createElement('li');
    let album = document.createElement('li');
    let date = document.createElement('li');
    let download = document.createElement('li');
    tags.style = "width:250px";
    album.style = "width:200px";
    date.style = "width:80px";
    download.style = "width:100px";


    // create inner elements for row information
    let name_insert = document.createElement('p');
    let tags_insert = document.createElement('p');
    let album_insert = document.createElement('p');
    let date_insert = document.createElement('p');
    let download_link = document.createElement('a');
    let download_button = document.createElement("button");

    // set values to inner elements
    name_insert.innerText = manifest_entries[i].split(",")[0];
    let song_tags = manifest_entries[i].split(",")[1].split("+");
    let song_tags_text = "";
    for (let n = 0; n < song_tags.length; n++){
        song_tags_text = song_tags_text + song_tags[n];
        if (n < song_tags.length - 1) {
            song_tags_text = song_tags_text + ", "
        }
    }
    tags_insert.innerText = song_tags_text;
    album_insert.innerText = manifest_entries[i].split(",")[2];
    date_insert.innerText = manifest_entries[i].split(",")[3];
    download_link.setAttribute("download", "");
    download_button.innerText = "DOWNLOAD";
    download_button.className = "download-button";
    download_link.href = "music-files/" + manifest_entries[i].split(", ")[4]

    // put it all together
    name.appendChild(name_insert);
    tags.appendChild(tags_insert);
    album.appendChild(album_insert);
    date.appendChild(date_insert);
    download_link.appendChild(download_button);
    download.appendChild(download_link);
    row_insert.appendChild(name);
    row_insert.appendChild(tags);
    row_insert.appendChild(album);
    row_insert.appendChild(date);
    row_insert.appendChild(download);
    row.appendChild(row_insert);

    // turbo row appender 5000
    document.getElementsByClassName('music_list').item(0).appendChild(row);
}