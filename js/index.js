function encurtar() {
    const url = document.querySelector("#url");
    console.log(url.value);
    axios
        .post("/encurtar", {
            url: `${url.value}`,
        })
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
}
