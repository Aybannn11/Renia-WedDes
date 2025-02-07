let previousBox = document.getElementById("previousBox");
let currentBox = document.getElementById("currentBox");
let isSwapped = false;

function animateBox(day, color) {
    let newBox = isSwapped ? previousBox : currentBox;
    let oldBox = isSwapped ? currentBox : previousBox;

    oldBox.style.transform = "translateY(-50px)";
    oldBox.style.opacity = "0";

    setTimeout(() => {
        newBox.style.opacity = "1";
        newBox.style.transform = "translateY(150px)";
        newBox.style.backgroundColor = color;
        newBox.style.borderColor = color;
        newBox.innerText = day;
    }, 500); 

    isSwapped = !isSwapped;
}
