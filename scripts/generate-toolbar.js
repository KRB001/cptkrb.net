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


const spacers = 5;

// parse widgets json
let widgets = JSON.parse(loadFile("/toolbarWidgets.json")).widgets

// create toolbar object
let toolbarList = document.createElement('ul');
let toolbar = document.createElement('div');
toolbar.appendChild(toolbarList);
toolbar.setAttribute("class", "toolbar");

// create logo widget and add it to toolbar
let logoWidget = document.createElement("li");
let logo = document.createElement('img');
logoWidget.appendChild(logo);
logo.setAttribute("src", "/resources/site_logo.webp");
logo.setAttribute("style", "width:100%; max-width: 100px");
logoWidget.setAttribute("class", "no-hover");
toolbarList.appendChild(logoWidget);

// append elements from toolbarWidgets.json
for (let i = 0; i < widgets.length; i++){

    // create widget object
    let widget = document.createElement("li");
    let widgetContent = document.createElement("p");
    widgetContent.innerText = widgets[i].name;

    // make widget an <a> if json contains a path for them
    if (widgets[i].path !== ""){
        let widgetLink = document.createElement("a");
        widgetLink.setAttribute("href", widgets[i].path);
        widgetLink.appendChild(widgetContent)
        widget.appendChild(widgetLink)
    }
    else {
        widget.appendChild(widgetContent);
    }

    // generate dropdown if widget has subwidgets
    if (widgets[i].subwidgets.length > 0) {
        let dropdown = document.createElement("div");
        let dropdownList = document.createElement("ul");
        dropdown.appendChild(dropdownList);
        dropdown.setAttribute("class", "dropdown");

        // append each dropdown entry
        for (let j = 0; j < widgets[i].subwidgets.length; j++) {
            let subwidget = document.createElement("li");
            let subwidgetLink = document.createElement("a");
            let subwidgetContent = document.createElement("p");
            subwidgetContent.innerText = widgets[i].subwidgets[j].name;
            subwidgetLink.setAttribute("href", widgets[i].subwidgets[j].path)
            subwidgetLink.appendChild(subwidgetContent);
            subwidget.appendChild(subwidgetLink);
            dropdownList.appendChild(subwidget);
        }

        // set offset of dropdown so it lines up with widget
        let offset = "left: " + ((100 / (widgets.length + spacers + 1)) * (i + 1)).toString() + "%;"
        dropdown.setAttribute("style", offset);

        widget.appendChild(dropdown);
    }

    // append to toolbar
    toolbarList.appendChild(widget);

}

// append empty space for toolbar aesthetics
for (let i = 0; i < spacers; i++){
    let spacer = document.createElement("li");
    spacer.setAttribute("class", "spacer no-hover")
    toolbarList.appendChild(spacer);
}

try {
    document.getElementsByClassName("with-toolbar").item(0).appendChild(toolbar);
} catch (TypeError) {

}
