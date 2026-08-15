/* =========================================
   EXPLORE NOW BUTTON
========================================= */

function exploreNature() {

    document.getElementById("maps").scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================
   LEARN MORE BUTTON
========================================= */

function showMessage() {

    alert(
        "Welcome to Nature Explorer 🌿\n\n" +
        "Explore beautiful forests, mountains, lakes " +
        "and waterfalls around the world."
    );

}


/* =========================================
   MAP PLACE SELECTION
========================================= */

function selectPlace(place) {

    alert(
        "You selected: " + place + "\n\n" +
        "Map exploration feature will be added here."
    );

}


/* =========================================
   DARK MODE
========================================= */

function toggleDarkMode() {

    const checkbox = document.getElementById("darkMode");

    if (checkbox.checked) {

        document.body.classList.add("dark-mode");

        localStorage.setItem("darkMode", "enabled");

    } else {

        document.body.classList.remove("dark-mode");

        localStorage.setItem("darkMode", "disabled");

    }

}


/* =========================================
   NOTIFICATIONS
========================================= */

function toggleNotifications() {

    const checkbox =
        document.getElementById("notifications");

    if (checkbox.checked) {

        alert(
            "Notifications enabled 🔔"
        );

    } else {

        alert(
            "Notifications disabled 🔕"
        );

    }

}


/* =========================================
   LOAD SAVED DARK MODE
========================================= */

window.addEventListener("load", function () {

    const darkMode =
        localStorage.getItem("darkMode");

    const checkbox =
        document.getElementById("darkMode");


    if (darkMode === "enabled") {

        document.body.classList.add("dark-mode");

        checkbox.checked = true;

    }

});