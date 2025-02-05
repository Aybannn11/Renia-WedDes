function animateBox(day, color) {
    let box = document.getElementById("animatedBox");

    box.style.opacity = "1";
    box.style.transform = "translateY(0px)";
    box.style.backgroundColor = "white";
    box.innerText = day;

    setTimeout(() => {
        box.style.transform = "translateY(150px)";
        box.style.backgroundColor = color;
    }, 100);
}