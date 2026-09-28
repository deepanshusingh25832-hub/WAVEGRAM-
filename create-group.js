/* =========================================================
   WAVEGRAM
   CREATE-GROUP.JS
========================================================= */


/* =========================================================
   SECTION 1
   BACK BUTTON
========================================================= */

const createGroupBackButton =
    document.getElementById("createGroupBackButton");


if (createGroupBackButton) {

    createGroupBackButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            window.location.href = "message.html";

        }
    );

}

/* =========================================================
   WAVEGRAM
   CREATE-GROUP.JS
========================================================= */


/* =========================================================
   SECTION 1
   SELECT GIF
========================================================= */

const selectGifButton =
    document.getElementById("selectGifButton");


const createGroupGifBox =
    document.getElementById("createGroupGifBox");


if (selectGifButton) {

    selectGifButton.addEventListener(
        "click",
        function () {

            let gifFileInput =
                document.getElementById("gifFileInput");

            if (!gifFileInput) {

                gifFileInput =
                    document.createElement("input");

                gifFileInput.type = "file";

                gifFileInput.id = "gifFileInput";

                gifFileInput.accept =
                    "image/gif,image/png,image/jpeg,image/webp";

                gifFileInput.style.display = "none";

                document.body.appendChild(
                    gifFileInput
                );


                gifFileInput.addEventListener(
                    "change",
                    function () {

                        const file =
                            this.files &&
                            this.files[0];

                        if (!file) {
                            return;
                        }


                        const imageUrl =
                            URL.createObjectURL(file);


                        if (createGroupGifBox) {

                            createGroupGifBox.innerHTML = "";


                            const gifImage =
                                document.createElement("img");

                            gifImage.className =
                                "create-group-selected-gif";

                            gifImage.src =
                                imageUrl;

                            gifImage.alt =
                                "Selected GIF";


                            createGroupGifBox.appendChild(
                                gifImage
                            );
                        }

                    }
                );

            }


            gifFileInput.value = "";

            gifFileInput.click();

        }
    );

}


/* =========================================================
   SECTION 2
   SELECT GROUP DP
========================================================= */

const selectDpButton =
    document.getElementById("selectDpButton");


const createGroupDp =
    document.getElementById("createGroupDp");


if (selectDpButton) {

    selectDpButton.addEventListener(
        "click",
        function () {

            let dpFileInput =
                document.getElementById("groupDpFileInput");


            if (!dpFileInput) {

                dpFileInput =
                    document.createElement("input");

                dpFileInput.type = "file";

                dpFileInput.id =
                    "groupDpFileInput";

                dpFileInput.accept =
                    "image/*";

                dpFileInput.style.display =
                    "none";

                document.body.appendChild(
                    dpFileInput
                );


                dpFileInput.addEventListener(
                    "change",
                    function () {

                        const file =
                            this.files &&
                            this.files[0];

                        if (!file) {
                            return;
                        }


                        const imageUrl =
                            URL.createObjectURL(file);


                        if (createGroupDp) {

                            createGroupDp.src =
                                imageUrl;

                        }

                    }
                );

            }


            dpFileInput.value = "";

            dpFileInput.click();

        }
    );

}


/* =========================================================
   SECTION 3
   CANCEL BUTTON
========================================================= */

const cancelCreateGroupButton =
    document.getElementById(
        "cancelCreateGroupButton"
    );


if (cancelCreateGroupButton) {

    cancelCreateGroupButton.addEventListener(
        "click",
        function () {

            if (history.length > 1) {

                history.back();

            } else {

                window.location.href =
                    "message.html";

            }

        }
    );

}


/* =========================================================
   SECTION 4
   CREATE GROUP BUTTON
========================================================= */

const createGroupButton =
    document.getElementById(
        "createGroupButton"
    );


if (createGroupButton) {

    createGroupButton.addEventListener(
        "click",
        function () {

            const groupNameInput =
                document.getElementById(
                    "groupNameInput"
                );

            const groupBioInput =
                document.getElementById(
                    "groupBioInput"
                );


            const groupName =
                groupNameInput
                    ? groupNameInput.value.trim()
                    : "";


            const groupBio =
                groupBioInput
                    ? groupBioInput.value.trim()
                    : "";


            if (!groupName) {

                if (groupNameInput) {

                    groupNameInput.focus();

                }

                return;
            }


            console.log(
                "GROUP NAME:",
                groupName
            );


            console.log(
                "GROUP BIO:",
                groupBio
            );


            /*
             * Group creation / Supabase logic
             * yahan baad me add ki jayegi.
             */

        }
    );

}