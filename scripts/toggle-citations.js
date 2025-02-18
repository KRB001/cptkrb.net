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
    }
    else {
        state = "none"
        citationButton.style.color = "yellow"
    }
}