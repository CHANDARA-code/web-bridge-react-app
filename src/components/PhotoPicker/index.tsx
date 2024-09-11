import React, { useEffect, useState } from "react";
// import {
//   capturePhoto,
//   onFormSubmit,
//   pickPhoto,
//   pickPhotoBase64,
//   requestCameraPermission,
//   requestPhotoPermission,
//   selectFile,
// } from "../../utils";

import {
  capturePhoto,
  pickPhoto,
  pickPhotoBase64,
  requestCameraPermission,
  requestPhotoPermission,
  selectFile,
  JavascriptBridgeModel,
  Base64ContentModel,
} from "dg-super-app-bridge";
import SizeBox from "../Sizebox";

const PhotoPicker: React.FC = () => {
  const [base64Content, setBase64Content] = useState<string>("");

  useEffect(() => {}, [base64Content]);

  const picker = async () => {
    try {
      const result =
        (await pickPhotoBase64()) as JavascriptBridgeModel<Base64ContentModel>;
      if (result.success) {
        setBase64Content("data:image/png;base64," + result.data?.base64 ?? "");
      }
    } catch (error) {}
  };
  return (
    <div>
      <h2>Photo Picker</h2>
      <button onClick={requestPhotoPermission}>Request Photo Permission</button>
      <SizeBox></SizeBox>
      <button onClick={picker}>Pick Photo Base64</button>
      <button onClick={pickPhoto}>Pick Photo</button>
      <SizeBox></SizeBox>
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
      <SizeBox></SizeBox>
    </div>
  );
};

export default PhotoPicker;
