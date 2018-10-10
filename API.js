const baseURL = "http://www.songsterr.com/a/ra/songs.json?pattern="
let url;

const sTitle = document.querySelector('.song-title');
const searchForm = document.querySelector('form');
const subBtn = document.querySelector('.submit');
const section = document.querySelector('.results')

searchForm.addEventListener('submit', fetchResults);

function fetchResults(e){
    let searchTitle = sTitle.value.split(' ').join('+').concat();
    e.preventDefault();
    url = baseURL +  searchTitle;
    console.log(url);
        fetch(url)
            .then (function(result){
                return result.json();
            })
            .then (function(json){
                console.log(json);
                displayResults(json);
            });
}

function displayResults(json){
    while(section.firstChild){
        section.removeChild(section.firstChild);
    }
    console.log(json);
    let tabs = json;

    if(tabs.length === 0){
        alert("I can't help you stomp your feet to this jam!")
    } else {
        for(let i = 0; i < tabs.length; i++){
            let tab = document.createElement('span');
            let songNom = document.createElement('h4');
            let link = document.createElement('a');
            let clearPage = document.createElement('div');

            let current = tabs[i];
            
            link.href = current.web_url;
            link.textContent = current.id;

            for(let doof = 0; doof < current.length; doof++){
                let span = document.createElement('span');
                span.textContent += current[doof].value + ' ';
                songNom.appendChild(span);
            }

            
            
            clearPage.setAttribute('class', 'clear_page');
            
            tab.appendChild(link);
            tab.appendChild(clearPage);
            section.appendChild(tab);
        }
    }
};



