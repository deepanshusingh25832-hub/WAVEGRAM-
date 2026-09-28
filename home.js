/* =========================================================
   WAVEGRAM
   HOME.JS
========================================================= */


/* =========================================================
   SECTION 1
   PAGE NAVIGATION
========================================================= */

const homeNavHome =
    document.getElementById("homeNavHome");

const homeNavSearch =
    document.getElementById("homeNavSearch");

const homeNavMessage =
    document.getElementById("homeNavMessage");

const homeNavReel =
    document.getElementById("homeNavReel");

const homeNavProfile =
    document.getElementById("homeNavProfile");


/* =========================================================
   SECTION 2
   NAVIGATION FUNCTION
========================================================= */

function homeOpenPage(page) {

    window.location.href = page;

}


/* =========================================================
   SECTION 3
   HOME NAVIGATION
========================================================= */

if (homeNavHome) {

    homeNavHome.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            homeOpenPage("home.html");

        }
    );

}


/* =========================================================
   SECTION 4
   SEARCH NAVIGATION
========================================================= */

if (homeNavSearch) {

    homeNavSearch.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            homeOpenPage("search.html");

        }
    );

}


/* =========================================================
   SECTION 5
   MESSAGE NAVIGATION
========================================================= */

if (homeNavMessage) {

    homeNavMessage.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            homeOpenPage("message.html");

        }
    );

}


/* =========================================================
   SECTION 6
   REEL NAVIGATION
========================================================= */

if (homeNavReel) {

    homeNavReel.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            homeOpenPage("reel.html");

        }
    );

}


/* =========================================================
   SECTION 7
   PROFILE NAVIGATION
========================================================= */

if (homeNavProfile) {

    homeNavProfile.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            homeOpenPage("profile.html");

        }
    );

}


/* =========================================================
   SECTION 8
   POST ELEMENTS
========================================================= */

const homePostMoreButton =
    document.getElementById(
        "homePostMoreButton"
    );


const homePostOptionsOverlay =
    document.getElementById(
        "homePostOptionsOverlay"
    );


const homePostOptionsPopup =
    document.getElementById(
        "homePostOptionsPopup"
    );


const homePostOptionsCancel =
    document.getElementById(
        "homePostOptionsCancel"
    );


const homePostHideLikeOption =
    document.getElementById(
        "homePostHideLikeOption"
    );


const homePostHideCommentOption =
    document.getElementById(
        "homePostHideCommentOption"
    );


const homePostHideShareOption =
    document.getElementById(
        "homePostHideShareOption"
    );


const homePostSaveOption =
    document.getElementById(
        "homePostSaveOption"
    );


const homePostEditOption =
    document.getElementById(
        "homePostEditOption"
    );


const homePostDeleteOption =
    document.getElementById(
        "homePostDeleteOption"
    );


const homePostLikeButton =
    document.getElementById(
        "homePostLikeButton"
    );


const homePostCommentButton =
    document.getElementById(
        "homePostCommentButton"
    );


const homePostShareButton =
    document.getElementById(
        "homePostShareButton"
    );


const homePostSaveButton =
    document.getElementById(
        "homePostSaveButton"
    );


const homePostLikeCount =
    document.getElementById(
        "homePostLikeCount"
    );


const homePostCard =
    document.getElementById(
        "homePostCard"
    );


/* =========================================================
   SECTION 9
   POST STATE
========================================================= */

let homePostHideLike = false;

let homePostHideComment = false;

let homePostHideShare = false;

let homePostSaved = false;


/* =========================================================
   SECTION 10
   OPEN POST OPTIONS
========================================================= */

function homeOpenPostOptions() {

    if (!homePostOptionsPopup) {
        return;
    }


    homePostOptionsPopup.classList.add(
        "show"
    );


    homePostOptionsPopup.setAttribute(
        "aria-hidden",
        "false"
    );


    if (homePostMoreButton) {

        const buttonRect =
            homePostMoreButton.getBoundingClientRect();


        const popupWidth =
            190;


        const popupHeight =
            homePostOptionsPopup.offsetHeight;


        const gap =
            8;


        let popupTop =
            buttonRect.bottom + gap;


        let popupLeft =
            buttonRect.right - popupWidth;


        /* Keep popup inside screen */

        if (popupLeft < 8) {

            popupLeft = 8;

        }


        if (
            popupLeft + popupWidth >
            window.innerWidth - 8
        ) {

            popupLeft =
                window.innerWidth -
                popupWidth -
                8;

        }


        /* Keep popup inside bottom area */

        if (
            popupTop + popupHeight >
            window.innerHeight - 8
        ) {

            popupTop =
                buttonRect.top -
                popupHeight -
                gap;

        }


        homePostOptionsPopup.style.top =
            popupTop + "px";


        homePostOptionsPopup.style.left =
            popupLeft + "px";

    }


    if (homePostOptionsOverlay) {

        homePostOptionsOverlay.classList.add(
            "show"
        );


        homePostOptionsOverlay.setAttribute(
            "aria-hidden",
            "false"
        );


        homePostOptionsOverlay.style.setProperty(
            "display",
            "block",
            "important"
        );

    }


    homeUpdatePostOptionText();

}


/* =========================================================
   SECTION 11
   CLOSE POST OPTIONS
========================================================= */

function homeClosePostPopup() {

    if (homePostOptionsPopup) {

        homePostOptionsPopup.classList.remove(
            "show"
        );


        homePostOptionsPopup.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    if (homePostOptionsOverlay) {

        homePostOptionsOverlay.classList.remove(
            "show"
        );


        homePostOptionsOverlay.setAttribute(
            "aria-hidden",
            "true"
        );


        homePostOptionsOverlay.style.setProperty(
            "display",
            "none",
            "important"
        );

    }

}


/* =========================================================
   SECTION 12
   THREE DOT BUTTON
========================================================= */

if (homePostMoreButton) {

    homePostMoreButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            event.stopPropagation();

            homeOpenPostOptions();

        }
    );

}


