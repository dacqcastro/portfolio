import React from 'react';
import './App.css';
import Topbar from "./components/Topbar";
import Lowerbar from "./components/Lowerbar";

function App() {
  return (
    <div className="app">
      <Topbar />
      <Lowerbar />
    </div>
  );
}

export default App;
