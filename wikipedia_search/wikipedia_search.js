let searchResults = document.getElementById("searchResults");
let searchInput = document.getElementById("searchInput");
let spinner = document.getElementById("spinner");
let url = "https://apis.ccbp.in/wiki-search?search=";

function createAndAppendResult(result) {
    let container = document.createElement("div");
    container.classList.add("result-item");
    searchResults.appendChild(container);

    let heading = document.createElement("a");
    heading.textContent = result.title;
    heading.href = result.link;
    heading.target = "_blank";
    heading.classList.add("result-title");
    container.appendChild(heading);

    container.appendChild(document.createElement("br"));

    let link = document.createElement("a");
    link.textContent = result.link;
    link.href = result.link;
    link.target = "_blank";
    link.classList.add("result-url");
    container.appendChild(link);

    container.appendChild(document.createElement("br"));

    let description = document.createElement("p");
    description.textContent = result.description;
    description.classList.add("link-description");
    container.appendChild(description);
}

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        spinner.classList.toggle("d-none");
        fetch(url + event.target.value)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                spinner.classList.toggle("d-none");
                let results = jsonData.search_results;
                for (let result of results) {
                    createAndAppendResult(result);
                }
            });
    }
});