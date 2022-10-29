const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open")
}

