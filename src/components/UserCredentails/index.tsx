import React, { useEffect, useState } from "react";
// import { getDecryptData, getEncryptData, openLink } from "../../utils";
import { getDecryptData, getEncryptData, openLink } from "javascript_dg";
import SizeBox from "../Sizebox";

const UserCredentials: React.FC = () => {
  const [encryptData, setEncryptData] = useState<string | undefined>();
  const [decryptData, setDecryptData] = useState<string | undefined>();

  useEffect(() => {
    getCredential(); // Call only once on component mount
  }, []);

  const getCredential = async () => {
    const encryptedData = await getEncryptData();
    const decryptData = await getDecryptData(encryptedData ?? "");
    setEncryptData(encryptedData);
    setDecryptData(decryptData);
  };

  return (
    <div>
      <h2>Credentials</h2>
      <p>
        Credential Encrypt: <span style={{ fontSize: 12 }}>{encryptData}</span>
      </p>
      <p>
        Credential Decrypt: <span style={{ fontSize: 12 }}>{decryptData}</span>{" "}
      </p>
      <SizeBox />
    </div>
  );
};

export default UserCredentials;
