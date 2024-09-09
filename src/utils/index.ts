// import { JavascriptBridgeModel } from "../types/JavascriptBridgeModel";
// import {
//   CanModel,
//   PathImageModel,
//   PickPhotoBase64,
//   SensitiveModel,
// } from "../types/bridgeType";

// // Utility function to call Flutter handlers
// const callFlutterHandler = async (handlerName: string, args: any[] = []) => {
//   try {
//     const result = await (window as any).flutter_inappwebview.callHandler(
//       handlerName,
//       ...args
//     );
//     console.log(`${handlerName} result:`, result);
//     return result;
//   } catch (error) {
//     console.error(`${handlerName} error:`, error);
//   }
// };

// export const requestCameraPermission = async () => {
//   const result = await callFlutterHandler("requestCameraPermission");
//   if (result.success) {
//     console.log("Camera permission granted");
//   } else {
//     console.error("Camera permission denied");
//   }
// };

// export const requestPhotoPermission = async () => {
//   const result = await callFlutterHandler("requestPhotoPermission");
//   if (result.success) {
//     console.log("Photo permission granted");
//   } else {
//     console.error("Photo permission denied");
//   }
// };

// export const goToSettingToGrantPermission = async () => {
//   await callFlutterHandler("goToSettingToGrantPermission");
// };

// export const capturePhotoBase64 = async () => {
//   const result = await callFlutterHandler("capturePhotoBase64");
//   if (result.success) {
//     const imgData = result.data;
//     (document.getElementById("photo") as HTMLImageElement).src =
//       "data:image/png;base64," + imgData;
//     console.log("Photo captured successfully");
//   } else {
//     console.error("Failed to capture photo");
//   }
// };

// export const capturePhoto = async () => {
//   const result = await callFlutterHandler("capturePhoto");
//   if (result.success) {
//     const imgData = result.data;
//     console.log("Photo captured successfully", imgData);
//   } else {
//     console.error("Failed to capture photo");
//   }
// };

// export const pickPhotoBase64 = async () => {
//   try {
//     const result = (await callFlutterHandler(
//       "pickPhotoBase64"
//     )) as JavascriptBridgeModel<PickPhotoBase64>;

//     if (result == null) return;

//     if (result.success) {
//       const imgData = result.data?.base64;

//       (document.getElementById("photoPicker") as HTMLImageElement).src =
//         "data:image/png;base64," + imgData;
//       console.log("Photo captured successfully");
//     } else {
//       console.error("Failed to capture photo");
//     }
//   } catch (error) {
//     console.log("error: ", error);
//   }
// };

// export const pickPhoto = async () => {
//   try {
//     const result = (await callFlutterHandler(
//       "pickPhoto"
//     )) as JavascriptBridgeModel<PathImageModel>;
//     if (result == null) return;
//     if (result.success) {
//       const imgData = result.data?.path;
//       console.log("Photo captured successfully", imgData);
//       (document.getElementById("photoPicker") as HTMLImageElement).src =
//         "" + imgData;
//       console.log("Photo captured successfully");
//     } else {
//       console.error("Failed to capture photo");
//     }
//   } catch (error) {
//     console.log("pickPhoto => ", error);
//   }
// };

// export const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   const formData = {
//     name: (document.getElementById("name") as HTMLInputElement).value,
//     email: (document.getElementById("age") as HTMLInputElement).value,
//   };
//   await callFlutterHandler("onFormSubmit", [JSON.stringify(formData)]);

//   // console.log(result.message);
// };

// export const selectFile = async () => {
//   try {
//     const result = (await callFlutterHandler(
//       "selectFile"
//     )) as JavascriptBridgeModel<PathImageModel>;
//     if (result == null) return;
//     if (result.success) {
//       console.log("File selected:", result.data);
//       console.log("File selected Path:", result.data?.path);
//     } else {
//       console.log("No file selected");
//     }
//   } catch (error) {
//     console.log("Error:", error);
//   }
// };

// export const openLink = async () => {
//   const result = {
//     success: true,
//     data: {
//       url: "https://youtu.be/R9iJAVVnfH8?list=RDR9iJAVVnfH8",
//     },
//     message: "Data Return",
//   };
//   try {
//     await callFlutterHandler("openLink", [result]);
//   } catch (error) {
//     console.log(`error => ${error}`);
//   }
// };

// export const canAuthenticateWithBiometrics = async () => {
//   try {
//     const result = (await callFlutterHandler(
//       "canAuthenticateWithBiometrics"
//     )) as JavascriptBridgeModel<CanModel>;
//     if (result.success) {
//       console.log(result.message);
//     } else {
//       console.log(result.message);
//     }
//   } catch (error) {
//     console.log("error => web => canAuthenticateWithBiometrics =>", error);
//   }
// };

// export const authenticateWithBiometrics = async () => {
//   try {
//     const result = (await callFlutterHandler(
//       "authenticateBiometric"
//     )) as JavascriptBridgeModel<CanModel>;
//     if (result.success) {
//       console.log(result.message);
//     } else {
//       console.log(result.message);
//     }
//   } catch (error) {
//     console.log("error => web => authenticateWithBiometrics =>", error);
//   }
// };

// export const getEncryptData = async (): Promise<string | undefined> => {
//   try {
//     const result = (await callFlutterHandler(
//       "sendEncryptedData"
//     )) as JavascriptBridgeModel<SensitiveModel>;
//     if (result.success) {
//       return result.data?.sensitive;
//     } else {
//       return "";
//     }
//   } catch (error) {
//     console.log("error: $error");
//     return "";
//   }
// };

// export const getDecryptData = async (
//   encryptData: String
// ): Promise<string | undefined> => {
//   try {
//     const result = (await callFlutterHandler("receiveEncryptedData", [
//       encryptData,
//     ])) as JavascriptBridgeModel<string>;
//     if (result.success) {
//       return result.data;
//     } else {
//       return "";
//     }
//   } catch (error) {
//     console.log("error: $error");
//     return "";
//   }
// };

// export const sendEncryptedData = async () => {
//   const plainText = (document.getElementById("plainText") as HTMLInputElement)
//     .value;
//   const result = await callFlutterHandler("sendEncryptedData", [plainText]);
//   if (result.success) {
//     console.log("Encrypted data:", result.data);
//   } else {
//     console.error("Error encrypting data");
//   }
// };

export {};
