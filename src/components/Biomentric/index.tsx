import React from "react";
// import {
//   authenticateWithBiometrics,
//   canAuthenticateWithBiometrics,
//   onFormSubmit,
// } from "../../utils";
import {
  authenticateWithBiometrics,
  canAuthenticateWithBiometrics,
} from "javascript_dg";
import SizeBox from "../Sizebox";

const Biomentric: React.FC = () => {
  return (
    <div>
      <h2>Biometric</h2>
      <button onClick={canAuthenticateWithBiometrics}>Can Biometric</button>
      <button onClick={authenticateWithBiometrics}>
        Authenticate with biometric
      </button>
      <SizeBox></SizeBox>
    </div>
  );
};

export default Biomentric;
