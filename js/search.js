window.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "Enter":
        search();
        break;
      default:
        return;
    }
}, true);

function search() {
    let box = document.getElementById("search");
    const url = "https://duckduckgo.com/?q=";
    const style = "&kz=1&kc=1&kj=%23323843&kx=%235294E2&k7=%23404552"; // https://duckduckgo.com/params
    let query = box.value;
    box.value = "";
    window.location.assign(url + query + style);
}