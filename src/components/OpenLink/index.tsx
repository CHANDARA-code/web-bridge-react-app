import React from "react";
// import {
//   capturePhoto,
//   onFormSubmit,
//   openLink,
//   requestCameraPermission,
//   selectFile,
// } from "../../utils";

import { capturePhoto, requestCameraPermission, openLink } from "javascript_dg";
import SizeBox from "../Sizebox";

const OpenLink: React.FC = () => {
  return (
    <div>
      <h2>Open Link</h2>
      <button onClick={openLink}>Open Link</button>
      <SizeBox></SizeBox>
    </div>
  );
};

export default OpenLink;
