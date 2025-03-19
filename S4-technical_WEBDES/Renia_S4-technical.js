document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");
    const mainMenuButton = document.querySelector(".main-menu");

    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            const restaurantName = this.querySelector(".menu-title").textContent;
            const location = this.querySelector(".hover-info").textContent;
            const imageSrc = this.querySelector("img").src;

            showPopup(restaurantName, location, imageSrc);
        });
    });

    mainMenuButton.addEventListener("click", function () {
        closePopup();
    });
});

function showPopup(name, location, imageSrc) {
    // Close existing popup before opening a new one
    closePopup();

    let popup = document.createElement("div");
    popup.classList.add("popup-overlay");

    popup.innerHTML = `
        <div class="popup-content">
            <button class="close-btn">✖</button>
            <h2>${name}</h2>
            <p>${location}</p>
            <img src="${imageSrc}" alt="${name}">
        </div>
    `;

    document.body.appendChild(popup);

    // Attach event listener to the close button
    popup.querySelector(".close-btn").addEventListener("click", function () {
        closePopup();
    });
}

function closePopup() {
    document.querySelector(".popup-overlay")?.remove();
}
