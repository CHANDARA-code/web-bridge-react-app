import React from "react";
import {
  capturePhoto,
  onFormSubmit,
  pickPhoto,
  pickPhotoBase64,
  requestCameraPermission,
  requestPhotoPermission,
  selectFile,
} from "../../utils";
import SizeBox from "../Sizebox";

const PhotoPicker: React.FC = () => {
  return (
    <div>
      <h2>Photo Picker</h2>
      <button onClick={requestPhotoPermission}>Request Photo Permission</button>
      <SizeBox></SizeBox>
      <button onClick={pickPhotoBase64}>Pick Photo Base64</button>
      <button onClick={pickPhoto}>Pick Photo</button>
      <SizeBox></SizeBox>
      <img
        id="photoPicker"
        src="https://web-bridge-react-app.netlify.app/1019372.png"
        alt="Pick Photo"
        style={{ width: 180 }}
      />
      <SizeBox></SizeBox>
    </div>
  );
};

export default PhotoPicker;
