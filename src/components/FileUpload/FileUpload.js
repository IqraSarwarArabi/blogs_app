import React, { useEffect } from "react";
import styles from "./FileUpload.module.css";

function FileUpload({ setUrl }) {
  useEffect(() => {
    const cloudName = process.env.REACT_APP_CLOUD_NAME;
    const uploadPreset = process.env.REACT_APP_CLOUD_PRESET;

    const myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        sources: ["local", "url"],
        multiple: false,
        singleUploadAutoClose: false,
        clientAllowedFormats: ["png", "jpg"],
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          document
            .getElementById("preview")
            .setAttribute("src", result.info.secure_url);
          setUrl(result.info.secure_url);
        }
      }
    );

    const uploadButton = document.getElementById("upload_widget");
    uploadButton.addEventListener("click", () => {
      myWidget.open();
    });

    return () => {
      uploadButton.removeEventListener("click", () => {
        myWidget.open();
      });
    };
  }, [setUrl]);

  return (
    <div className={styles.file_upload}>
      <p>Upload Blog Image Here!</p>
      <button className="button" id="upload_widget">
        Upload Image
      </button>
    </div>
  );
}

export default FileUpload;
