let links = [];

function getLinks() {
    axios
        .get("/userlinks")
        .then(res => { console.log( res.data[0]);
                        links = res.data;
                        showData();
        })
        .catch((err) => console.error(err));
    //console.log(links[0]);
}

function showData() {
    table = document.querySelector("#links > ul");
    table.innerHTML = '';
    console.log(links[0].link)
    for (let i = 0; i < links.length; i++) {
    table.innerHTML +=`<li>Destino: ${links[i].url} Link: ${links[i].link}</li>`;
    }
    
}

getLinks();

