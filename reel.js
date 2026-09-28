/* =========================================================
   WAVEGRAM
   REEL.JS
========================================================= */


/* =========================================================
   SECTION 1
   PAGE NAVIGATION
========================================================= */

const reelNavHome =
    document.getElementById("reelNavHome");

const reelNavSearch =
    document.getElementById("reelNavSearch");

const reelNavMessage =
    document.getElementById("reelNavMessage");

const reelNavReel =
    document.getElementById("reelNavReel");

const reelNavProfile =
    document.getElementById("reelNavProfile");


/* =========================================================
   SECTION 2
   NAVIGATION FUNCTION
========================================================= */

function reelOpenPage(page) {

    window.location.href = page;

}


/* =========================================================
   SECTION 3
   HOME
========================================================= */

if (reelNavHome) {

    reelNavHome.onclick = function (event) {

        event.preventDefault();

        reelOpenPage("home.html");

    };

}


/* =========================================================
   SECTION 4
   SEARCH
========================================================= */

if (reelNavSearch) {

    reelNavSearch.onclick = function (event) {

        event.preventDefault();

        reelOpenPage("search.html");

    };

}


/* =========================================================
   SECTION 5
   MESSAGE
========================================================= */

if (reelNavMessage) {

    reelNavMessage.onclick = function (event) {

        event.preventDefault();

        reelOpenPage("message.html");

    };

}


/* =========================================================
   SECTION 6
   REEL
========================================================= */

if (reelNavReel) {

    reelNavReel.onclick = function (event) {

        event.preventDefault();

        reelOpenPage("reel.html");

    };

}


/* =========================================================
   SECTION 7
   PROFILE
========================================================= */

if (reelNavProfile) {

    reelNavProfile.onclick = function (event) {

        event.preventDefault();

        reelOpenPage("profile.html");

    };

}