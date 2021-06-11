function encurtar() {
    const url = document.querySelector("#url");
    axios
        .post("/encurtar", {
            url: `${url.value}`,
        })
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
}

function showLinks() {
    const x = document.querySelector("#header-links");

    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";

        console.log("blocou");
    }
}
