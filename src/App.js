import React, { useEffect } from 'react';
import './App.css';
import Navbar from "./components/navbar";
import Home from "./components/home";
import Skill from "./components/skill";

function App() {
  useEffect(() => {
    document.body.setAttribute('data-theme', 'light'); // replace 'light' with the theme you want to use
  }, []);

  return (
    <div className="App">
        <Navbar />
        <Home />
        <Skill />
    </div>
  );
}

export default App;