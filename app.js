/* =========================================================
   BIGG BOSS
   APP.JS
   SPLASH TO HOME
========================================================= */


/* =========================================================
   SECTION 1
   APP INITIALIZATION
========================================================= */

"use strict";


document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeBiggBossApp();

    }
);


/* =========================================================
   SECTION 2
   SPLASH SCREEN INITIALIZATION
========================================================= */

function initializeBiggBossApp() {

    const splashScreen =
        document.getElementById("splashScreen");


    if (!splashScreen) {

        console.error(
            "BIGG BOSS: Splash screen not found."
        );

        return;

    }


    splashScreen.classList.remove(
        "splash-hidden"
    );


    splashScreen.style.visibility =
        "visible";


    splashScreen.style.opacity =
        "1";


    splashScreen.style.pointerEvents =
        "auto";


    initializeLoadingIndicator();


    startHomePageTimer();

}


/* =========================================================
   SECTION 3
   LOADING DOTS
========================================================= */

function initializeLoadingIndicator() {

    const loadingDots =
        document.querySelectorAll(
            ".loading-dots span"
        );


    if (!loadingDots.length) {
        return;
    }


    let activeIndex = 1;


    window.biggBossLoadingTimer =
        setInterval(
            function () {

                loadingDots.forEach(
                    function (dot) {

                        dot.classList.remove(
                            "active"
                        );

                    }
                );


                loadingDots[activeIndex]
                    .classList.add("active");


                activeIndex++;


                if (
                    activeIndex >=
                    loadingDots.length
                ) {

                    activeIndex = 0;

                }

            },
            450
        );

}


/* =========================================================
   SECTION 4
   TWO SECOND HOME PAGE TIMER
========================================================= */

function startHomePageTimer() {

    window.biggBossHomeTimer =
        setTimeout(
            function () {

                openHomePage();

            },
            2000
        );

}


/* =========================================================
   SECTION 5
   OPEN HOME PAGE
========================================================= */

function openHomePage() {

    stopLoadingIndicator();


    /*
     * Replace the splash page with
     * the BIGG BOSS Home page.
     */

    window.location.replace(
        "home.html"
    );

}


/* =========================================================
   SECTION 6
   STOP LOADING INDICATOR
========================================================= */

function stopLoadingIndicator() {

    if (
        window.biggBossLoadingTimer
    ) {

        clearInterval(
            window.biggBossLoadingTimer
        );


        window.biggBossLoadingTimer =
            null;

    }

}


/* =========================================================
   SECTION 7
   CLEANUP HOME TIMER
========================================================= */

function cleanupHomeTimer() {

    if (
        window.biggBossHomeTimer
    ) {

        clearTimeout(
            window.biggBossHomeTimer
        );


        window.biggBossHomeTimer =
            null;

    }

}


/* =========================================================
   SECTION 8
   PAGE CLEANUP
========================================================= */

window.addEventListener(
    "pagehide",
    function () {

        stopLoadingIndicator();

        cleanupHomeTimer();

    }
);


/* =========================================================
   SECTION 9
   APPLICATION READY
========================================================= */

window.addEventListener(
    "load",
    function () {

        console.log(
            "BIGG BOSS: Splash screen loaded."
        );

        console.log(
            "BIGG BOSS: Home page will open in 2 seconds."
        );

    }
);