/* =========================================================
   SECTION 13
   THREE DOT TOUCH
========================================================= */

if (homePostMoreButton) {

    homePostMoreButton.addEventListener(
        "touchend",
        function (event) {

            event.preventDefault();

            event.stopPropagation();

            homeOpenPostOptions();

        },
        {
            passive: false
        }
    );

}


/* =========================================================
   SECTION 14
   POPUP PANEL PROTECTION
========================================================= */

if (homePostOptionsPopup) {

    homePostOptionsPopup.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

        }
    );


    homePostOptionsPopup.addEventListener(
        "touchend",
        function (event) {

            event.stopPropagation();

        }
    );

}


/* =========================================================
   SECTION 15
   OVERLAY TAP
========================================================= */

if (homePostOptionsOverlay) {

    homePostOptionsOverlay.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                homePostOptionsOverlay
            ) {

                homeClosePostPopup();

            }

        }
    );

}


/* =========================================================
   SECTION 16
   CANCEL BUTTON
========================================================= */

if (homePostOptionsCancel) {

    homePostOptionsCancel.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            event.stopPropagation();

            homeClosePostPopup();

        }
    );

}


/* =========================================================
   SECTION 17
   HIDE LIKE
========================================================= */

if (homePostHideLikeOption) {

    homePostHideLikeOption.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            event.stopPropagation();

            homePostHideLike =
                !homePostHideLike;


            if (homePostLikeButton) {

                homePostLikeButton.style.display =
                    homePostHideLike
                        ? "none"
                        : "flex";

            }


            if (homePostLikeCount) {

                homePostLikeCount.style.display =
                    homePostHideLike
                        ? "none"
                        : "";

            }


            homeUpdatePostOptionText();

        }
    );

}


/* =========================================================
   SECTION 18
   HIDE COMMENT
========================================================= */

if (homePostHideCommentOption) {

    homePostHideCommentOption.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            event.stopPropagation();

            homePostHideComment =
                !homePostHideComment;


            if (homePostCommentButton) {

                homePostCommentButton.style.display =
                    homePostHideComment
                        ? "none"
                        : "flex";

            }


            homeUpdatePostOptionText();

        }
    );

}


/* =========================================================
   SECTION 19
   HIDE SHARE
========================================================= */

if (homePostHideShareOption) {

    homePostHideShareOption.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            event.stopPropagation();

            homePostHideShare =
                !homePostHideShare;


            if (homePostShareButton) {

                homePostShareButton.style.display =
                    homePostHideShare
                        ? "none"
                        : "flex";

            }


            homeUpdatePostOptionText();

        }
    );

}


/* =========================================================
   SECTION 20
   SAVE FROM POPUP
========================================================= */

if (homePostSaveOption) {

    homePostSaveOption.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            event.stopPropagation();

            homePostSaved =
                !homePostSaved;


            if (homePostSaveButton) {

                homePostSaveButton.classList.toggle(
                    "saved",
                    homePostSaved
                );

            }


            homeUpdatePostOptionText();

        }
    );

}


/* =========================================================
   SECTION 21
   SAVE MAIN BUTTON
========================================================= */

if (homePostSaveButton) {

    homePostSaveButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            event.stopPropagation();

            homePostSaved =
                !homePostSaved;


            homePostSaveButton.classList.toggle(
                "saved",
                homePostSaved
            );


            homeUpdatePostOptionText();

        }
    );

}


/* =========================================================
   SECTION 22
   UPDATE POPUP TEXT
========================================================= */

function homeUpdatePostOptionText() {

    if (homePostHideLikeOption) {

        homePostHideLikeOption.textContent =
            homePostHideLike
                ? "Unhide Like"
                : "Hide Like";

    }


    if (homePostHideCommentOption) {

        homePostHideCommentOption.textContent =
            homePostHideComment
                ? "Unhide Comment"
                : "Hide Comment";

    }


    if (homePostHideShareOption) {

        homePostHideShareOption.textContent =
            homePostHideShare
                ? "Unhide Share"
                : "Hide Share";

    }


    if (homePostSaveOption) {

        homePostSaveOption.textContent =
            homePostSaved
                ? "Unsave"
                : "Save";

    }

}


/* =========================================================
   SECTION 23
   EDIT POST
========================================================= */

if (homePostEditOption) {

    homePostEditOption.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            event.stopPropagation();

            homeClosePostPopup();

            console.log(
                "WAVEGRAM: Edit Post clicked"
            );

        }
    );

}


/* =========================================================
   SECTION 24
   DELETE POST
========================================================= */

if (homePostDeleteOption) {

    homePostDeleteOption.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            event.stopPropagation();

            homeClosePostPopup();


            if (homePostCard) {

                homePostCard.remove();

            }

        }
    );

}


/* =========================================================
   SECTION 25
   OUTSIDE DOCUMENT TAP
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        if (!homePostOptionsPopup) {
            return;
        }


        if (
            homePostOptionsPopup.classList.contains(
                "show"
            )
        ) {

            if (
                !homePostOptionsPopup.contains(
                    event.target
                ) &&
                !(
                    homePostMoreButton &&
                    homePostMoreButton.contains(
                        event.target
                    )
                )
            ) {

                homeClosePostPopup();

            }

        }

    }
);


/* =========================================================
   SECTION 26
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key ===
            "Escape"
        ) {

            homeClosePostPopup();

        }

    }
);


/* =========================================================
   SECTION 27
   INITIAL POPUP STATE
========================================================= */

homeClosePostPopup();

homeUpdatePostOptionText();