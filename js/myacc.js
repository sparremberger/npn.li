let links = [];
let username = "q";

function getLinks() {
    axios
        .get("/userlinks")
        .then((res) => {
            links = res.data;
            showData();
        })
        .catch((err) => console.error(err));

}

function getUsername() {
    axios
    .get("/autenticar")
    .then((res) => {
        username = res.data;
        console.log(username);
        updateName();
        
    })
    .catch((err) => console.error(err));

}

function showData() {
    table = document.querySelector("#links > ul");
    table.innerHTML = "";
    for (let i = 0; i < links.length; i++) {
        table.innerHTML += `<li><a href="http://npn.li/${links[i].link}">npn.li/${links[i].link}</a>  ${links[i].url} </li>`;
    }
}

function updateName() {
    document.querySelector("body > div.dashboard > h4").innerHTML = `Bem vindo, ${username}`;
}

function home() {
    document.location.href="/";
}

function sair() {
    console.log("saiu");
    document.cookie = "access_token=kek";
}

function init() {
    getUsername();
    getLinks();
}

init();
