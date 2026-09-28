/* =========================================================
   WAVEGRAM
   PROFILE.JS
========================================================= */


/* =========================================================
   SECTION 1
   PAGE NAVIGATION
========================================================= */

const profileNavHome =
    document.getElementById("profileNavHome");

const profileNavSearch =
    document.getElementById("profileNavSearch");

const profileNavMessage =
    document.getElementById("profileNavMessage");

const profileNavReel =
    document.getElementById("profileNavReel");

const profileNavProfile =
    document.getElementById("profileNavProfile");

/* =========================================================
   SECTION 2
   POST UPLOAD BUTTON
========================================================= */

const profilePlusButton =
    document.getElementById("profilePlusButton");


if (profilePlusButton) {

    profilePlusButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            window.location.href =
                "post-upload.html";

        }
    );

}

/* =========================================================
   SECTION 3
   NAVIGATION FUNCTION
========================================================= */

function profileOpenPage(page) {

    window.location.href = page;

}


/* =========================================================
   SECTION 4
   HOME
========================================================= */

if (profileNavHome) {

    profileNavHome.onclick = function (event) {

        event.preventDefault();

        profileOpenPage("home.html");

    };

}


/* =========================================================
   SECTION 5
   SEARCH
========================================================= */

if (profileNavSearch) {

    profileNavSearch.onclick = function (event) {

        event.preventDefault();

        profileOpenPage("search.html");

    };

}


/* =========================================================
   SECTION 6
   MESSAGE
========================================================= */

if (profileNavMessage) {

    profileNavMessage.onclick = function (event) {

        event.preventDefault();

        profileOpenPage("message.html");

    };

}


/* =========================================================
   SECTION 7
   REEL
========================================================= */

if (profileNavReel) {

    profileNavReel.onclick = function (event) {

        event.preventDefault();

        profileOpenPage("reel.html");

    };

}


/* =========================================================
   SECTION 8
   PROFILE
========================================================= */

if (profileNavProfile) {

    profileNavProfile.onclick = function (event) {

        event.preventDefault();

        profileOpenPage("profile.html");

    };

}
/* =========================================================
   SECTION 9
   EDIT PROFILE
========================================================= */

const editProfileButton =
    document.getElementById("editProfileButton");


if (editProfileButton) {

    editProfileButton.onclick = function (event) {

        event.preventDefault();

        window.location.href = "edit-profile.html";

    };

}