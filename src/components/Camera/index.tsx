import React, { useState, useEffect } from "react";
import {
  capturePhoto,
  capturePhotoBase64,
  requestCameraPermission,
  JavascriptBridgeModel,
  Base64ContentModel,
} from "dg-super-app-bridge";

import SizeBox from "../Sizebox";

const Camera: React.FC = () => {
  const [base64Content, setBase64Content] = useState<string>("");

  useEffect(() => {}, [base64Content]);

  const capture = async () => {
    try {
      const result =
        (await capturePhotoBase64()) as JavascriptBridgeModel<Base64ContentModel>;
      if (result.success) {
        setBase64Content("data:image/png;base64," + result.data?.base64 ?? "");
      }
    } catch (error) {}
  };

  return (
    <div>
      <h2>Camara</h2>
      <button onClick={requestCameraPermission}>
        Request Camera Permission
      </button>
      <SizeBox></SizeBox>
      <button onClick={capture}>Capture Photo Base64</button>
      <button onClick={capturePhoto}>Capture Photo</button>
      <SizeBox />
      {base64Content && (
        <img
          id="photo"
          src={base64Content}
          alt="Captured Photo"
          style={{ width: 180 }}
        />
      )}
      {!base64Content && (
        <img
          id="photo"
          src="https://web-bridge-react-app.netlify.app/1019372.png"
          alt="Captured Photo"
          style={{ width: 180 }}
        />
      )}
    </div>
  );
};

export default Camera;
