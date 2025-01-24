const colorChangeButton = document.getElementById("color-change-btn");
const resumeContainer = document.querySelector(".resume-container");

const colorClasses = ["resume-color-1", "resume-color-2", "resume-color-3", "resume-color-4"];
let currentColorIndex = 0;

function changeResumeColor() {

    resumeContainer.classList.remove(colorClasses[currentColorIndex]);

    currentColorIndex = (currentColorIndex + 1) % colorClasses.length;

    resumeContainer.classList.add(colorClasses[currentColorIndex]);
}

colorChangeButton.addEventListener("click", changeResumeColor);
