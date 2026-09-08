
function schimbaMesaj() {
    let mesaj = document.getElementById("mesaj");

    if (mesaj.innerHTML === "") {
        mesaj.innerHTML = "Buna!";
    } else {
        mesaj.innerHTML = "";
    }
}
