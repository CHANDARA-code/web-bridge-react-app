import React from "react";
import {
  capturePhoto,
  onFormSubmit,
  requestCameraPermission,
  selectFile,
} from "../../utils";
import SizeBox from "../Sizebox";

const FilesPicker: React.FC = () => {
  return (
    <div>
      <h2>File Picker</h2>
      <button onClick={selectFile}>Select File</button>
      <SizeBox></SizeBox>
    </div>
  );
};

export default FilesPicker;
