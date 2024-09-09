import React from "react";
// import { capturePhoto, capturePhotoBase64, requestCameraPermission } from "../../utils";
import {
  capturePhoto,
  capturePhotoBase64,
  requestCameraPermission,
} from "dg-super-app-bridge";

import SizeBox from "../Sizebox";

const Camera: React.FC = () => {
  return (
    <div>
      <h2>Camara</h2>

      <button onClick={requestCameraPermission}>
        Request Camera Permission
      </button>

      <SizeBox></SizeBox>
      <button onClick={capturePhotoBase64}>Capture Photo Base64</button>
      <button onClick={capturePhoto}>Capture Photo</button>
      <SizeBox />
      <img
        id="photo"
        src="https://web-bridge-react-app.netlify.app/1019372.png"
        alt="Captured Photo"
        style={{ width: 180 }}
      />
    </div>
  );
};

export default Camera;
