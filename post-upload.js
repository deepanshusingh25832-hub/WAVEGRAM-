/* =========================================================
   WAVEGRAM
   POST-UPLOAD.JS
========================================================= */


/* =========================================================
   SECTION 1
   BACK BUTTON
========================================================= */

const postUploadBackButton =
    document.getElementById(
        "postUploadBackButton"
    );


if (postUploadBackButton) {

    postUploadBackButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            if (window.history.length > 1) {

                window.history.back();

            } else {

                window.location.href =
                    "profile.html";

            }

        }
    );

}


/* =========================================================
   SECTION 2
   MEDIA ELEMENTS
========================================================= */

const postUploadMediaButton =
    document.getElementById(
        "postUploadMediaButton"
    );


const postUploadMediaInput =
    document.getElementById(
        "postUploadMediaInput"
    );


const postUploadPreviewBox =
    document.getElementById(
        "postUploadPreviewBox"
    );


const postUploadPreviewEmpty =
    document.getElementById(
        "postUploadPreviewEmpty"
    );


/* =========================================================
   SECTION 3
   OPEN MEDIA PICKER
========================================================= */

if (
    postUploadMediaButton &&
    postUploadMediaInput
) {

    postUploadMediaButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            postUploadMediaInput.click();

        }
    );

}


/* =========================================================
   SECTION 4
   MEDIA SELECTED
========================================================= */

if (postUploadMediaInput) {

    postUploadMediaInput.addEventListener(
        "change",
        function () {

            const selectedFile =
                postUploadMediaInput.files[0];


            if (!selectedFile) {
                return;
            }


            postUploadShowPreview(
                selectedFile
            );

        }
    );

}


/* =========================================================
   SECTION 5
   SHOW MEDIA PREVIEW
========================================================= */

function postUploadShowPreview(file) {

    if (!postUploadPreviewBox) {
        return;
    }


    const fileType =
        file.type || "";


    const fileName =
        file.name || "";


    const isImage =
        fileType.startsWith("image/") ||
        fileName.toLowerCase().endsWith(".gif");


    const isVideo =
        fileType.startsWith("video/");


    if (!isImage && !isVideo) {

        postUploadShowEmptyPreview(
            "Unsupported media"
        );

        postUploadMediaInput.value = "";

        return;

    }


    const previewURL =
        URL.createObjectURL(file);


    postUploadPreviewBox.innerHTML = "";


    if (isVideo) {

        const video =
            document.createElement("video");


        video.className =
            "post-upload-preview-video";


        video.src =
            previewURL;


        video.controls = true;

        video.playsInline = true;

        video.preload = "metadata";


        postUploadPreviewBox.appendChild(
            video
        );

    } else {

        const image =
            document.createElement("img");


        image.className =
            fileName.toLowerCase().endsWith(".gif")
                ? "post-upload-preview-gif"
                : "post-upload-preview-image";


        image.src =
            previewURL;


        image.alt =
            "Selected media";


        postUploadPreviewBox.appendChild(
            image
        );

    }

}


/* =========================================================
   SECTION 6
   EMPTY PREVIEW
========================================================= */

function postUploadShowEmptyPreview(
    message
) {

    if (!postUploadPreviewBox) {
        return;
    }


    postUploadPreviewBox.innerHTML = "";


    const empty =
        document.createElement("div");


    empty.id =
        "postUploadPreviewEmpty";


    empty.className =
        "post-upload-preview-empty";


    empty.textContent =
        message || "Select photo, video or GIF";


    postUploadPreviewBox.appendChild(
        empty
    );

}


/* =========================================================
   SECTION 7
   INITIAL STATE
========================================================= */

if (postUploadPreviewBox) {

    postUploadShowEmptyPreview(
        "Select photo, video or GIF"
    );

}


/* =========================================================
   SECTION 8
   MUSIC BUTTON
========================================================= */

const postUploadMusicButton =
    document.getElementById(
        "postUploadMusicButton"
    );


if (postUploadMusicButton) {

    postUploadMusicButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            window.location.href =
                "music.html";

        }
    );

}