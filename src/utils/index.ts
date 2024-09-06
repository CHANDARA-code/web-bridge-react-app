// Utility function to call Flutter handlers
const callFlutterHandler = async (handlerName: string, args: any[] = []) => {
  try {
    const result = await (window as any).flutter_inappwebview.callHandler(
      handlerName,
      ...args
    );
    console.log(`${handlerName} result:`, result);
    return result;
  } catch (error) {
    console.error(`${handlerName} error:`, error);
  }
};

export const requestCameraPermission = async () => {
  const result = await callFlutterHandler("requestCameraPermission");
  if (result.success) {
    console.log("Camera permission granted");
  } else {
    console.error("Camera permission denied");
  }
};
export const requestPhotoPermission = async () => {
  const result = await callFlutterHandler("requestPhotoPermission");
  if (result.success) {
    console.log("Photo permission granted");
  } else {
    console.error("Photo permission denied");
  }
};

export const goToSettingToGrantPermission = async () => {
  await callFlutterHandler("goToSettingToGrantPermission");
};

export const capturePhoto = async () => {
  const result = await callFlutterHandler("capturePhoto");
  if (result.success) {
    const imgData = result.data;
    (document.getElementById("photo") as HTMLImageElement).src =
      "data:image/png;base64," + imgData;
    console.log("Photo captured successfully");
  } else {
    console.error("Failed to capture photo");
  }
};

export const pickPhoto = async () => {
  const result = await callFlutterHandler("pickPhoto");
  if (result.success) {
    const imgData = result.data;
    (document.getElementById("photoPicker") as HTMLImageElement).src =
      "data:image/png;base64," + imgData;
    console.log("Photo captured successfully");
  } else {
    console.error("Failed to capture photo");
  }
};

export const getDeviceLocation = async () => {
  const result = await callFlutterHandler("getDeviceLocation");
  if (result.success) {
    const { latitude, longitude } = result.data;
    console.log(`Location: Latitude ${latitude}, Longitude ${longitude}`);
  } else {
    console.error(result.message);
  }
};

export const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = {
    name: (document.getElementById("name") as HTMLInputElement).value,
    email: (document.getElementById("age") as HTMLInputElement).value,
  };
  await callFlutterHandler("onFormSubmit", [JSON.stringify(formData)]);

  // console.log(result.message);
};

export const selectFile = async () => {
  const result = await callFlutterHandler("selectFile");
  if (result.success) {
    console.log("File selected:", result.data);
  } else {
    console.error("No file selected");
  }
};

export const openLink = async () => {
  // const result = {
  //   success: true,
  //   data: {
  //     url: "https://youtu.be/R9iJAVVnfH8?list=RDR9iJAVVnfH8",
  //   },
  //   message: "Data Return",
  // };
  try {
    const result = ["https://youtu.be/R9iJAVVnfH8?list=RDR9iJAVVnfH8"];
    await callFlutterHandler("openLink", result);
  } catch (error) {
    console.log(`error => ${error}`);
  }
};

export const canAuthenticateWithBiometrics = async () => {
  const result = await callFlutterHandler("canAuthenticateWithBiometrics");
  if (result.success) {
    console.log(result.message);
  } else {
    console.log(result.message);
  }
};

export const authenticateWithBiometrics = async () => {
  const result = await callFlutterHandler("authenticateBiometric");
  if (result.success) {
    console.log(result.message);
  } else {
    console.log(result.message);
  }
};

export const sendEncryptedData = async () => {
  const plainText = (document.getElementById("plainText") as HTMLInputElement)
    .value;
  const result = await callFlutterHandler("sendEncryptedData", [plainText]);
  if (result.success) {
    console.log("Encrypted data:", result.data);
  } else {
    console.error("Error encrypting data");
  }
};


