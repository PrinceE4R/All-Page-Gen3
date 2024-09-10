function drawDrawer() {
    let drawer = document.querySelector('.circular-drawer');
    if (drawer.style.transform === "translate(40%, -50%)") {
        drawer.style.transform = "translate(90%, -50%)";
    } else {
        drawer.style.transform = "translate(40%, -50%)";
    }
}