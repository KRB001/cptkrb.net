let state = "none"
citationButton = document.getElementById("citation-toggle")
citationButton.addEventListener("click", toggleCitations)

function toggleCitations() {
    let citations = document.getElementsByClassName('citation')
    for (let n = 0; n < citations.length; n++){
        citations.item(n).style.display = state
    }
    if (state === "none"){
        state = "initial"
        citationButton.style.color = "red"
        citationButton.style.border = "dotted white 2px"
        citationButton.innerText = "[OFF]"
    }
    else {
        state = "none"
        citationButton.style.color = "yellow"
        citationButton.style.border = "solid white 2px"
        citationButton.innerText = "[ON]"
    }
}