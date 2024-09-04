import React from "react";
import {
  capturePhoto,
  onFormSubmit,
  requestCameraPermission,
} from "../../utils";
import SizeBox from "../Sizebox";

const FormSubmit: React.FC = () => {
  return (
    <div>
      <h2>Form Submission</h2>
      <form onSubmit={onFormSubmit}>
        <input type="text" id="name" placeholder="Name" required />
        <input type="email" id="email" placeholder="Email" required />
        <div
          style={{
            width: 20,
            height: 20,
          }}
        />
        <button type="submit">Submit Form</button>
      </form>
      <SizeBox></SizeBox>
    </div>
  );
};

export default FormSubmit;
