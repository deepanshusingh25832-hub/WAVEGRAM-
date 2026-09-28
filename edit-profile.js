/* =========================================================
   SECTION 1
   BACK BUTTON
========================================================= */

const editProfileBackButton =
    document.getElementById(
        "editProfileBackButton"
    );


if (editProfileBackButton) {

    editProfileBackButton.addEventListener(
        "click",
        function () {

            window.history.back();

        }
    );

}
/* =========================================================
   SECTION 2
   BIO KEYBOARD SCROLL FIX
========================================================= */

const editProfileForm =
    document.querySelector(
        ".edit-profile-form"
    );

const editProfileBio =
    document.getElementById(
        "editProfileBio"
    );


if (
    editProfileForm &&
    editProfileBio
) {

    editProfileBio.addEventListener(
        "focus",
        function () {

            setTimeout(
                function () {

                    /*
                     * Form ko maximum possible
                     * scroll position par le jao.
                     */

                    editProfileForm.scrollTop =
                        editProfileForm.scrollHeight -
                        editProfileForm.clientHeight;


                },
                400
            );


            /*
             * Android keyboard ke resize ke
             * baad dobara maximum scroll.
             */

            setTimeout(
                function () {

                    editProfileForm.scrollTop =
                        editProfileForm.scrollHeight -
                        editProfileForm.clientHeight;

                },
                800
            );


            setTimeout(
                function () {

                    editProfileForm.scrollTop =
                        editProfileForm.scrollHeight -
                        editProfileForm.clientHeight;

                },
                1200
            );

        }
    );

}