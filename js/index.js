function encurtar() {
    const url = document.querySelector("#url");
    axios
        .post("/encurtar", {
            url: `${url.value}`,
        })
        .then((res) => showLink(res))
        .catch((err) => console.error(err));
}

function showLink(res) {
    console.log(res.data.url);
    console.log(res.data.link);
    element = document.querySelector("#resposta");
    element.innerHTML += `<div>Site original: ${res.data.url}
     - Link curto: ${res.data.link}
    <div>`;


}

function hamburgerMenu() {
    const x = document.querySelector("#header-links");

    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";

        console.log("blocou");
    }
}
