let searchResults = document.getElementById("searchResults");
let savedResults = document.getElementById("savedResults");
let searchInput = document.getElementById("searchInput");
let spinner = document.getElementById("spinner");
let defineBtn = document.getElementById("defineBtn")
let url = "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=";
let results = [];
let mainIndex = 0;

//let savedResults = [];

function createResult(result) {

    let { word, definition,  sound_urls, permalink } = result;

    definition = definition.replaceAll('[', '').replaceAll(']', '');

    let soundUrl = null;

    if(sound_urls!==undefined && sound_urls.length > 0)
        soundUrl = sound_urls[0];

    let container = document.createElement('div');
    container.classList.add('d-flex', 'flex-column', 'align-items-start', 'flex-grow-1');

    let nameContainer = document.createElement('div');
    nameContainer.classList.add('d-flex', 'align-items-center');
    container.appendChild(nameContainer);

    let wordName = document.createElement('a');
    wordName.href = permalink;
    wordName.target = "_blank";
    wordName.textContent = word;
    wordName.classList.add('result-title', 'mr-2');
    nameContainer.appendChild(wordName);

    if(soundUrl!==null){

        let audioBtn = document.createElement('span');
        //audioBtn.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'bg-secondary');
        audioBtn.innerHTML = '<i class="fas fa-volume-up volume-icon"></i>';
        nameContainer.appendChild(audioBtn);

        let audio = document.createElement('audio');
        audio.classList.add('d-none');
        nameContainer.appendChild(audio);

        let source = document.createElement('source');
        source.src = soundUrl;
        source.type = `audio/${soundUrl.substring(soundUrl.lastIndexOf('.')+1)}`
        audio.appendChild(source);

        audioBtn.addEventListener('click', ()=>{audio.play();});
    }

    let definitionContent = document.createElement('p');
    definitionContent.textContent = definition;
    definitionContent.classList.add('link-description');
    
    container.appendChild(definitionContent);

    return container;

}

function updateResult(result) {

    if(result===undefined)
        return;

    const meaningElement = createResult(result);

    searchResults.textContent = "";
    searchResults.appendChild(meaningElement);

    let buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('d-flex', 'justify-content-end', 'align-self-end');
    searchResults.appendChild(buttonsContainer);


    let prev = document.createElement('button');
    prev.textContent = 'Previous';
    prev.classList.add('btn', 'btn-primary', 'btn-lg', 'mr-3');
    if(mainIndex===0)
        prev.classList.add('disabled');
    buttonsContainer.appendChild(prev);

    prev.addEventListener('click', ()=>{
        if(mainIndex>0){
            mainIndex-=1;        
            updateResult(results[mainIndex]);
        }
    })

    let next = document.createElement('button');
    next.textContent = 'Next';
    next.classList.add('btn', 'btn-warning', 'btn-lg');
    if(mainIndex===results.length-1)
        next.classList.add('disabled');
    buttonsContainer.appendChild(next);

    next.addEventListener('click', ()=>{
        if(mainIndex<results.length-1){
            mainIndex+=1;
            updateResult(results[mainIndex]);
        }
    })

}

function renderNoResults(){
    let heading = document.createElement('h3');
    heading.textContent = `Sorry, No results found for ${searchInput.value}`;
    heading.classList.add('display', 'text-center');
    searchResults.textContent = "";
    searchResults.appendChild(heading);
}

function getResultsFromApi(){
    searchResults.textContent = "";
    spinner.classList.toggle("d-none");
    fetch(url + searchInput.value, 
    {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "ac05d8f888mshb84ca6f231bb3e0p1e6543jsn71c28a0d8e75",
            "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com"
        }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        spinner.classList.toggle("d-none");
        searchResults.classList.remove('d-none');
        results = jsonData.list;
        console.log(results);
        if(results!==undefined && results.length>0)
            updateResult(results[mainIndex]);
        else
            renderNoResults();


    });
}

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        getResultsFromApi();
    }
});

defineBtn.addEventListener("click", ()=>{getResultsFromApi();});

