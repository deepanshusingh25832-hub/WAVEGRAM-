/* =========================================================
   WAVEGRAM
   SEARCH.JS
========================================================= */


/* =========================================================
   SECTION 1
   PAGE NAVIGATION
========================================================= */

const searchNavHome =
    document.getElementById("searchNavHome");

const searchNavSearch =
    document.getElementById("searchNavSearch");

const searchNavMessage =
    document.getElementById("searchNavMessage");

const searchNavReel =
    document.getElementById("searchNavReel");

const searchNavProfile =
    document.getElementById("searchNavProfile");


/* =========================================================
   SECTION 2
   NAVIGATION FUNCTION
========================================================= */

function searchOpenPage(page) {

    window.location.href = page;

}


/* =========================================================
   SECTION 3
   HOME
========================================================= */

if (searchNavHome) {

    searchNavHome.onclick = function (event) {

        event.preventDefault();

        searchOpenPage("home.html");

    };

}


/* =========================================================
   SECTION 4
   SEARCH
========================================================= */

if (searchNavSearch) {

    searchNavSearch.onclick = function (event) {

        event.preventDefault();

        searchOpenPage("search.html");

    };

}


/* =========================================================
   SECTION 5
   MESSAGE
========================================================= */

if (searchNavMessage) {

    searchNavMessage.onclick = function (event) {

        event.preventDefault();

        searchOpenPage("message.html");

    };

}


/* =========================================================
   SECTION 6
   REEL
========================================================= */

if (searchNavReel) {

    searchNavReel.onclick = function (event) {

        event.preventDefault();

        searchOpenPage("reel.html");

    };

}


/* =========================================================
   SECTION 7
   PROFILE
========================================================= */

if (searchNavProfile) {

    searchNavProfile.onclick = function (event) {

        event.preventDefault();

        searchOpenPage("profile.html");

    };

}