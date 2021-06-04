function encurtar() {
    const url = document.querySelector("#url");
    axios
        .post("/encurtar", {
            url: `${url.value}`,
        })
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
}


