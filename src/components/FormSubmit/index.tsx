import React from "react";
import {
  capturePhoto,
  onFormSubmit,
  requestCameraPermission,
} from "../../utils";
import SizeBox from "../Sizebox";

const FormSubmit: React.FC = () => {
  const kk = () => {
    (window as any).flutter_inappwebview
      .callHandler("sendEncryptedData", "Sensitive Data")
      .then(function (response: any) {
        console.log(response.success);
      });
  };
  return (
    <div>
      <h2>Form Submission</h2>
      <form onSubmit={kk}>
        <input type="text" id="name" placeholder="Name" required />
        <input type="number" id="age" placeholder="Age" required />
        <div
          style={{
            width: 20,
            height: 20,
          }}
        />
        <button>Submit Form</button>
      </form>
      <SizeBox></SizeBox>
    </div>
  );
};

export default FormSubmit;
