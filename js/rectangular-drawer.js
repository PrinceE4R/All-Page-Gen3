function drawDrawer2() {
    let drawer2 = document.querySelector('.rectangular-drawer');
    if (drawer2.style.transform === "translate(0%, -5%)") {
        drawer2.style.transform = "translate(-90%, -5%)";
    } else {
        drawer2.style.transform = "translate(0%, -5%)";
    }
}