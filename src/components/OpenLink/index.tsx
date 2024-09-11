import React from "react";
// import {
//   capturePhoto,
//   onFormSubmit,
//   openLink,
//   requestCameraPermission,
//   selectFile,
// } from "../../utils";

import {
  capturePhoto,
  requestCameraPermission,
  openLink,
} from "dg-super-app-bridge";
import SizeBox from "../Sizebox";

const OpenLink: React.FC = () => {
  const kk = async () => {
    await openLink("https://youtu.be/HpD470sf99I");
  };
  return (
    <div>
      <h2>Open Link</h2>
      <button onClick={kk}>Open Link</button>
      <SizeBox></SizeBox>
    </div>
  );
};

export default OpenLink;
