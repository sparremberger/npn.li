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
    const x = document.querySelector("#header-links > ul:nth-child(1)");
    const y = document.querySelector("#header-links > ul:nth-child(2)");
    
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display = "none";
    } else {
      x.style.display = "block";
      y.style.display = "block";
      console.log("blocou");
    }
  } 


