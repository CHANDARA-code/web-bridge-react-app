import React from "react";
import "./App.css";
import Camera from "./components/Camera";
import FilesPicker from "./components/FilesPicker";
import FormSubmit from "./components/FormSubmit";
import Security from "./components/Security";
import PhotoPicker from "./components/PhotoPicker";
import Biomentric from "./components/Biomentric";
import OpenLink from "./components/OpenLink";

const App: React.FC = () => {
  return (
    <div className="App">
      <Camera />
      <PhotoPicker></PhotoPicker>
      <FilesPicker></FilesPicker>
      <OpenLink></OpenLink>
      <Biomentric></Biomentric>
    </div>
  );
};

export default App;
