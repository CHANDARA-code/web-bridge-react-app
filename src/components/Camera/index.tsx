import React from "react";
import { capturePhoto, requestCameraPermission } from "../../utils";
import SizeBox from "../Sizebox";

const Camera: React.FC = () => {
  return (
    <div>
      <button onClick={requestCameraPermission}>
        1. Request Camera Permission
      </button>
      <SizeBox></SizeBox>
      <button onClick={capturePhoto}>2. Capture Photo</button>
      <SizeBox />
      <img
        id="photo"
        src="https://brilliant-eclair-7a0195.netlify.app/1019372.png"
        alt="Captured Photo"
        style={{ width: 180 }}
      />
    </div>
  );
};

export default Camera;
