import React from "react";
import { sendEncryptedData } from "javascript_dg";
// import { sendEncryptedData } from "../../utils";
import SizeBox from "../Sizebox";

const Security: React.FC = () => {
  return (
    <div>
      <h2>Encrypt Data</h2>
      <input type="text" id="plainText" placeholder="Text to Encrypt" />
      <button onClick={sendEncryptedData}>Encrypt</button>
    </div>
  );
};

export default Security;
