import React from "react";
import "./App.css";
import Camera from "./components/Camera";
import FilesPicker from "./components/FilesPicker";
import FormSubmit from "./components/FormSubmit";
import Security from "./components/Security";

const App: React.FC = () => {
  return (
    <div className="App">
      <Camera />
      <FilesPicker></FilesPicker>
      <FormSubmit></FormSubmit>
      <Security></Security>
    </div>
  );
};

export default App;
