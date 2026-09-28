/* =========================================================
   WAVEGRAM
   MESSAGE.JS
========================================================= */


/* =========================================================
   SECTION 1
   PAGE NAVIGATION
========================================================= */

const messageNavHome =
    document.getElementById("messageNavHome");

const messageNavSearch =
    document.getElementById("messageNavSearch");

const messageNavMessage =
    document.getElementById("messageNavMessage");

const messageNavReel =
    document.getElementById("messageNavReel");

const messageNavProfile =
    document.getElementById("messageNavProfile");


/* =========================================================
   SECTION 2
   NAVIGATION FUNCTION
========================================================= */

function messageOpenPage(page) {

    window.location.href = page;

}


/* =========================================================
   SECTION 3
   HOME
========================================================= */

if (messageNavHome) {

    messageNavHome.onclick = function (event) {

        event.preventDefault();

        messageOpenPage("home.html");

    };

}


/* =========================================================
   SECTION 4
   SEARCH
========================================================= */

if (messageNavSearch) {

    messageNavSearch.onclick = function (event) {

        event.preventDefault();

        messageOpenPage("search.html");

    };

}


/* =========================================================
   SECTION 5
   MESSAGE
========================================================= */

if (messageNavMessage) {

    messageNavMessage.onclick = function (event) {

        event.preventDefault();

        messageOpenPage("message.html");

    };

}


/* =========================================================
   SECTION 6
   REEL
========================================================= */

if (messageNavReel) {

    messageNavReel.onclick = function (event) {

        event.preventDefault();

        messageOpenPage("reel.html");

    };

}


/* =========================================================
   SECTION 7
   PROFILE
========================================================= */

if (messageNavProfile) {

    messageNavProfile.onclick = function (event) {

        event.preventDefault();

        messageOpenPage("profile.html");

    };

}

/* =========================================================
   SECTION 8
   CREATE GROUP BUTTON
========================================================= */

const messageCreatePlusButton =
    document.getElementById("messageCreatePlusButton");


if (messageCreatePlusButton) {

    messageCreatePlusButton.onclick = function (event) {

        event.preventDefault();

        window.location.href = "create-group.html";

    };

}